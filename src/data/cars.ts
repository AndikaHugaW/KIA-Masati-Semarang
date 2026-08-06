export interface CarBadge {
  text: string;
  type: 'ready' | 'promo' | 'ev';
}

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
  category: 'EV' | 'SUV' | 'MPV' | 'Crossover';
  bodyType: 'SUV' | 'MPV' | 'Crossover' | 'EV';
  priceStarting: string;
  formattedPrice: string;
  rawPrice: number;
  engine: string;
  power: string;
  transmissionType: 'Automatic' | 'Manual';
  transmissionDetail: string;
  fuelType: 'Bensin' | 'Listrik' | 'Diesel';
  seats: number;
  image: string;
  gallery: string[];
  badge?: CarBadge;
  range?: string;
  battery?: string;
  driveType?: string;
  features: string[];
  specs: {
    acceleration?: string;
    range?: string;
    driveType: string;
    warranty: string;
  };
}

export const CARS_DATA: Car[] = [
  {
    id: 'kia-sonet',
    name: 'KIA Sonet',
    trim: 'GT Line 1.4 Turbo',
    model: 'Sonet',
    brand: 'KIA',
    year: '2024',
    color: 'Intense Red',
    description: 'KIA Sonet 2024 SUV compact premium dengan desain agresif, kabin yang luas dan nyaman. Cocok untuk keluarga muda dengan fitur keselamatan dan teknologi terkini.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Compact SUV dengan Fitur Canggih Klasik & Dynamic Style',
    category: 'SUV',
    bodyType: 'SUV',
    priceStarting: 'Rp 446 Jt',
    formattedPrice: 'Rp 446.000.000',
    rawPrice: 446000000,
    engine: '1.4L Turbo',
    power: '140 PS / 242 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: '7-DCT',
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
      warranty: '5 Tahun / 150.000 km Garansi Resmi'
    }
  },
  {
    id: 'kia-ev9',
    name: 'KIA EV9',
    trim: 'Premiere iVT',
    model: 'EV9',
    brand: 'KIA',
    year: '2024',
    color: 'Aurora Black Pearl',
    description: 'KIA EV9 2024 SUV listrik futuristik 6-Seater premium dengan performa bertenaga, kabin mewah dan ruang yang sangat lapang. Dilengkapi fitur keselamatan otonom tingkat tinggi.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'The Ultimate All-Electric 6-Seater SUV',
    category: 'EV',
    bodyType: 'EV',
    priceStarting: 'Rp 1.98 M',
    formattedPrice: 'Rp 1.985.000.000',
    rawPrice: 1985000000,
    engine: 'Dual Motor EV 99.8 kWh',
    power: '385 PS / 700 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: 'Single Speed Reduction Gear',
    fuelType: 'Listrik',
    seats: 6,
    battery: '99.8 kWh',
    range: '497 km Range',
    driveType: 'AWD',
    image: '/images/katalog unit/kia ev9.webp',
    gallery: [
      '/images/katalog unit/kia ev9.webp',
      '/images/katalog unit/kia ev9/kia-ev9-interior1.webp',
      '/images/katalog unit/kia ev9/kia-ev9-interior2.webp'
    ],
    badge: { text: 'PROMO', type: 'promo' },
    features: [
      'Relaxation Swivel Seats with Massage',
      'Dual Sunroof & Meridian 14-Speaker Sound System',
      'Highway Driving Assist 2 (HDA2) & Remote Parking',
      'Ultra-Fast 800V Charging (10-80% in 24 mins)',
      'Vehicle-to-Load (V2L) Power Station',
      '360° Surround View Monitor',
      'Blind-Spot View Monitor (BVM)',
      'Head-Up Display (HUD) Full Color'
    ],
    specs: {
      acceleration: '0-100 km/h: 5.3 sec',
      range: 'Hingga 497 km (WLTP)',
      driveType: 'All-Wheel Drive (AWD)',
      warranty: '8 Tahun / 160.000 km Baterai'
    }
  },
  {
    id: 'kia-carnival',
    name: 'KIA Carnival',
    trim: '1.6 Turbo Hybrid / 2.2 CRDi',
    model: 'Carnival',
    brand: 'KIA',
    year: '2024',
    color: 'Snow White Pearl',
    description: 'KIA Carnival 2024 MPV mewah keluarga dengan konfigurasi tempat duduk 7-seater yang sangat nyaman, teknologi terdepan, serta pilihan mesin Premiere (Diesel) dan Hybrid untuk perjalanan jarak jauh.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Grand Utility Vehicle for Luxury Family Journeys',
    category: 'MPV',
    bodyType: 'MPV',
    priceStarting: 'Rp 1.039 M',
    formattedPrice: 'Rp 1.039.000.000',
    rawPrice: 1039000000,
    engine: '1.6L Turbo Hybrid / 2.2L Turbo Diesel',
    power: '245 PS / 367 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: '6-Speed / 8-Speed Automatic',
    fuelType: 'Bensin',
    seats: 7,
    image: '/images/katalog unit/kia carnival.webp',
    gallery: [
      '/images/katalog unit/kia carnival.webp',
      '/images/katalog unit/kia carnival/interior 1.webp',
      '/images/katalog unit/kia carnival/interior 2.webp'
    ],
    badge: { text: 'PROMO', type: 'promo' },
    features: [
      'Smart Power Sliding Doors & Power Tailgate',
      'Dual 12.3" Panoramic Display',
      'Bose Surround Sound System 12-Speaker',
      'Forward Collision-Avoidance Assist (FCA)',
      'Dual Sunroof & Mood Lamp Ambient Lighting',
      'Wireless Smartphone Charger',
      'Relaxation Captain Seats with Heating/Cooling',
      'Paddle Shifter & Drive Mode Select'
    ],
    specs: {
      driveType: 'Front-Wheel Drive (FWD)',
      warranty: '5 Tahun / 150.000 km Garansi Resmi'
    }
  },
  {
    id: 'kia-seltos',
    name: 'KIA Seltos',
    trim: '1.4 Turbo EX',
    model: 'Seltos',
    brand: 'KIA',
    year: '2024',
    color: 'Glacier White Pearl',
    description: 'KIA Seltos 2024 Crossover SUV modern dengan performa mesin turbo yang responsif, fitur hiburan canggih, dan sistem navigasi cerdas untuk mobilitas perkotaan.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Bold & Intelligent Compact SUV',
    category: 'SUV',
    bodyType: 'SUV',
    priceStarting: 'Rp 425 Jt',
    formattedPrice: 'Rp 425.000.000',
    rawPrice: 425000000,
    engine: '1.4L Turbo Gasoline Direct Injection',
    power: '140 PS / 242 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: '7-DCT Dual Clutch',
    fuelType: 'Bensin',
    seats: 5,
    image: '/images/katalog unit/all new seltos.webp',
    gallery: [
      '/images/katalog unit/all new seltos.webp',
      '/images/katalog unit/kia sonet.webp',
      '/images/katalog unit/kia all new carens.webp'
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
      warranty: '5 Tahun / 150.000 km Garansi Resmi'
    }
  },
  {
    id: 'kia-ev6',
    name: 'KIA All New Carens',
    trim: 'GT-Line AWD',
    model: 'All New Carens',
    brand: 'KIA',
    year: '2024',
    color: 'Imperial Blue',
    description: 'KIA All New Carens 2024 MPV modern yang stylish dan fleksibel, menghadirkan kenyamanan kelas atas untuk seluruh anggota keluarga dengan teknologi terkini.',
    kilometer: '0 km',
    status: 'Tersedia',
    tagline: 'Pure Electric Crossover Performance',
    category: 'EV',
    bodyType: 'EV',
    priceStarting: 'Rp 1.3 M',
    formattedPrice: 'Rp 1.309.000.000',
    rawPrice: 1309000000,
    engine: 'Dual Motor AWD 77.4 kWh',
    power: '325 PS / 605 Nm',
    transmissionType: 'Automatic',
    transmissionDetail: 'Single Speed',
    fuelType: 'Listrik',
    seats: 6,
    battery: '77.4 kWh',
    range: '506 km Range',
    driveType: 'AWD',
    image: '/images/katalog unit/kia all new carens.webp',
    gallery: [
      '/images/katalog unit/kia all new carens.webp',
      '/images/katalog unit/kia sonet.webp',
      '/images/katalog unit/kia ev9.webp'
    ],

    badge: { text: 'FULL EV', type: 'ev' },
    features: [
      'Dual 12.3" Curved Display',
      'Vehicle-to-Load (V2L) Power Exporting 3.6kW',
      'Augmented Reality Head-Up Display (AR-HUD)',
      'Smart Cruise Control with Stop & Go',
      'Ventilated Front Seats',
      'Ambient Mood Lighting 64 Colors',
      'Bose Premium Sound System',
      'Wireless Apple CarPlay & Android Auto'
    ],
    specs: {
      acceleration: '0-100 km/h: 5.2 sec',
      range: 'Hingga 506 km (WLTP)',
      driveType: 'All-Wheel Drive (AWD)',
      warranty: '8 Tahun / 160.000 km Baterai'
    }
  }
];
