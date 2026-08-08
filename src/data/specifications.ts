export interface SpecItem {
  name: string;
  subName?: string;
  values: Record<string, string>;
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
  variants: string[];
  categories: SpecCategory[];
  dimensionDiagram?: {
    lengthWidthHeight: string;
    wheelbase: string;
    tread: string;
    overhang: string;
    groundClearance: string;
    cargoCapacity: string;
  };
}

export const CAR_SPECIFICATIONS: Record<string, CarSpecification> = {
  'kia-all-new-carens': {
    carId: 'kia-all-new-carens',
    carName: 'KIA All New Carens',
    tagline: 'Lupakan yang Biasa, Hidupkan yang Luar Biasa',
    variants: ['M/T', 'Trendy', 'Motion', 'Signature'],
    dimensionDiagram: {
      lengthWidthHeight: '4.550 / 1.800 / 1.708 mm',
      wheelbase: '2.780 mm',
      tread: '1.563 / 1.587 mm',
      overhang: '830 / 940 mm',
      groundClearance: '205 mm',
      cargoCapacity: '216 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Engine Type',
            values: {
              'M/T': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'Trendy': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'Motion': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'Signature': 'Smartstream, Gamma II, DOHC, Dual CVVT'
            }
          },
          {
            name: 'Displacement (cc)',
            values: { 'M/T': '1.497', 'Trendy': '1.497', 'Motion': '1.497', 'Signature': '1.497' }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: { 'M/T': '115 / 6.300', 'Trendy': '115 / 6.300', 'Motion': '115 / 6.300', 'Signature': '115 / 6.300' }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: { 'M/T': '144 / 4.500', 'Trendy': '144 / 4.500', 'Motion': '144 / 4.500', 'Signature': '144 / 4.500' }
          },
          {
            name: 'Emission',
            values: { 'M/T': 'Euro 4', 'Trendy': 'Euro 4', 'Motion': 'Euro 4', 'Signature': 'Euro 4' }
          },
          {
            name: 'Fuel Tank Capacity (L)',
            values: { 'M/T': '45', 'Trendy': '45', 'Motion': '45', 'Signature': '45' }
          }
        ]
      },
      {
        id: 'transmission',
        title: 'Transmission',
        items: [
          {
            name: 'Transmission Type',
            values: { 'M/T': 'M/T 6-Speed', 'Trendy': 'Intelligent VT', 'Motion': 'Intelligent VT', 'Signature': 'Intelligent VT' }
          },
          {
            name: 'Gear Ratio 1ST',
            values: { 'M/T': '3.833', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio 2ND',
            values: { 'M/T': '2.143', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio 3RD',
            values: { 'M/T': '1.370', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio 4TH',
            values: { 'M/T': '1.036', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio 5TH',
            values: { 'M/T': '0.794', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio 6TH',
            values: { 'M/T': '0.667', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Reverse Ratio',
            values: { 'M/T': '3.700', 'Trendy': '2.822 - 1.822', 'Motion': '2.822 - 1.822', 'Signature': '2.822 - 1.822' }
          },
          {
            name: 'Final Ratio',
            values: { 'M/T': '4.882', 'Trendy': '6.483', 'Motion': '6.483', 'Signature': '6.483' }
          }
        ]
      },
      {
        id: 'steering',
        title: 'Steering',
        items: [
          {
            name: 'Type',
            values: { 'M/T': 'Rack & Pinion', 'Trendy': 'Rack & Pinion', 'Motion': 'Rack & Pinion', 'Signature': 'Rack & Pinion' }
          },
          {
            name: 'Adjustable',
            values: { 'M/T': 'Tilt & Telescopic', 'Trendy': 'Tilt & Telescopic', 'Motion': 'Tilt & Telescopic', 'Signature': 'Tilt & Telescopic' }
          },
          {
            name: 'Power Steering',
            values: { 'M/T': 'MDPS', 'Trendy': 'MDPS', 'Motion': 'MDPS', 'Signature': 'MDPS' }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspension',
        items: [
          {
            name: 'Front Suspension',
            values: { 'M/T': 'MacPherson Strut', 'Trendy': 'MacPherson Strut', 'Motion': 'MacPherson Strut', 'Signature': 'MacPherson Strut' }
          },
          {
            name: 'Rear Suspension',
            values: { 'M/T': 'Coupled Torsion Beam Axle', 'Trendy': 'Coupled Torsion Beam Axle', 'Motion': 'Coupled Torsion Beam Axle', 'Signature': 'Coupled Torsion Beam Axle' }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Brakes',
        items: [
          {
            name: 'System',
            values: { 'M/T': 'ABS, EBD, BA', 'Trendy': 'ABS, EBD, BA', 'Motion': 'ABS, EBD, BA', 'Signature': 'ABS, EBD, BA' }
          },
          {
            name: 'Electronic Stability Control (ESC)',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Hill Start-assist Control (HAC)',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Downhill Brake Control (DBC)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Front Brakes',
            values: { 'M/T': 'Ventilated Disc', 'Trendy': 'Ventilated Disc', 'Motion': 'Ventilated Disc', 'Signature': 'Ventilated Disc' }
          },
          {
            name: 'Rear Brakes',
            values: { 'M/T': 'Disc', 'Trendy': 'Disc', 'Motion': 'Disc', 'Signature': 'Disc' }
          },
          {
            name: 'Parking Brake',
            values: { 'M/T': 'Hand Brake', 'Trendy': 'Hand Brake', 'Motion': 'Hand Brake', 'Signature': 'Electronic Parking Brake (EPB)' }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensions',
        items: [
          {
            name: 'Length / Width / Height (mm)',
            values: { 'M/T': '4.550 / 1.800 / 1.708', 'Trendy': '4.550 / 1.800 / 1.708', 'Motion': '4.550 / 1.800 / 1.708', 'Signature': '4.550 / 1.800 / 1.708' }
          },
          {
            name: 'Wheelbase (mm)',
            values: { 'M/T': '2.780', 'Trendy': '2.780', 'Motion': '2.780', 'Signature': '2.780' }
          },
          {
            name: 'Front / Rear Tread (mm)',
            values: { 'M/T': '1.563 / 1.587', 'Trendy': '1.563 / 1.587', 'Motion': '1.563 / 1.587', 'Signature': '1.563 / 1.587' }
          },
          {
            name: 'Ground Clearance (mm)',
            values: { 'M/T': '205', 'Trendy': '205', 'Motion': '205', 'Signature': '205' }
          },
          {
            name: 'Cargo Capacity (L)',
            values: { 'M/T': '216', 'Trendy': '216', 'Motion': '216', 'Signature': '216' }
          }
        ]
      },
      {
        id: 'wheels',
        title: 'Wheels & Tires',
        items: [
          {
            name: 'Wheel Type',
            values: { 'M/T': '15" Alloy Wheels', 'Trendy': '15" Alloy Wheels', 'Motion': '17" Diamond Cut Alloy', 'Signature': '17" Diamond Cut Alloy' }
          },
          {
            name: 'Tire Size',
            values: { 'M/T': '195/65 R15', 'Trendy': '195/65 R15', 'Motion': '215/55 R17', 'Signature': '215/55 R17' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Exterior',
        items: [
          {
            name: 'Head Lamp',
            values: { 'M/T': 'Projector Halogen', 'Trendy': 'Projector Halogen', 'Motion': 'Multi Reflector LED', 'Signature': 'Multi Reflector LED' }
          },
          {
            name: 'Star Map LED DRL with Turn Signals',
            values: { 'M/T': 'Bulb', 'Trendy': 'Bulb', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear Star Map LED Connected',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'SunRoof',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: '26.6" Dual Panoramic Display with 12.3" Cluster',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Supervision 4.2" TFT LCD Cluster',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '-', 'Signature': '-' }
          },
          {
            name: 'Seat Material',
            values: { 'M/T': 'Leatherette & Cloth', 'Trendy': 'Leatherette & Cloth', 'Motion': 'Leatherette & Cloth', 'Signature': 'Leatherette & Cloth' }
          },
          {
            name: '2nd Row Captain Seat',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Automatic Climate Control',
            values: { 'M/T': 'Manual', 'Trendy': 'Manual', 'Motion': 'Auto', 'Signature': 'Auto' }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Comfort & Convenience',
        items: [
          {
            name: 'Push Start Stop Button',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Remote Start Engine',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Drive Mode Select',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Wireless Charging',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: 'Infotainment Display Size',
            values: { 'M/T': '8" Touchscreen', 'Trendy': '8" Touchscreen', 'Motion': '12.3" Display', 'Signature': '12.3" Display' }
          },
          {
            name: 'Audio Speaker',
            values: { 'M/T': '6-speakers', 'Trendy': '6-speakers', 'Motion': 'BOSE 8-speakers', 'Signature': 'BOSE 8-speakers' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        items: [
          {
            name: 'Airbags',
            values: { 'M/T': '2 Air Bags', 'Trendy': '2 Air Bags', 'Motion': '6 Air Bags', 'Signature': '6 Air Bags' }
          },
          {
            name: 'TPMS',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Parking Distance Warning',
            values: { 'M/T': 'Reverse', 'Trendy': 'Reverse', 'Motion': 'Forward & Reverse', 'Signature': 'Forward & Reverse' }
          }
        ]
      },
      {
        id: 'adas',
        title: 'ADAS',
        items: [
          {
            name: 'Smart Cruise Control (SCC)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Forward Collision-avoidance Assist (FCA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Lane Keeping Assist (LKA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
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
      lengthWidthHeight: '4.120 / 1.790 / 1.642 mm',
      wheelbase: '2.500 mm',
      tread: '1.559 / 1.571 mm',
      overhang: '795 / 825 mm',
      groundClearance: '205 mm',
      cargoCapacity: '392 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Engine Type',
            values: {
              'Smart 1.5 M/T': 'Smartstream Gamma II 1.5L MPI',
              'Premiere 1.5 IVT': 'Smartstream Gamma II 1.5L MPI',
              'GT Line 1.4 Turbo': 'Kappa 1.4L Turbocharged GDI'
            }
          },
          {
            name: 'Displacement (cc)',
            values: { 'Smart 1.5 M/T': '1.497', 'Premiere 1.5 IVT': '1.497', 'GT Line 1.4 Turbo': '1.353' }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: { 'Smart 1.5 M/T': '115 / 6.300', 'Premiere 1.5 IVT': '115 / 6.300', 'GT Line 1.4 Turbo': '140 / 6.000' }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: { 'Smart 1.5 M/T': '144 / 4.500', 'Premiere 1.5 IVT': '144 / 4.500', 'GT Line 1.4 Turbo': '242 / 1.500-3.200' }
          }
        ]
      },
      {
        id: 'transmission',
        title: 'Transmission',
        items: [
          {
            name: 'Type',
            values: { 'Smart 1.5 M/T': 'Manual 6-Speed', 'Premiere 1.5 IVT': 'Intelligent VT', 'GT Line 1.4 Turbo': '7-Speed DCT' }
          }
        ]
      },
      {
        id: 'wheels',
        title: 'Wheels & Tires',
        items: [
          {
            name: 'Wheel Spec',
            values: { 'Smart 1.5 M/T': '16" Alloy 215/60 R16', 'Premiere 1.5 IVT': '16" Alloy 215/60 R16', 'GT Line 1.4 Turbo': '16" Crystal Cut Dual Tone' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: 'Audio System',
            values: { 'Smart 1.5 M/T': '8" Touchscreen Display', 'Premiere 1.5 IVT': 'Bose Premium 7-Speaker', 'GT Line 1.4 Turbo': 'Bose Premium 7-Speaker' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        items: [
          {
            name: 'Airbags',
            values: { 'Smart 1.5 M/T': '2 Airbags', 'Premiere 1.5 IVT': '6 Airbags', 'GT Line 1.4 Turbo': '6 Airbags' }
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
      lengthWidthHeight: '5.010 / 1.980 / 1.780 mm',
      wheelbase: '3.100 mm',
      tread: '1.692 / 1.704 mm',
      overhang: '885 / 1.025 mm',
      groundClearance: '177 mm',
      cargoCapacity: '333 L (up to 2.318 L)'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Baterai & Motor Listrik',
        items: [
          {
            name: 'Motor Type',
            values: { 'GT Line AWD Dual Motor': 'Dual Electric Motor AWD' }
          },
          {
            name: 'Battery Capacity',
            values: { 'GT Line AWD Dual Motor': '99.8 kWh Lithium-ion' }
          },
          {
            name: 'Max Power & Torque',
            values: { 'GT Line AWD Dual Motor': '385 PS / 700 Nm' }
          },
          {
            name: 'Driving Range (WLTP)',
            values: { 'GT Line AWD Dual Motor': 'Hingga 497 km' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior & Luxury',
        items: [
          {
            name: 'Seating Configuration',
            values: { 'GT Line AWD Dual Motor': '6-Seater with Relaxation Swivel Seats' }
          },
          {
            name: 'Sound System',
            values: { 'GT Line AWD Dual Motor': 'Meridian 14-Speaker Surround Sound' }
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
      lengthWidthHeight: '5.155 / 1.995 / 1.775 mm',
      wheelbase: '3.090 mm',
      tread: '1.740 / 1.741 mm',
      overhang: '935 / 1.130 mm',
      groundClearance: '172 mm',
      cargoCapacity: '627 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Engine Type',
            values: {
              '2.2 CRDi Dynamic': 'Smartstream D2.2 CRDi VGT',
              '2.2 CRDi Premiere 7-Seater': 'Smartstream D2.2 CRDi VGT',
              '1.6 Turbo Hybrid Premiere': 'Smartstream G1.6 Turbocharged Hybrid'
            }
          },
          {
            name: 'Transmission',
            values: {
              '2.2 CRDi Dynamic': '8-Speed Automatic',
              '2.2 CRDi Premiere 7-Seater': '8-Speed Automatic',
              '1.6 Turbo Hybrid Premiere': '6-Speed Automatic'
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
      lengthWidthHeight: '4.315 / 1.800 / 1.645 mm',
      wheelbase: '2.610 mm',
      tread: '1.572 / 1.584 mm',
      overhang: '865 / 840 mm',
      groundClearance: '190 mm',
      cargoCapacity: '433 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Engine',
            values: {
              '1.5L IVT': 'Smartstream 1.5L MPI',
              '1.4 Turbo Premiere': 'Kappa 1.4L Turbo GDI',
              '1.4 Turbo GT Line': 'Kappa 1.4L Turbo GDI'
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
      lengthWidthHeight: '4.695 / 1.890 / 1.550 mm',
      wheelbase: '2.900 mm',
      tread: '1.628 / 1.638 mm',
      overhang: '845 / 950 mm',
      groundClearance: '160 mm',
      cargoCapacity: '520 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Baterai & Motor Listrik',
        items: [
          {
            name: 'Battery Capacity',
            values: { 'GT-Line AWD': '77.4 kWh Lithium-ion' }
          },
          {
            name: 'Driving Range',
            values: { 'GT-Line AWD': '506 km (WLTP)' }
          }
        ]
      }
    ]
  }
};
