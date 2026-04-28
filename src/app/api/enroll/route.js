import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ENROLLMENTS_FILE = path.join(DATA_DIR, 'enrollments.json');
const SEATS_FILE = path.join(DATA_DIR, 'seats.json');

// Ensure data directory and files exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(ENROLLMENTS_FILE)) fs.writeFileSync(ENROLLMENTS_FILE, '[]');
if (!fs.existsSync(SEATS_FILE)) fs.writeFileSync(SEATS_FILE, JSON.stringify({ workshop: 100 }));

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Enrollment Request received:', data);
    const { name, email, phone, message, enrollType } = data;

    if (!name || !email || !phone) {
      console.error('Validation failed: Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Ensure data directory and files exist (again, just in case)
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    if (!fs.existsSync(ENROLLMENTS_FILE)) fs.writeFileSync(ENROLLMENTS_FILE, '[]');
    if (!fs.existsSync(SEATS_FILE)) fs.writeFileSync(SEATS_FILE, JSON.stringify({ workshop: 100 }));

    // 1. Save enrollment
    let enrollments = [];
    try {
      const content = fs.readFileSync(ENROLLMENTS_FILE, 'utf8');
      enrollments = JSON.parse(content || '[]');
    } catch (e) {
      console.error('Error reading enrollments file:', e);
      enrollments = [];
    }

    const newEnrollment = {
      id: Date.now(),
      name,
      email,
      phone,
      message: message || '',
      enrollType,
      date: new Date().toISOString()
    };
    enrollments.push(newEnrollment);
    
    try {
      fs.writeFileSync(ENROLLMENTS_FILE, JSON.stringify(enrollments, null, 2));
    } catch (e) {
      console.error('Error writing enrollment:', e);
      return NextResponse.json({ error: 'Failed to save enrollment' }, { status: 500 });
    }

    // 2. Decrement seats if it's a workshop
    if (enrollType === 'workshop') {
      let seats = { workshop: 100 };
      try {
        seats = JSON.parse(fs.readFileSync(SEATS_FILE, 'utf8'));
      } catch (e) { console.error('Error reading seats file:', e); }

      if (seats.workshop > 0) {
        seats.workshop -= 1;
        fs.writeFileSync(SEATS_FILE, JSON.stringify(seats, null, 2));
      } else {
        console.warn('Enrollment attempt for full workshop');
        return NextResponse.json({ error: 'No seats left' }, { status: 400 });
      }
    }

    return NextResponse.json({ success: true, message: 'Enrollment successful' });
  } catch (error) {
    console.error('Enrollment API error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error.message }, { status: 500 });
  }
}
