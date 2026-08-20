import { NextRequest, NextResponse } from 'next/server';
import { CAR_SPECIFICATIONS } from '@/data/specifications';
import { CARS_DATA } from '@/data/cars';
import { CONTACT_INFO } from '@/data/contact';

// Global memory cache for dynamic specification updates
let SPECIFICATIONS_DB = { ...CAR_SPECIFICATIONS };

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const carId = searchParams.get('carId') || searchParams.get('id');
    const category = searchParams.get('category');
    const query = searchParams.get('q')?.toLowerCase();

    // 1. If specific car ID requested
    if (carId) {
      const spec = SPECIFICATIONS_DB[carId.toLowerCase()] || CAR_SPECIFICATIONS[carId.toLowerCase()];

      if (!spec) {
        // Fallback: build default spec structure using CARS_DATA if available
        const carInfo = CARS_DATA.find((c) => c.id.toLowerCase() === carId.toLowerCase());
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
          { status: 'error', message: `Data spesifikasi untuk mobil ID '${carId}' tidak ditemukan` },
          { status: 404 }
        );
      }

      // Filter by category if requested
      if (category && category !== 'all') {
        const filteredCategories = spec.categories.filter((cat) => cat.id.toLowerCase() === category.toLowerCase());
        return NextResponse.json({
          status: 'success',
          dealer: 'KIA Official Dealer Masati Semarang',
          data: { ...spec, categories: filteredCategories }
        });
      }

      return NextResponse.json({
        status: 'success',
        dealer: 'KIA Official Dealer Masati Semarang',
        data: spec
      });
    }

    // 2. Return list of all car specifications
    let allSpecs = Object.values(SPECIFICATIONS_DB);

    if (query) {
      allSpecs = allSpecs.filter(
        (spec) =>
          spec.carName.toLowerCase().includes(query) ||
          spec.tagline.toLowerCase().includes(query) ||
          spec.variants.some((v) => v.toLowerCase().includes(query))
      );
    }

    return NextResponse.json({
      status: 'success',
      total: allSpecs.length,
      dealer: 'KIA Official Dealer Masati Semarang',
      address: CONTACT_INFO.address,
      contact: '0823-2228-3081',
      data: allSpecs
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error', details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { carId, carName, tagline, variants, categories, dimensionDiagram } = body;

    if (!carId || !carName || !categories) {
      return NextResponse.json(
        { status: 'error', message: 'Field mandatory: carId, carName, dan categories harus diisi.' },
        { status: 400 }
      );
    }

    const newSpec = {
      carId,
      carName,
      tagline: tagline || '',
      variants: variants || ['Standard'],
      categories,
      dimensionDiagram
    };

    SPECIFICATIONS_DB[carId.toLowerCase()] = newSpec;

    return NextResponse.json(
      {
        status: 'success',
        message: `Data spesifikasi untuk '${carName}' berhasil disimpan.`,
        data: newSpec
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Gagal menyimpan data spesifikasi', details: String(error) },
      { status: 500 }
    );
  }
}
