import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SEATS_FILE = path.join(process.cwd(), 'data', 'seats.json');

export async function GET() {
  try {
    if (!fs.existsSync(SEATS_FILE)) {
      return NextResponse.json({ workshop: 100 });
    }
    const seats = JSON.parse(fs.readFileSync(SEATS_FILE, 'utf8'));
    return NextResponse.json(seats);
  } catch (error) {
    return NextResponse.json({ workshop: 100 });
  }
}
