import { NextRequest, NextResponse } from 'next/server';
import { CARS_DATA } from '@/data/cars';

interface TestDriveBooking {
  bookingId: string;
  name: string;
  phone: string;
  email: string;
  carId: string;
  carName: string;
  preferredDate: string;
  location: string;
  notes?: string;
  createdAt: string;
  status: 'PENDING_CONFIRMATION' | 'CONFIRMED' | 'COMPLETED';
}

// In-memory array store for demonstration during dev server execution
const bookingsStore: TestDriveBooking[] = [
  {
    bookingId: 'TD-KIA-9012',
    name: 'Budi Santoso',
    phone: '081299887766',
    email: 'budi@example.com',
    carId: 'kia-sonet',
    carName: 'KIA Sonet',
    preferredDate: '2026-08-10',
    location: 'Dealer KIA Semarang (Dr. Cipto)',
    notes: 'Ingin mencoba sunroof dan fitur 1.5L IVT',
    createdAt: new Date().toISOString(),
    status: 'CONFIRMED'
  }
];

export async function GET() {
  return NextResponse.json({
    status: 'success',
    total: bookingsStore.length,
    data: bookingsStore
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, carId, preferredDate, location, notes } = body;

    if (!name || !phone || !email || !carId || !preferredDate) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Mohon lengkapi semua bidang wajib: name, phone, email, carId, preferredDate'
        },
        { status: 400 }
      );
    }

    const selectedCar = CARS_DATA.find(
      (c) => c.id.toLowerCase() === carId.toLowerCase()
    );

    const bookingId = `TD-KIA-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: TestDriveBooking = {
      bookingId,
      name,
      phone,
      email,
      carId,
      carName: selectedCar ? selectedCar.name : carId,
      preferredDate,
      location: location || 'Dealer KIA Semarang',
      notes: notes || '',
      createdAt: new Date().toISOString(),
      status: 'PENDING_CONFIRMATION'
    };

    bookingsStore.unshift(newBooking);

    return NextResponse.json(
      {
        status: 'success',
        message: 'Jadwal Test Drive berhasil dikirim! Tim Sales KIA Semarang akan segera menghubungi Anda.',
        data: newBooking
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Payload JSON tidak valid', details: String(error) },
      { status: 400 }
    );
  }
}
