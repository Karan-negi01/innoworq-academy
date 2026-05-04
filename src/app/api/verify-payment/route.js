import { NextResponse } from 'next/server';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ENROLLMENTS_FILE = path.join(DATA_DIR, 'enrollments.json');
const SEATS_FILE = path.join(DATA_DIR, 'seats.json');

// Ensure data directory and files exist (Handle Vercel read-only filesystem)
try {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(ENROLLMENTS_FILE)) fs.writeFileSync(ENROLLMENTS_FILE, '[]');
  if (!fs.existsSync(SEATS_FILE)) fs.writeFileSync(SEATS_FILE, JSON.stringify({ workshop: 100 }));
} catch (err) {
  console.warn("Filesystem is read-only (expected on Vercel). Skipping local JSON database init.");
}
export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      formDetails 
    } = data;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: 'Missing payment details' }, { status: 400 });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json({ error: 'Payment verification failed' }, { status: 400 });
    }

    // Payment is authentic, now process the enrollment
    if (formDetails) {
      const { name, email, phone, message, enrollType } = formDetails;

      if (!name || !email || !phone) {
        console.error('Validation failed: Missing required fields in formDetails');
      } else {
        // Save enrollment
        let enrollments = [];
        try {
          const content = fs.readFileSync(ENROLLMENTS_FILE, 'utf8');
          enrollments = JSON.parse(content || '[]');
        } catch (e) {
          console.error('Error reading enrollments file:', e);
        }

        const newEnrollment = {
          id: Date.now(),
          name,
          email,
          phone,
          message: message || '',
          enrollType,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          date: new Date().toISOString()
        };
        enrollments.push(newEnrollment);
        
        try {
          fs.writeFileSync(ENROLLMENTS_FILE, JSON.stringify(enrollments, null, 2));
        } catch (e) {
          console.error('Error writing enrollment:', e);
        }

        // Decrement seats if it's a workshop
        if (enrollType === 'workshop') {
          let seats = { workshop: 100 };
          try {
            seats = JSON.parse(fs.readFileSync(SEATS_FILE, 'utf8'));
          } catch (e) { console.error('Error reading seats file:', e); }

          if (seats.workshop > 0) {
            seats.workshop -= 1;
            try {
              fs.writeFileSync(SEATS_FILE, JSON.stringify(seats, null, 2));
            } catch (e) {
              console.warn('Vercel read-only filesystem: skipping seats file update.');
            }
          }
        }
      }
    }

    return NextResponse.json({ success: true, message: 'Payment verified and enrollment saved' });
  } catch (error) {
    console.error('Payment Verification Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
