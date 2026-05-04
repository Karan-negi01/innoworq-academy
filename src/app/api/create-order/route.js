import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { enrollType } = data;

    let amount = 0;
    if (enrollType === 'course') {
      amount = 25000 * 100; // 25,000 INR in paise
    } else if (enrollType === 'workshop') {
      amount = 1 * 100; // 1 INR in paise
    } else {
      return NextResponse.json({ error: 'Invalid enrollment type' }, { status: 400 });
    }

    if (amount < 100) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    const options = {
      amount: amount,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    
    if (!order) {
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
    }

    return NextResponse.json({ 
      order_id: order.id, 
      amount: order.amount, 
      currency: order.currency 
    });
  } catch (error) {
    console.error('Razorpay Create Order Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
