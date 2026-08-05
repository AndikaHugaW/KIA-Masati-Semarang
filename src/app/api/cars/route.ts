import { NextRequest, NextResponse } from 'next/server';
import { CARS_DATA } from '@/data/cars';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const query = searchParams.get('q')?.toLowerCase();
    const id = searchParams.get('id');
    const modelsParam = searchParams.get('models'); // e.g. "Sonet,Seltos"
    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');
    const bodyTypeParam = searchParams.get('bodyType');
    const transmissionParam = searchParams.get('transmission');
    const sortParam = searchParams.get('sort'); // e.g. "price-low", "price-high", "name-asc"

    // Single Car by ID
    if (id) {
      const car = CARS_DATA.find((item) => item.id.toLowerCase() === id.toLowerCase());
      if (!car) {
        return NextResponse.json(
          { status: 'error', message: `Mobil dengan ID '${id}' tidak ditemukan` },
          { status: 404 }
        );
      }
      return NextResponse.json({
        status: 'success',
        data: car
      });
    }

    let filteredCars = [...CARS_DATA];

    // Filter by Models
    if (modelsParam && modelsParam.trim() !== '') {
      const modelsList = modelsParam.split(',').map((m) => m.trim().toLowerCase());
      filteredCars = filteredCars.filter((car) =>
        modelsList.includes(car.model.toLowerCase())
      );
    }

    // Filter by Category
    if (category && category !== 'All') {
      filteredCars = filteredCars.filter(
        (car) => car.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by Body Type
    if (bodyTypeParam && bodyTypeParam !== 'All' && bodyTypeParam !== 'Semua') {
      filteredCars = filteredCars.filter((car) => {
        if (bodyTypeParam.toLowerCase() === 'elektrik' || bodyTypeParam.toLowerCase() === 'ev') {
          return car.category === 'EV' || car.bodyType === 'EV' || car.fuelType === 'Listrik';
        }
        return car.bodyType.toLowerCase() === bodyTypeParam.toLowerCase();
      });
    }

    // Filter by Transmission Type
    if (transmissionParam && transmissionParam !== 'Semua' && transmissionParam !== 'All') {
      filteredCars = filteredCars.filter((car) => {
        if (transmissionParam.toLowerCase().includes('automatic') || transmissionParam.toLowerCase().includes('at')) {
          return car.transmissionType === 'Automatic';
        }
        if (transmissionParam.toLowerCase().includes('manual') || transmissionParam.toLowerCase().includes('mt')) {
          return car.transmissionType === 'Manual';
        }
        return true;
      });
    }

    // Filter by Min Price (in raw IDR)
    if (minPriceParam) {
      const minVal = parseFloat(minPriceParam);
      if (!isNaN(minVal)) {
        filteredCars = filteredCars.filter((car) => car.rawPrice >= minVal);
      }
    }

    // Filter by Max Price (in raw IDR)
    if (maxPriceParam) {
      const maxVal = parseFloat(maxPriceParam);
      if (!isNaN(maxVal)) {
        filteredCars = filteredCars.filter((car) => car.rawPrice <= maxVal);
      }
    }

    // Filter by Query
    if (query) {
      filteredCars = filteredCars.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.trim.toLowerCase().includes(query) ||
          car.engine.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortParam === 'price-low') {
      filteredCars.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (sortParam === 'price-high') {
      filteredCars.sort((a, b) => b.rawPrice - a.rawPrice);
    } else if (sortParam === 'name-asc') {
      filteredCars.sort((a, b) => a.name.localeCompare(b.name));
    }

    return NextResponse.json({
      status: 'success',
      total: filteredCars.length,
      dealer: 'KIA Official Dealer Semarang',
      address: 'Jl. Jend. Sudirman No. 294, Semarang, Jawa Tengah',
      contact: '+62 812-3456-7890',
      data: filteredCars
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Internal Server Error', details: String(error) },
      { status: 500 }
    );
  }
}
