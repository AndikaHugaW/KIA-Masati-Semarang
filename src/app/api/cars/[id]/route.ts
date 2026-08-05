import { NextRequest, NextResponse } from 'next/server';
import { CARS_DATA } from '@/data/cars';

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

    return NextResponse.json({
      status: 'success',
      data: car
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
