import { NextRequest, NextResponse } from 'next/server';
import { CARS_DATA } from '@/data/cars';
import { CAR_SPECIFICATIONS } from '@/data/specifications';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const car = CARS_DATA.find(
      (item) => item.id.toLowerCase() === id.toLowerCase()
    );

    if (!car) {
      return NextResponse.json(
        {
          status: 'error',
          message: `Mobil dengan ID '${id}' tidak ditemukan`
        },
        { status: 404 }
      );
    }

    const specifications = CAR_SPECIFICATIONS[id.toLowerCase()] || null;

    return NextResponse.json({
      status: 'success',
      dealer: 'KIA Official Dealer Masati Semarang',
      data: {
        ...car,
        specifications
      }
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Internal Server Error',
        details: String(error)
      },
      { status: 500 }
    );
  }
}
