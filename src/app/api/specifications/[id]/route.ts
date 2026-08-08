import { NextRequest, NextResponse } from 'next/server';
import { CAR_SPECIFICATIONS } from '@/data/specifications';
import { CARS_DATA } from '@/data/cars';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const spec = CAR_SPECIFICATIONS[id.toLowerCase()];

    if (!spec) {
      // Check fallback in CARS_DATA
      const carInfo = CARS_DATA.find((c) => c.id.toLowerCase() === id.toLowerCase());
      if (carInfo) {
        return NextResponse.json({
          status: 'success',
          dealer: 'KIA Official Dealer Masati Semarang',
          data: {
            carId: carInfo.id,
            carName: carInfo.name,
            tagline: carInfo.tagline,
            variants: [carInfo.trim || 'Standard'],
            categories: [
              {
                id: 'powertrain',
                title: 'Power Train',
                items: [
                  { name: 'Engine Type', values: { [carInfo.trim || 'Standard']: carInfo.engine } },
                  { name: 'Power / Torque', values: { [carInfo.trim || 'Standard']: carInfo.power } },
                  { name: 'Fuel Type', values: { [carInfo.trim || 'Standard']: carInfo.fuelType } }
                ]
              },
              {
                id: 'transmission',
                title: 'Transmission',
                items: [
                  { name: 'Type', values: { [carInfo.trim || 'Standard']: carInfo.transmissionDetail || carInfo.transmissionType } }
                ]
              }
            ]
          }
        });
      }

      return NextResponse.json(
        {
          status: 'error',
          message: `Spesifikasi mobil dengan ID '${id}' tidak ditemukan.`
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'success',
      dealer: 'KIA Official Dealer Masati Semarang',
      address: 'Jalan Dokter Cipto No. 136, Sarirejo, Kec. Semarang Timur, Kota Semarang, Jawa Tengah 50124',
      contact: '0813-2545-6655',
      data: spec
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

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const existingSpec = CAR_SPECIFICATIONS[id.toLowerCase()];
    if (!existingSpec) {
      return NextResponse.json(
        { status: 'error', message: `Data spesifikasi untuk ID '${id}' tidak ditemukan.` },
        { status: 404 }
      );
    }

    const updatedSpec = {
      ...existingSpec,
      ...body,
      carId: id
    };

    CAR_SPECIFICATIONS[id.toLowerCase()] = updatedSpec;

    return NextResponse.json({
      status: 'success',
      message: `Spesifikasi '${updatedSpec.carName}' berhasil diperbarui.`,
      data: updatedSpec
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Gagal memperbarui spesifikasi', details: String(error) },
      { status: 500 }
    );
  }
}
