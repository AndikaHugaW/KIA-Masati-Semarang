export interface Car {
  id: string;
  name: string;
  trim: string;
  model: string;
  brand: string;
  year: string;
  color: string;
  description: string;
  kilometer: string;
  status: string;
  tagline: string;
  category: 'SUV' | 'MPV' | 'EV' | 'SEDAN';
  bodyType: string;
  priceStarting: string;
  formattedPrice: string;
  rawPrice: number;
  engine: string;
  power: string;
  transmissionType: 'Automatic' | 'Manual';
  transmissionDetail: string;
  fuelType: 'Bensin' | 'Diesel' | 'Listrik' | 'Hybrid';
  seats: number;
  image: string;
  gallery: string[];
  battery?: string;
  range?: string;
  driveType?: string;
  badge?: {
    text: string;
    type: 'ready' | 'promo' | 'ev';
  };
  features: string[];
  specs: {
    acceleration?: string;
    range?: string;
    driveType?: string;
    warranty: string;
  };
}

export const CARS_DATA: Car[] = [
  {
    id: 'kia-sonet',
    name: 'KIA Sonet',
    trim: '1.5L IVT',
    model: 'Sonet',
    brand: 'KIA',
    year: '2026',
    color: 'Intense Red',
    description: 'KIA Sonet 2026 SUV compact premium dengan desain agresif, kabin yang luas dan nyaman. Cocok untuk keluarga muda dengan fitur keselamatan dan teknologi terkini.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Compact SUV dengan Fitur Canggih Klasik & Dynamic Style',
    category: 'SUV',
    bodyType: 'SUV',
    priceStarting: 'Rp 272 Jt',
    formattedPrice: 'Rp 272.000.000',
    rawPrice: 272000000,
    engine: 'Smartstream 1.5L (1500 cc)',
    power: '115 PS / 144 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: 'IVT',
    fuelType: 'Bensin',
    seats: 5,
    image: '/images/katalog unit/kia sonet.webp',
    gallery: [
      '/images/katalog unit/kia sonet.webp',
      '/images/katalog unit/kia sonet/kia sonet2.webp',
      '/images/katalog unit/kia sonet/kia sonet.webp'
    ],
    badge: { text: 'READY STOCK', type: 'ready' },
    features: [
      'Bose Premium 7-Speaker System',
      'Sunroof Electric with One-Touch',
      'Ventilated Front Seats & Wireless Charger',
      'Drive Mode & Traction Select',
      '6 Airbags & ABS, ESC, HAC',
      '10.25" HD Touchscreen Display',
      'Cruising Control & TPMS',
      'Leatherette Upholstery'
    ],
    specs: {
      driveType: 'Front-Wheel Drive (FWD)',
      warranty: '7 Tahun / 200.000 km Garansi Resmi'
    }
  },
  {
    id: 'kia-all-new-carens',
    name: 'KIA All New Carens',
    trim: '1.5 MPI / IVT',
    model: 'All New Carens',
    brand: 'KIA',
    year: '2026',
    color: 'Imperial Blue',
    description: 'KIA All New Carens 2026 MPV modern yang stylish dan fleksibel, menghadirkan kenyamanan kelas atas untuk seluruh anggota keluarga dengan teknologi terkini.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Stylish & Versatile Family MPV',
    category: 'MPV',
    bodyType: 'MPV',
    priceStarting: 'Rp 310 Jt',
    formattedPrice: 'Rp 310.000.000',
    rawPrice: 310000000,
    engine: 'Smartstream 1.5L (1500 cc)',
    power: '115 PS / 144 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: 'IVT / Manual',
    fuelType: 'Bensin',
    seats: 7,
    image: '/images/katalog unit/kia all new carens.webp',
    gallery: [
      '/images/katalog unit/kia all new carens.webp',
      '/images/katalog unit/kia all new carens/interior-2.webp',
      '/images/katalog unit/kia all new carens/interior-3.webp'
    ],
    badge: { text: 'READY STOCK', type: 'ready' },
    features: [
      'Dual 10.25" Touchscreen Display',
      'Bose Premium Sound System 8-Speaker',
      'Ventilated Front Seats & Wireless Charger',
      'Sunroof Electric with One-Touch',
      'Ambient Mood Lighting 64 Colors',
      'Captain Seats 2nd Row',
      'Drive & Traction Mode Select',
      '6 Airbags & ABS, ESC, HAC'
    ],
    specs: {
      driveType: 'Front-Wheel Drive (FWD)',
      warranty: '7 Tahun / 200.000 km Garansi Resmi'
    }
  },
  {
    id: 'kia-seltos',
    name: 'KIA All-New Seltos',
    trim: '1.5L IVT',
    model: 'All-New Seltos',
    brand: 'KIA',
    year: '2026',
    color: 'Glacier White Pearl',
    description: 'KIA All-New Seltos 2026 Crossover SUV modern dengan performa mesin 1.5L IVT yang responsif, fitur hiburan canggih, dan sistem navigasi cerdas untuk mobilitas perkotaan.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Bold & Intelligent Compact SUV',
    category: 'SUV',
    bodyType: 'SUV',
    priceStarting: 'Rp 373 Jt',
    formattedPrice: 'Rp 373.000.000',
    rawPrice: 373000000,
    engine: 'Smartstream 1.5L (1500 cc)',
    power: '115 PS / 144 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: 'IVT',
    fuelType: 'Bensin',
    seats: 5,
    image: '/images/katalog unit/kia seltos/kia-seltos.webp',
    gallery: [
      '/images/katalog unit/kia seltos/kia-seltos.webp',
      '/images/katalog unit/kia seltos/interior-1.webp',
      '/images/katalog unit/kia seltos/interior-2.webp'
    ],
    badge: { text: 'READY STOCK', type: 'ready' },
    features: [
      'Sunroof Electric with One-Touch',
      'Bose Premium 8-Speaker Audio System',
      'Drive & Traction Mode Select',
      'Wireless Smartphone Charger',
      'Cruise Control & Paddle Shift',
      '8-inch Touchscreen Audio Display',
      '6 Airbags & Rear View Camera',
      'Electronic Stability Control'
    ],
    specs: {
      acceleration: '0-100 km/h: 8.9 sec',
      driveType: 'Front-Wheel Drive (FWD)',
      warranty: '7 Tahun / 200.000 km Garansi Resmi'
    }
  }
];
