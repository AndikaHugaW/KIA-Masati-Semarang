export interface SpecItem {
  name: string;
  values: Record<string, string>; // e.g. { "1.5 M/T": "Smartstream 1.5L MPI", "1.5 Trendy": "Smartstream 1.5L MPI", "1.4 Turbo Motion": "1.4L Turbo GDI" }
}

export interface SpecCategory {
  id: string;
  title: string;
  items: SpecItem[];
}

export interface CarSpecification {
  carId: string;
  carName: string;
  tagline: string;
  variants: string[]; // List of variant names for headers
  categories: SpecCategory[];
  dimensionDiagram?: {
    length: string;
    width: string;
    height: string;
    wheelbase: string;
    groundClearance: string;
  };
  wheelSpec?: {
    type: string;
    description: string;
    image?: string;
  };
}

export const CAR_SPECIFICATIONS: Record<string, CarSpecification> = {
  'kia-all-new-carens': {
    carId: 'kia-all-new-carens',
    carName: 'KIA All New Carens',
    tagline: 'Lupakan yang Biasa, Hidupkan yang Luar Biasa',
    variants: ['1.5 MPI Premiere M/T 7-Seater', '1.5 MPI Trendy 7-Seater', '1.4 Turbo Motion 6-Seater'],
    dimensionDiagram: {
      length: '4,540 mm',
      width: '1,800 mm',
      height: '1,700 mm',
      wheelbase: '2,780 mm',
      groundClearance: '195 mm'
    },
    wheelSpec: {
      type: '17" Crystal Cut Alloy',
      description: 'R17 Crystal Cut Dual Tone Alloy Wheels dengan desain aerodinamis modern.'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Mesin & Performa (Power Train)',
        items: [
          {
            name: 'Tipe Mesin',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Smartstream Gamma II 1.5L MPI',
              '1.5 MPI Trendy 7-Seater': 'Smartstream Gamma II 1.5L MPI',
              '1.4 Turbo Motion 6-Seater': 'Kappa 1.4L Turbo GDI'
            }
          },
          {
            name: 'Kapasitas Mesin (cc)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '1,497 cc',
              '1.5 MPI Trendy 7-Seater': '1,497 cc',
              '1.4 Turbo Motion 6-Seater': '1,353 cc'
            }
          },
          {
            name: 'Daya Maksimum (PS / rpm)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '115 PS / 6,300 rpm',
              '1.5 MPI Trendy 7-Seater': '115 PS / 6,300 rpm',
              '1.4 Turbo Motion 6-Seater': '140 PS / 6,000 rpm'
            }
          },
          {
            name: 'Torsi Maksimum (Nm / rpm)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '144 Nm / 4,500 rpm',
              '1.5 MPI Trendy 7-Seater': '144 Nm / 4,500 rpm',
              '1.4 Turbo Motion 6-Seater': '242 Nm / 1,500 - 3,200 rpm'
            }
          },
          {
            name: 'Transmisi',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Manual 6-Speed',
              '1.5 MPI Trendy 7-Seater': 'IVT (Intelligent Variable Transmission)',
              '1.4 Turbo Motion 6-Seater': '7-Speed Dual Clutch Transmission (DCT)'
            }
          },
          {
            name: 'Kapasitas Tangki BBM',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '45 Liter',
              '1.5 MPI Trendy 7-Seater': '45 Liter',
              '1.4 Turbo Motion 6-Seater': '45 Liter'
            }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensi & Kapasitas (Dimensions)',
        items: [
          {
            name: 'Panjang x Lebar x Tinggi (mm)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '4,540 x 1,800 x 1,700',
              '1.5 MPI Trendy 7-Seater': '4,540 x 1,800 x 1,700',
              '1.4 Turbo Motion 6-Seater': '4,540 x 1,800 x 1,700'
            }
          },
          {
            name: 'Jarak Sumbu Roda (Wheelbase)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '2,780 mm',
              '1.5 MPI Trendy 7-Seater': '2,780 mm',
              '1.4 Turbo Motion 6-Seater': '2,780 mm'
            }
          },
          {
            name: 'Ground Clearance',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '195 mm',
              '1.5 MPI Trendy 7-Seater': '195 mm',
              '1.4 Turbo Motion 6-Seater': '195 mm'
            }
          },
          {
            name: 'Kapasitas Tempat Duduk',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '7-Seater (Bench 2nd Row)',
              '1.5 MPI Trendy 7-Seater': '7-Seater (Bench 2nd Row)',
              '1.4 Turbo Motion 6-Seater': '6-Seater (Captain Seats 2nd Row)'
            }
          }
        ]
      },
      {
        id: 'chassis',
        title: 'Sasis & Kemudi (Steering, Suspension & Brakes)',
        items: [
          {
            name: 'Sistem Kemudi',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Motor Driven Power Steering (MDPS)',
              '1.5 MPI Trendy 7-Seater': 'Motor Driven Power Steering (MDPS)',
              '1.4 Turbo Motion 6-Seater': 'Motor Driven Power Steering (MDPS)'
            }
          },
          {
            name: 'Suspensi Depan',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'McPherson Strut with Coil Spring',
              '1.5 MPI Trendy 7-Seater': 'McPherson Strut with Coil Spring',
              '1.4 Turbo Motion 6-Seater': 'McPherson Strut with Coil Spring'
            }
          },
          {
            name: 'Suspensi Belakang',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Coupled Torsion Beam Axle (CTBA)',
              '1.5 MPI Trendy 7-Seater': 'Coupled Torsion Beam Axle (CTBA)',
              '1.4 Turbo Motion 6-Seater': 'Coupled Torsion Beam Axle (CTBA)'
            }
          },
          {
            name: 'Sistem Rem (Depan / Belakang)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Ventilated Disc / Solid Disc',
              '1.5 MPI Trendy 7-Seater': 'Ventilated Disc / Solid Disc',
              '1.4 Turbo Motion 6-Seater': 'Ventilated Disc / Solid Disc'
            }
          },
          {
            name: 'Ukuran Ban & Velg',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '205/65 R16 Dual Tone Alloy',
              '1.5 MPI Trendy 7-Seater': '205/65 R16 Dual Tone Alloy',
              '1.4 Turbo Motion 6-Seater': '215/60 R17 Crystal Cut Dual Tone Alloy'
            }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Fitur Eksterior (Exterior)',
        items: [
          {
            name: 'Lampu Utama (Headlamps)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Crown Jewel Multi Reflector LED',
              '1.5 MPI Trendy 7-Seater': 'Crown Jewel Multi Reflector LED',
              '1.4 Turbo Motion 6-Seater': 'Crown Jewel Multi Reflector LED'
            }
          },
          {
            name: 'Daytime Running Light (DRL)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Star Map LED DRL',
              '1.5 MPI Trendy 7-Seater': 'Star Map LED DRL',
              '1.4 Turbo Motion 6-Seater': 'Star Map LED DRL'
            }
          },
          {
            name: 'Sunroof',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Manual Tilt & Slide',
              '1.5 MPI Trendy 7-Seater': 'Sky Light Electric Sunroof',
              '1.4 Turbo Motion 6-Seater': 'Sky Light Electric Sunroof'
            }
          },
          {
            name: 'Roof Rail & Chrome Garnish',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia',
              '1.5 MPI Trendy 7-Seater': 'Tersedia',
              '1.4 Turbo Motion 6-Seater': 'Tersedia'
            }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior & Kenyamanan (Interior & Comfort)',
        items: [
          {
            name: 'Material Upholstery Jok',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'High-Grade Leatherette',
              '1.5 MPI Trendy 7-Seater': 'High-Grade Leatherette',
              '1.4 Turbo Motion 6-Seater': 'Premium Leatherette with Indigo Accents'
            }
          },
          {
            name: 'Ventilated Front Seats',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '-',
              '1.5 MPI Trendy 7-Seater': 'Tersedia (Pengemudi & Penumpang Depan)',
              '1.4 Turbo Motion 6-Seater': 'Tersedia (Pengemudi & Penumpang Depan)'
            }
          },
          {
            name: 'Captain Seats Baris ke-2',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '-',
              '1.5 MPI Trendy 7-Seater': '-',
              '1.4 Turbo Motion 6-Seater': 'Tersedia (Sliding, Reclining & Armrest)'
            }
          },
          {
            name: 'Ambient Mood Lighting',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '64 Colors Ambient Lighting',
              '1.5 MPI Trendy 7-Seater': '64 Colors Ambient Lighting',
              '1.4 Turbo Motion 6-Seater': '64 Colors Ambient Lighting'
            }
          },
          {
            name: 'Wireless Smartphone Charger',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '-',
              '1.5 MPI Trendy 7-Seater': 'Tersedia dengan Cooling Pad',
              '1.4 Turbo Motion 6-Seater': 'Tersedia dengan Cooling Pad'
            }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment & Audio (Infotainment)',
        items: [
          {
            name: 'Head Unit Display',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '10.25" HD Touchscreen Display Navigasi',
              '1.5 MPI Trendy 7-Seater': '10.25" HD Touchscreen Display Navigasi',
              '1.4 Turbo Motion 6-Seater': '10.25" HD Touchscreen Display Navigasi'
            }
          },
          {
            name: 'Sound System',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Bose Premium Sound System 8-Speaker',
              '1.5 MPI Trendy 7-Seater': 'Bose Premium Sound System 8-Speaker',
              '1.4 Turbo Motion 6-Seater': 'Bose Premium Sound System 8-Speaker'
            }
          },
          {
            name: 'Apple CarPlay & Android Auto',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Wireless CarPlay & Wireless Android Auto',
              '1.5 MPI Trendy 7-Seater': 'Wireless CarPlay & Wireless Android Auto',
              '1.4 Turbo Motion 6-Seater': 'Wireless CarPlay & Wireless Android Auto'
            }
          },
          {
            name: 'Digital Instrument Cluster',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '12.5" Full Digital TFT Cluster',
              '1.5 MPI Trendy 7-Seater': '12.5" Full Digital TFT Cluster',
              '1.4 Turbo Motion 6-Seater': '12.5" Full Digital TFT Cluster'
            }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Keselamatan & Keamanan (Safety)',
        items: [
          {
            name: 'Jumlah Airbag',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': '6 Airbags (Dual Depan, Samping & Tirai)',
              '1.5 MPI Trendy 7-Seater': '6 Airbags (Dual Depan, Samping & Tirai)',
              '1.4 Turbo Motion 6-Seater': '6 Airbags (Dual Depan, Samping & Tirai)'
            }
          },
          {
            name: 'Sistem Rem ABS, EBD, BA',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia',
              '1.5 MPI Trendy 7-Seater': 'Tersedia',
              '1.4 Turbo Motion 6-Seater': 'Tersedia'
            }
          },
          {
            name: 'Electronic Stability Control (ESC)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia',
              '1.5 MPI Trendy 7-Seater': 'Tersedia',
              '1.4 Turbo Motion 6-Seater': 'Tersedia'
            }
          },
          {
            name: 'Hill-Start Assist (HAC) & DBC',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia',
              '1.5 MPI Trendy 7-Seater': 'Tersedia',
              '1.4 Turbo Motion 6-Seater': 'Tersedia'
            }
          },
          {
            name: 'Tyre Pressure Monitoring System (TPMS)',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia Highline System',
              '1.5 MPI Trendy 7-Seater': 'Tersedia Highline System',
              '1.4 Turbo Motion 6-Seater': 'Tersedia Highline System'
            }
          },
          {
            name: 'All-Wheel Disc Brakes',
            values: {
              '1.5 MPI Premiere M/T 7-Seater': 'Tersedia (4 Rem Cakram)',
              '1.5 MPI Trendy 7-Seater': 'Tersedia (4 Rem Cakram)',
              '1.4 Turbo Motion 6-Seater': 'Tersedia (4 Rem Cakram)'
            }
          }
        ]
      }
    ]
  },
  'kia-sonet': {
    carId: 'kia-sonet',
    carName: 'KIA Sonet',
    tagline: 'Compact SUV dengan Fitur Canggih Klasik & Dynamic Style',
    variants: ['Smart 1.5 M/T', 'Premiere 1.5 IVT', 'GT Line 1.4 Turbo'],
    dimensionDiagram: {
      length: '4,120 mm',
      width: '1,790 mm',
      height: '1,642 mm',
      wheelbase: '2,500 mm',
      groundClearance: '205 mm'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Mesin & Performa',
        items: [
          {
            name: 'Tipe Mesin',
            values: {
              'Smart 1.5 M/T': '1.5L Smartstream Gamma II',
              'Premiere 1.5 IVT': '1.5L Smartstream Gamma II',
              'GT Line 1.4 Turbo': '1.4L Turbocharged Gasoline'
            }
          },
          {
            name: 'Daya Maksimum',
            values: {
              'Smart 1.5 M/T': '115 PS / 6,300 rpm',
              'Premiere 1.5 IVT': '115 PS / 6,300 rpm',
              'GT Line 1.4 Turbo': '140 PS / 6,000 rpm'
            }
          },
          {
            name: 'Transmisi',
            values: {
              'Smart 1.5 M/T': 'Manual 6-Speed',
              'Premiere 1.5 IVT': 'IVT (Intelligent Variable Transmission)',
              'GT Line 1.4 Turbo': '7-Speed Dual Clutch Transmission'
            }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensi & Kapasitas',
        items: [
          {
            name: 'Panjang x Lebar x Tinggi',
            values: {
              'Smart 1.5 M/T': '4,120 x 1,790 x 1,642 mm',
              'Premiere 1.5 IVT': '4,120 x 1,790 x 1,642 mm',
              'GT Line 1.4 Turbo': '4,120 x 1,790 x 1,642 mm'
            }
          },
          {
            name: 'Ground Clearance',
            values: {
              'Smart 1.5 M/T': '205 mm',
              'Premiere 1.5 IVT': '205 mm',
              'GT Line 1.4 Turbo': '205 mm'
            }
          }
        ]
      }
    ]
  },
  'kia-seltos': {
    carId: 'kia-seltos',
    carName: 'KIA All-New Seltos',
    tagline: 'Bold & Intelligent Compact SUV',
    variants: ['1.5L IVT', '1.4 Turbo Premiere', '1.4 Turbo GT Line'],
    dimensionDiagram: {
      length: '4,315 mm',
      width: '1,800 mm',
      height: '1,645 mm',
      wheelbase: '2,610 mm',
      groundClearance: '190 mm'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Mesin & Performa',
        items: [
          {
            name: 'Tipe Mesin',
            values: {
              '1.5L IVT': 'Smartstream 1.5L MPI',
              '1.4 Turbo Premiere': '1.4L Turbo GDI',
              '1.4 Turbo GT Line': '1.4L Turbo GDI'
            }
          },
          {
            name: 'Daya Maksimum',
            values: {
              '1.5L IVT': '115 PS / 6,300 rpm',
              '1.4 Turbo Premiere': '140 PS / 6,000 rpm',
              '1.4 Turbo GT Line': '140 PS / 6,000 rpm'
            }
          }
        ]
      }
    ]
  },
  'kia-ev9': {
    carId: 'kia-ev9',
    carName: 'KIA EV9',
    tagline: 'The Ultimate All-Electric 6-Seater SUV',
    variants: ['GT Line AWD Dual Motor'],
    dimensionDiagram: {
      length: '5,010 mm',
      width: '1,980 mm',
      height: '1,780 mm',
      wheelbase: '3,100 mm',
      groundClearance: '177 mm'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Baterai & Motor Listrik',
        items: [
          {
            name: 'Kapasitas Baterai',
            values: {
              'GT Line AWD Dual Motor': '99.8 kWh Lithium-ion'
            }
          },
          {
            name: 'Jarak Tempuh (WLTP)',
            values: {
              'GT Line AWD Dual Motor': 'Hingga 497 km'
            }
          },
          {
            name: 'Tenaga Maksimum',
            values: {
              'GT Line AWD Dual Motor': '385 PS / 700 Nm'
            }
          }
        ]
      }
    ]
  },
  'kia-ev6': {
    carId: 'kia-ev6',
    carName: 'KIA EV6',
    tagline: 'Inspiring Movement All-Electric Crossover',
    variants: ['GT-Line AWD'],
    dimensionDiagram: {
      length: '4,695 mm',
      width: '1,890 mm',
      height: '1,550 mm',
      wheelbase: '2,900 mm',
      groundClearance: '160 mm'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Baterai & Motor Listrik',
        items: [
          {
            name: 'Kapasitas Baterai',
            values: {
              'GT-Line AWD': '77.4 kWh Lithium-ion'
            }
          },
          {
            name: 'Jarak Tempuh (WLTP)',
            values: {
              'GT-Line AWD': 'Hingga 506 km'
            }
          }
        ]
      }
    ]
  },
  'kia-carnival': {
    carId: 'kia-carnival',
    carName: 'KIA Carnival',
    tagline: 'Grand Utility Vehicle for Luxury Family Journeys',
    variants: ['2.2 CRDi Dynamic', '2.2 CRDi Premiere 7-Seater', '1.6 Turbo Hybrid Premiere'],
    dimensionDiagram: {
      length: '5,155 mm',
      width: '1,995 mm',
      height: '1,775 mm',
      wheelbase: '3,090 mm',
      groundClearance: '172 mm'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Mesin & Performa',
        items: [
          {
            name: 'Tipe Mesin',
            values: {
              '2.2 CRDi Dynamic': 'Smartstream D2.2 CRDi VGT',
              '2.2 CRDi Premiere 7-Seater': 'Smartstream D2.2 CRDi VGT',
              '1.6 Turbo Hybrid Premiere': 'Smartstream G1.6 Turbo Hybrid'
            }
          }
        ]
      }
    ]
  }
};
