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
    tagline: 'Compact SUV dengan Fitur Canggih & Dynamic Style',
    variants: ['Trendy', 'Motion', 'Signature'],
    dimensionDiagram: {
      lengthWidthHeight: '4.110 / 1.790 / 1.625 - 1.642 mm',
      wheelbase: '2.500 mm',
      tread: '1.559 / 1.571 mm',
      overhang: '795 / 825 mm',
      groundClearance: '205 mm',
      cargoCapacity: '385 L'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Engine Type',
            values: {
              'Trendy': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'Motion': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'Signature': 'Smartstream, Gamma II, DOHC, Dual CVVT'
            }
          },
          {
            name: 'Displacement (cc)',
            values: { 'Trendy': '1.497', 'Motion': '1.497', 'Signature': '1.497' }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: { 'Trendy': '115 / 6.300', 'Motion': '115 / 6.300', 'Signature': '115 / 6.300' }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: { 'Trendy': '144 / 4.500', 'Motion': '144 / 4.500', 'Signature': '144 / 4.500' }
          },
          {
            name: 'Emission',
            values: { 'Trendy': 'Euro 4', 'Motion': 'Euro 4', 'Signature': 'Euro 4' }
          },
          {
            name: 'Fuel Tank Capacity (L)',
            values: { 'Trendy': '45', 'Motion': '45', 'Signature': '45' }
          }
        ]
      },
      {
        id: 'transmission',
        title: 'Transmission',
        items: [
          {
            name: 'Type',
            values: { 'Trendy': 'Intelligent VT', 'Motion': 'Intelligent VT', 'Signature': 'Intelligent VT' }
          },
          {
            name: 'Gear Ratio Forward',
            values: { 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio Reverse',
            values: { 'Trendy': '2.822 - 1.822', 'Motion': '2.822 - 1.822', 'Signature': '2.822 - 1.822' }
          },
          {
            name: 'Gear Ratio Final',
            values: { 'Trendy': '6.483', 'Motion': '6.483', 'Signature': '6.483' }
          }
        ]
      },
      {
        id: 'steering',
        title: 'Steering',
        items: [
          {
            name: 'Type',
            values: { 'Trendy': 'Rack & Pinion Electric', 'Motion': 'Rack & Pinion Electric', 'Signature': 'Rack & Pinion Electric' }
          },
          {
            name: 'Adjustable',
            values: { 'Trendy': 'Tilt', 'Motion': 'Tilt', 'Signature': 'Tilt' }
          },
          {
            name: 'Power Steering',
            values: { 'Trendy': 'Motor Driven Power Steering (MDPS)', 'Motion': 'Motor Driven Power Steering (MDPS)', 'Signature': 'Motor Driven Power Steering (MDPS)' }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspension',
        items: [
          {
            name: 'Front Suspension',
            values: { 'Trendy': 'MacPherson Strut', 'Motion': 'MacPherson Strut', 'Signature': 'MacPherson Strut' }
          },
          {
            name: 'Rear Suspension',
            values: { 'Trendy': 'Coupled Torsion Beam Axle', 'Motion': 'Coupled Torsion Beam Axle', 'Signature': 'Coupled Torsion Beam Axle' }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Brakes',
        items: [
          {
            name: 'ABS, EBD, Brake Assist',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'ESC & HAC',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Front Brakes',
            values: { 'Trendy': 'Ventilated Disc', 'Motion': 'Ventilated Disc', 'Signature': 'Ventilated Disc' }
          },
          {
            name: 'Rear Brakes',
            values: { 'Trendy': 'Drum', 'Motion': 'Disc', 'Signature': 'Disc' }
          },
          {
            name: 'Parking Brake',
            values: { 'Trendy': 'Hand Brake', 'Motion': 'Hand Brake', 'Signature': 'Hand Brake' }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensions',
        items: [
          {
            name: 'Length (mm)',
            values: { 'Trendy': '4.110', 'Motion': '4.110', 'Signature': '4.110' }
          },
          {
            name: 'Width (mm)',
            values: { 'Trendy': '1.790', 'Motion': '1.790', 'Signature': '1.790' }
          },
          {
            name: 'Height (mm)',
            values: { 'Trendy': '1.625', 'Motion': '1.642', 'Signature': '1.642' }
          },
          {
            name: 'Wheelbase (mm)',
            values: { 'Trendy': '2.500', 'Motion': '2.500', 'Signature': '2.500' }
          },
          {
            name: 'Ground Clearance (mm)',
            values: { 'Trendy': '205', 'Motion': '205', 'Signature': '205' }
          },
          {
            name: 'Cargo Capacity (L)',
            values: { 'Trendy': '385', 'Motion': '385', 'Signature': '385' }
          }
        ]
      },
      {
        id: 'wheels',
        title: 'Wheels & Tires',
        items: [
          {
            name: 'Wheel Type',
            values: { 'Trendy': '16" Alloy Wheels', 'Motion': '16" Alloy Wheels', 'Signature': '16" Alloy Wheels' }
          },
          {
            name: 'Tire Size',
            values: { 'Trendy': '205 / 60 R16', 'Motion': '205 / 60 R16', 'Signature': '205 / 60 R16' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Exterior',
        items: [
          {
            name: 'Front Headlamp',
            values: { 'Trendy': 'Halogen', 'Motion': 'Multireflector LED', 'Signature': 'Multireflector LED' }
          },
          {
            name: 'Front Daytime Running Light (DRL)',
            values: { 'Trendy': 'Bulb', 'Motion': 'Star Map LED', 'Signature': 'Star Map LED' }
          },
          {
            name: 'Front Turn Signal',
            values: { 'Trendy': 'Bulb', 'Motion': 'LED', 'Signature': 'LED' }
          },
          {
            name: 'Front Foglamp',
            values: { 'Trendy': '-', 'Motion': 'LED', 'Signature': 'LED' }
          },
          {
            name: 'Rear Combination Lamp',
            values: { 'Trendy': 'Bulb', 'Motion': 'LED', 'Signature': 'LED' }
          },
          {
            name: 'Electric Folding Mirror',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Sunroof',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: '10.25" Full Digital Cluster',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: '4.2" TFT LCD Cluster',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Power Window',
            values: {
              'Trendy': 'Auto Up & Down Driver Side with Safety',
              'Motion': 'Auto Up & Down Driver Side with Safety',
              'Signature': 'Auto Up & Down Driver Side with Safety'
            }
          },
          {
            name: 'Seat Material',
            values: {
              'Trendy': 'Artificial Leather & Cloth',
              'Motion': 'Artificial Leather & Cloth',
              'Signature': 'Artificial Leather & Cloth'
            }
          },
          {
            name: 'Front Manual Adjustable Seat with Height Adjustment',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Automatic Climate Control',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Comfort & Convenience',
        items: [
          {
            name: 'Push Start Stop Button',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Remote Start Engine',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Wireless Charging',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: '8" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Audio Speaker',
            values: { 'Trendy': '6-speakers', 'Motion': '6-speakers', 'Signature': 'BOSE 7-speakers' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        items: [
          {
            name: 'Airbags',
            values: { 'Trendy': '2 Airbags', 'Motion': '6 Airbags', 'Signature': '6 Airbags' }
          },
          {
            name: 'Tire Pressure Monitoring System (TPMS)',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Parking Distance Warning (PDW)',
            values: { 'Trendy': 'Reverse', 'Motion': 'Reverse', 'Signature': 'Forward & Reverse' }
          },
          {
            name: 'Rear View Monitor',
            values: { 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'adas',
        title: 'ADAS',
        items: [
          {
            name: 'Forward Collision-avoidance Assist (FCA)',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Lane Following Assist (LFA)',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Lane Keeping Assist (LKA)',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Manual Speed Limit Assist (MSLA)',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Cruise Control',
            values: { 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          }
        ]
      }
    ]
  },
  'kia-ev9': {
    carId: 'kia-ev9',
    carName: 'KIA EV9',
    tagline: 'The Ultimate All-Electric 6/7-Seater Luxury SUV',
    variants: ['Earth', 'GT Line'],
    dimensionDiagram: {
      lengthWidthHeight: '5.010 - 5.015 / 1.980 / 1.755 - 1.780 mm',
      wheelbase: '3.100 mm',
      tread: '870-875 / 1.040 mm',
      overhang: '870-875 / 1.040 mm',
      groundClearance: '177 mm',
      cargoCapacity: '333 L (up to 2.318 L)'
    },
    categories: [
      {
        id: 'powertrain',
        title: 'Power Train',
        items: [
          {
            name: 'Motor Type',
            values: { 'Earth': 'Permanent Magnet Synchronous Motor (PMSM)', 'GT Line': 'Permanent Magnet Synchronous Motor (PMSM)' }
          },
          {
            name: 'Configuration',
            values: { 'Earth': 'Rear Wheel Drive (Rear Motor)', 'GT Line': 'All Wheel Drive (Front & Rear Motor)' }
          },
          {
            name: 'Maximum Power (PS)',
            values: { 'Earth': '217', 'GT Line': '385' }
          },
          {
            name: 'Maximum Torque (Nm)',
            values: { 'Earth': '350', 'GT Line': '700' }
          },
          {
            name: 'Battery Type',
            values: { 'Earth': 'Liquid Cooled Lithium-Ion', 'GT Line': 'Liquid Cooled Lithium-Ion' }
          },
          {
            name: 'Capacity (kWh)',
            values: { 'Earth': '76.1', 'GT Line': '99,8' }
          },
          {
            name: 'Battery Range (km)',
            values: { 'Earth': '412', 'GT Line': '497' }
          }
        ]
      },
      {
        id: 'charging',
        title: 'Waktu Mengisi Baterai',
        items: [
          {
            name: 'AC Charging Time (Wall Box) (11kW)',
            values: { 'Earth': 'Approx. 7 Hours', 'GT Line': 'Approx. 9 Hours' }
          },
          {
            name: 'DC Fast Charging Time (50kW)',
            values: { 'Earth': 'Approx. 63 Minutes (10 - 80%)', 'GT Line': 'Approx. 83 Minutes (10 - 80%)' }
          },
          {
            name: 'DC Fast Charging Time (350kW)',
            values: { 'Earth': 'Approx. 20 Minutes (10 - 80%)', 'GT Line': 'Approx. 24 Minutes (10 - 80%)' }
          }
        ]
      },
      {
        id: 'steering',
        title: 'Sistem Kemudi',
        items: [
          {
            name: 'Type',
            values: { 'Earth': 'Rack & Pinion', 'GT Line': 'Rack & Pinion' }
          },
          {
            name: 'Adjustable',
            values: { 'Earth': 'Tilt & Telescopic', 'GT Line': 'Tilt & Telescopic' }
          },
          {
            name: 'Power Steering',
            values: { 'Earth': 'R-MDPS', 'GT Line': 'R-MDPS' }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Rem',
        items: [
          {
            name: 'System',
            values: { 'Earth': 'ABS + ESC + HAC + DBC + MCB', 'GT Line': 'ABS + ESC + HAC + DBC + MCB' }
          },
          {
            name: 'Front',
            values: { 'Earth': 'Ventilated Disc', 'GT Line': 'Ventilated Disc' }
          },
          {
            name: 'Rear',
            values: { 'Earth': 'Disc', 'GT Line': 'Disc' }
          },
          {
            name: 'Parking Brake',
            values: { 'Earth': 'EPB (Electric Parking Brake) with Autohold', 'GT Line': 'EPB (Electric Parking Brake) with Autohold' }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspensi',
        items: [
          {
            name: 'Front',
            values: { 'Earth': 'MacPherson Strut with Double Ball Joint', 'GT Line': 'MacPherson Strut with Double Ball Joint' }
          },
          {
            name: 'Rear',
            values: { 'Earth': 'Multi-Link (5-Link)', 'GT Line': 'Multi-Link (5-Link)' }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensi (mm)',
        items: [
          {
            name: 'Length / Width / Height (mm)',
            values: { 'Earth': '5.010 / 1.980 / 1.755', 'GT Line': '5.015 / 1.980 / 1.780' }
          },
          {
            name: 'Wheelbase (mm)',
            values: { 'Earth': '3.100', 'GT Line': '3.100' }
          },
          {
            name: 'Front / Rear Tread (mm)',
            values: { 'Earth': '870 / 1.040', 'GT Line': '875 / 1.040' }
          },
          {
            name: 'Wheel & Tire',
            values: { 'Earth': 'Alloy Wheel 255 / 60 R19', 'GT Line': 'Alloy Wheel 285 / 45 R21' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Eksterior',
        items: [
          {
            name: 'Sun Roof',
            values: { 'Earth': '-', 'GT Line': 'Dual Panoramic Sunroof (Front Tilt & Sliding, Rear Sliding Only)' }
          },
          {
            name: 'Roof Rack',
            values: { 'Earth': 'Silver Roof Rack', 'GT Line': 'Black Bridge Type' }
          },
          {
            name: 'Outside Mirror',
            values: { 'Earth': 'Electric & Auto Folding Mirror', 'GT Line': 'Electric & Auto Folding Mirror' }
          },
          {
            name: 'Head Lamp',
            values: {
              'Earth': 'Auto, Thin Lens Projection LED Headlamp & DRL LED',
              'GT Line': 'Auto, Small Cube Projection LED Headlamp w/ Intelligent Front Lighting System (IFS) & DRL LED'
            }
          },
          {
            name: 'Rear Combination Lamp',
            values: { 'Earth': 'Star Map LED', 'GT Line': 'Star Map LED' }
          },
          {
            name: 'Rear Spoiler',
            values: {
              'Earth': 'Roof Integrated Rear Spoiler with LED High Mounted Rear Stop Light',
              'GT Line': 'Roof Integrated Rear Spoiler with LED High Mounted Rear Stop Light'
            }
          },
          {
            name: 'Tailgate',
            values: { 'Earth': 'Smart Power Tailgate with Height Adjustable', 'GT Line': 'Smart Power Tailgate with Height Adjustable' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: 'Steering Wheel',
            values: {
              'Earth': '4-spoke Premium Steering Wheel with Leather, Audio & ADAS Control',
              'GT Line': '4-spoke Premium Steering Wheel with Leather, Audio & ADAS Control'
            }
          },
          {
            name: 'Paddle Shift',
            values: { 'Earth': 'Smart Regenerative Braking with i-Pedal', 'GT Line': 'Smart Regenerative Braking with i-Pedal' }
          },
          {
            name: 'Power Window',
            values: {
              'Earth': 'All Auto Up / Down Windows with Safety Function (Front & Rear)',
              'GT Line': 'All Auto Up / Down Windows with Safety Function (Front & Rear)'
            }
          },
          {
            name: 'Meter Cluster',
            values: { 'Earth': '12.3" Digital Driver Cluster + 5" Climate Monitor', 'GT Line': '12.3" Digital Driver Cluster + 5" Climate Monitor' }
          },
          {
            name: 'Head Up Display',
            values: { 'Earth': '-', 'GT Line': '12"' }
          },
          {
            name: 'Vanity Mirror',
            values: { 'Earth': 'with Mirror & Illumination (Driver & Passenger)', 'GT Line': 'with Mirror & Illumination (Driver & Passenger)' }
          },
          {
            name: 'Rear Centre Mirror',
            values: { 'Earth': 'Electrochromic Mirror (ECM)', 'GT Line': 'Digital Centre Mirror (DCM)' }
          },
          {
            name: 'Front Seat (1st Row)',
            values: {
              'Earth': 'Electric Adjustment Seat with Memory, Ventilated & Heated',
              'GT Line': 'Leather, Electric Adjustment Seat with Memory and Lumbar Support, Relaxation Comfort Seat, Ventilated & Heated'
            }
          },
          {
            name: 'Rear Seat (2nd Row)',
            values: {
              'Earth': 'Leather, 6:4 Split Back Folding with Sliding, Center Arm Rest',
              'GT Line': 'Pilot Seat, Leather, Electric Adjustment with Relaxation Comfort Seat, Ventilated & Heated, Dynamic Body Care'
            }
          },
          {
            name: 'Rear Seat (3rd Row)',
            values: { 'Earth': 'Leather', 'GT Line': 'Leather, Electric Adjustment Seat' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Fitur Keamanan & ADAS',
        items: [
          {
            name: 'Body Structure',
            values: { 'Earth': 'Advanced High Strength Steel & Press Hot Stamping', 'GT Line': 'Advanced High Strength Steel & Press Hot Stamping' }
          },
          {
            name: 'Airbags',
            values: {
              'Earth': '10 Airbags (Driver & Front Passenger SRS Airbags, Centre Side Airbags 1st Row, Side SRS Airbags 1st & 2nd Row, Curtain SRS Airbags All Rows)',
              'GT Line': '10 Airbags (Driver & Front Passenger SRS Airbags, Centre Side Airbags 1st Row, Side SRS Airbags 1st & 2nd Row, Curtain SRS Airbags All Rows)'
            }
          },
          {
            name: 'Tire Pressure Monitoring System',
            values: { 'Earth': 'High Line TPMS', 'GT Line': 'High Line TPMS' }
          },
          {
            name: 'Safety Belt',
            values: {
              'Earth': '3 Point ELR High Adjustment (All Positions) with Pretensioner & Load Limiters (1st & 2nd Row)',
              'GT Line': '3 Point ELR High Adjustment (All Positions) with Pretensioner & Load Limiters (1st & 2nd Row)'
            }
          },
          {
            name: 'Parking Sensor',
            values: { 'Earth': 'Parking Distance Warning (Forward, Reverse)', 'GT Line': 'Parking Distance Warning (Forward, Side, Reverse)' }
          },
          {
            name: 'Camera Parking',
            values: { 'Earth': 'Rear View Monitor w/ Switch', 'GT Line': 'Surround View Monitor' }
          },
          {
            name: 'ADAS Features',
            values: {
              'Earth': 'SCC, LFA, LKA, BCA, BVM, SEW, SEA, DAW, HBA, RCCA, PCA, FCA (for Car, Pedestrian, Cyclist & Junction)',
              'GT Line': 'SCC, LFA, LKA, BCA, BVM, SEW, SEA, DAW, HBA, RCCA, PCA, FCA (for Car, Pedestrian, Cyclist & Junction)'
            }
          }
        ]
      },
      {
        id: 'audio',
        title: 'Audio & Speaker',
        items: [
          {
            name: 'Head Unit',
            values: {
              'Earth': '12.3" TFT Touchscreen Navigation, Bluetooth Multi Connection, Wired Apple Carplay & Android Auto',
              'GT Line': '12.3" TFT Touchscreen Navigation, Bluetooth Multi Connection, Wired Apple Carplay & Android Auto'
            }
          },
          {
            name: 'Speakers',
            values: { 'Earth': 'Standard Speaker', 'GT Line': 'Meridian 14 Premium Speaker with Active Sound Design' }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Fitur Kenyamanan',
        items: [
          {
            name: 'Air Conditioning',
            values: { 'Earth': 'Auto Climate Triple Zone', 'GT Line': 'Auto Climate Triple Zone' }
          },
          {
            name: 'Start Stop Button & Keyless Entry',
            values: { 'Earth': 'S', 'GT Line': 'S' }
          },
          {
            name: 'Drive Mode & Terrain Mode',
            values: { 'Earth': 'Eco, Normal, Sport & Mud, Sand, Snow', 'GT Line': 'Eco, Normal, Sport & Mud, Sand, Snow' }
          },
          {
            name: 'Cruise Control',
            values: { 'Earth': 'Smart Cruise Control with Auto Stop & Go', 'GT Line': 'Smart Cruise Control with Auto Stop & Go' }
          },
          {
            name: 'Wireless Charging',
            values: { 'Earth': 'with Cooler', 'GT Line': 'with Cooler' }
          },
          {
            name: 'USB Port',
            values: {
              'Earth': '1st Row (2x USB Type-C), 2nd Row (2x USB Type-C at Front Seat), 3rd Row (2x USB Type-C)',
              'GT Line': '1st Row (2x USB Type-C), 2nd Row (2x USB Type-C at Front Seat), 3rd Row (2x USB Type-C)'
            }
          },
          {
            name: 'Power Socket 12V',
            values: { 'Earth': 'Front (Center Console), Rear (Luggage)', 'GT Line': 'Front (Center Console), Rear (Luggage)' }
          },
          {
            name: 'V2L (Vehicle To Load)',
            values: { 'Earth': 'Max 3.6 kW', 'GT Line': 'Max 3.6 kW' }
          }
        ]
      }
    ]
  },
  'kia-carnival': {
    carId: 'kia-carnival',
    carName: 'KIA Carnival',
    tagline: 'Grand Utility Vehicle for Luxury Family Journeys',
    variants: ['Premiere 7-Seater', 'Premiere 11-Seater', 'Hybrid 7-Seater'],
    dimensionDiagram: {
      lengthWidthHeight: '5.155 / 1.995 / 1.775 - 1.785 mm',
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
              'Premiere 7-Seater': 'Smartstream Engine, D 2.2L, CRDI, DOHC, 16V',
              'Premiere 11-Seater': 'Smartstream Engine, D 2.2L, CRDI, DOHC, 16V',
              'Hybrid 7-Seater': 'Smartstream Gamma II, 1.6 T-GDi'
            }
          },
          {
            name: 'Displacement (cc)',
            values: { 'Premiere 7-Seater': '2,151', 'Premiere 11-Seater': '2,151', 'Hybrid 7-Seater': '1,598' }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: { 'Premiere 7-Seater': '194', 'Premiere 11-Seater': '194', 'Hybrid 7-Seater': '245' }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: { 'Premiere 7-Seater': '441', 'Premiere 11-Seater': '441', 'Hybrid 7-Seater': '367' }
          },
          {
            name: 'Transmission Type',
            values: { 'Premiere 7-Seater': '8-Speed AT', 'Premiere 11-Seater': '8-Speed AT', 'Hybrid 7-Seater': '6-speed AT' }
          }
        ]
      },
      {
        id: 'steering',
        title: 'Sistem Kemudi',
        items: [
          {
            name: 'Type',
            values: { 'Premiere 7-Seater': 'Rack & Pinion', 'Premiere 11-Seater': 'Rack & Pinion', 'Hybrid 7-Seater': 'Rack & Pinion' }
          },
          {
            name: 'Power Steering',
            values: { 'Premiere 7-Seater': 'MDPS', 'Premiere 11-Seater': 'MDPS', 'Hybrid 7-Seater': 'MDPS' }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Rem',
        items: [
          {
            name: 'System',
            values: { 'Premiere 7-Seater': 'ABS, EBD, BA', 'Premiere 11-Seater': 'ABS, EBD, BA', 'Hybrid 7-Seater': 'ABS, EBD, BA' }
          },
          {
            name: 'Type (Front / Rear / Parking)',
            values: {
              'Premiere 7-Seater': 'Ventilated Disc / Disc / Electronic Parking Brake',
              'Premiere 11-Seater': 'Ventilated Disc / Disc / Electronic Parking Brake',
              'Hybrid 7-Seater': 'Ventilated Disc / Disc / Electronic Parking Brake'
            }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensi',
        items: [
          {
            name: 'Length / Width / Height (mm)',
            values: {
              'Premiere 7-Seater': '5,155 / 1,995 / 1,775',
              'Premiere 11-Seater': '5,155 / 1,995 / 1,775',
              'Hybrid 7-Seater': '5,155 / 1,995 / 1,785'
            }
          },
          {
            name: 'Wheel Base (mm)',
            values: { 'Premiere 7-Seater': '3090', 'Premiere 11-Seater': '3090', 'Hybrid 7-Seater': '3090' }
          },
          {
            name: 'Wheel & Tire',
            values: {
              'Premiere 7-Seater': 'Alloy Wheel 235/ 60 R18',
              'Premiere 11-Seater': 'Alloy Wheel 235/ 60 R18',
              'Hybrid 7-Seater': 'Alloy Wheel 235/55 R19'
            }
          },
          {
            name: 'Fuel Tank Capacity (L)',
            values: { 'Premiere 7-Seater': '80', 'Premiere 11-Seater': '80', 'Hybrid 7-Seater': '72' }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspensi',
        items: [
          {
            name: 'Front',
            values: { 'Premiere 7-Seater': 'Mc Pherson Strut', 'Premiere 11-Seater': 'Mc Pherson Strut', 'Hybrid 7-Seater': 'Mc Pherson Strut' }
          },
          {
            name: 'Rear',
            values: { 'Premiere 7-Seater': 'Multi Link', 'Premiere 11-Seater': 'Multi Link', 'Hybrid 7-Seater': 'Multi Link' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Eksterior',
        items: [
          {
            name: 'Sun Roof',
            values: {
              'Premiere 7-Seater': 'Wide Dual Sunroof, power sliding & Tilting (F), Power sliding (R)',
              'Premiere 11-Seater': 'Wide Dual Sunroof, power sliding & Tilting (F), Power sliding (R)',
              'Hybrid 7-Seater': 'Wide Dual Sunroof, power sliding & Tilting (F), Power sliding (R)'
            }
          },
          {
            name: 'Radiator Grill',
            values: { 'Premiere 7-Seater': 'Chrome Coating', 'Premiere 11-Seater': 'Chrome Coating', 'Hybrid 7-Seater': 'Chrome Coating' }
          },
          {
            name: 'Rear Spoiler',
            values: {
              'Premiere 7-Seater': 'Integrated with HMSL (High Mounted Stop Lamp)',
              'Premiere 11-Seater': 'Integrated with HMSL (High Mounted Stop Lamp)',
              'Hybrid 7-Seater': 'Integrated with HMSL (High Mounted Stop Lamp)'
            }
          },
          {
            name: 'Outside Mirror',
            values: {
              'Premiere 7-Seater': 'Body Color w/ Electric Mirror, Heated and Power Folding',
              'Premiere 11-Seater': 'Body Color w/ Electric Mirror, Heated and Power Folding',
              'Hybrid 7-Seater': 'Body Color w/ Electric Mirror, Heated and Power Folding'
            }
          },
          {
            name: 'Head Lamp',
            values: {
              'Premiere 7-Seater': 'LED Projector, Auto Light and Leveling',
              'Premiere 11-Seater': 'LED Projector, Auto Light and Leveling',
              'Hybrid 7-Seater': 'LED Projector, Auto Light and Leveling'
            }
          },
          {
            name: 'Day Time Running Light',
            values: {
              'Premiere 7-Seater': 'LED and Positioning Lamp',
              'Premiere 11-Seater': 'LED and Positioning Lamp',
              'Hybrid 7-Seater': 'LED and Positioning Lamp'
            }
          },
          {
            name: 'Fog Lamp',
            values: { 'Premiere 7-Seater': 'LED Type', 'Premiere 11-Seater': 'LED Type', 'Hybrid 7-Seater': 'LED Type' }
          },
          {
            name: 'Front Wiper',
            values: {
              'Premiere 7-Seater': 'Auto Wiper w/ Rain Sensor',
              'Premiere 11-Seater': 'Auto Wiper w/ Rain Sensor',
              'Hybrid 7-Seater': 'Auto Wiper w/ Rain Sensor'
            }
          },
          {
            name: 'Rear Combination Lamp',
            values: { 'Premiere 7-Seater': 'LED', 'Premiere 11-Seater': 'LED', 'Hybrid 7-Seater': 'LED' }
          },
          {
            name: 'Rear Back Door',
            values: {
              'Premiere 7-Seater': 'Smart Power Tailgate with Auto Close',
              'Premiere 11-Seater': 'Smart Power Tailgate with Auto Close',
              'Hybrid 7-Seater': 'Smart Power Tailgate with Auto Close'
            }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: 'Steering Wheel',
            values: {
              'Premiere 7-Seater': 'Leather, 4 Spoke Sport with Tilt & Audio Control & Paddle Shift',
              'Premiere 11-Seater': 'Leather, 4 Spoke Sport with Tilt & Audio Control & Paddle Shift',
              'Hybrid 7-Seater': 'Leather, 4 Spoke Sport with Tilt & Audio Control & Paddle Shift'
            }
          },
          {
            name: 'Power Window',
            values: {
              'Premiere 7-Seater': 'All Window Auto up & Down with Safety',
              'Premiere 11-Seater': 'All Window Auto up & Down with Safety',
              'Hybrid 7-Seater': 'All Window Auto up & Down with Safety'
            }
          },
          {
            name: 'Front Console',
            values: { 'Premiere 7-Seater': 'with Two Cup Holder', 'Premiere 11-Seater': 'with Two Cup Holder', 'Hybrid 7-Seater': 'with Two Cup Holder' }
          },
          {
            name: 'Interior Lamp',
            values: { 'Premiere 7-Seater': 'LED', 'Premiere 11-Seater': 'LED', 'Hybrid 7-Seater': 'LED' }
          },
          {
            name: 'Meter Cluster',
            values: {
              'Premiere 7-Seater': '12.3" Curved Premium Cluster',
              'Premiere 11-Seater': '12.3" Curved Premium Cluster',
              'Hybrid 7-Seater': '12.3" Curved Premium Cluster'
            }
          },
          {
            name: 'Front Seat',
            values: {
              'Premiere 7-Seater': '4-way Power Seat with Memory (Driver), 4-way Power Seat (Passenger)',
              'Premiere 11-Seater': '4-way Power Seat with Memory (Driver), 4-way Power Seat (Passenger)',
              'Hybrid 7-Seater': '4-way Power Seat with Memory (Driver), 4-way Power Seat (Passenger)'
            }
          },
          {
            name: 'Rear Seat',
            values: {
              'Premiere 7-Seater': 'Premium Relaxation Seats w/ Electric Adjustable and Leg Support',
              'Premiere 11-Seater': 'Sliding and Reclining',
              'Hybrid 7-Seater': 'Premium Relaxation Seats w/ Electric Adjustable and Leg Support'
            }
          },
          {
            name: 'Heated Seat',
            values: { 'Premiere 7-Seater': '1st & 2nd Row', 'Premiere 11-Seater': '1st Row', 'Hybrid 7-Seater': '1st & 2nd Row' }
          },
          {
            name: 'Ventilated Seat',
            values: { 'Premiere 7-Seater': '1st & 2nd Row', 'Premiere 11-Seater': '1st Row', 'Hybrid 7-Seater': '1st & 2nd Row' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Fitur Keamanan',
        items: [
          {
            name: 'Body Structure',
            values: {
              'Premiere 7-Seater': 'Advanced High Strength Steel & Press Hot Stamping',
              'Premiere 11-Seater': 'Advanced High Strength Steel & Press Hot Stamping',
              'Hybrid 7-Seater': 'Advanced High Strength Steel & Press Hot Stamping'
            }
          },
          {
            name: 'Airbags',
            values: {
              'Premiere 7-Seater': '8 Airbags, Driver, Knee, Passenger, Center, Side and Curtain Airbags',
              'Premiere 11-Seater': '8 Airbags, Driver, Knee, Passenger, Center, Side and Curtain Airbags',
              'Hybrid 7-Seater': '8 Airbags, Driver, Knee, Passenger, Center, Side and Curtain Airbags'
            }
          },
          {
            name: '1st Row Safety Belt',
            values: { 'Premiere 7-Seater': '3 Point ELR', 'Premiere 11-Seater': '3 Point ELR', 'Hybrid 7-Seater': '3 Point ELR' }
          },
          {
            name: 'Rear Safety Belt',
            values: {
              'Premiere 7-Seater': '3 Point ELR (Side) 2 point (Center)',
              'Premiere 11-Seater': '3 Point ELR (Side) 2 point (Center)',
              'Hybrid 7-Seater': '3 Point ELR (Side) 2 point (Center)'
            }
          },
          {
            name: 'Parking Assist',
            values: {
              'Premiere 7-Seater': '8 Sensor and Dynamic Parking Guideline',
              'Premiere 11-Seater': '8 Sensor and Dynamic Parking Guideline',
              'Hybrid 7-Seater': '8 Sensor and Dynamic Parking Guideline'
            }
          },
          {
            name: 'Electronic Brake Control',
            values: {
              'Premiere 7-Seater': 'ABS, ESC, Hill Start Assist',
              'Premiere 11-Seater': 'ABS, ESC, Hill Start Assist',
              'Hybrid 7-Seater': 'ABS, ESC, Hill Start Assist'
            }
          },
          {
            name: 'ADAS System',
            values: {
              'Premiere 7-Seater': 'SCC, LFA, LKA, FCA & JX, BCA & BVM',
              'Premiere 11-Seater': 'SCC, LFA, LKA, FCA & JX, BCA & BVM',
              'Hybrid 7-Seater': 'SCC, LFA, LKA, FCA & JX, BCA & BVM'
            }
          },
          {
            name: 'Camera',
            values: {
              'Premiere 7-Seater': 'Surround View Monitor',
              'Premiere 11-Seater': 'Surround View Monitor',
              'Hybrid 7-Seater': 'Surround View Monitor'
            }
          }
        ]
      },
      {
        id: 'audio',
        title: 'Audio & Speaker',
        items: [
          {
            name: 'Head Unit',
            values: {
              'Premiere 7-Seater': '12.3" Infotainment with Wireless Connection (Apple CarPlay & Android Auto)',
              'Premiere 11-Seater': '12.3" Infotainment with Wireless Connection (Apple CarPlay & Android Auto)',
              'Hybrid 7-Seater': '12.3" Infotainment with Wireless Connection (Apple CarPlay & Android Auto)'
            }
          },
          {
            name: 'Speakers',
            values: {
              'Premiere 7-Seater': 'BOSE Premium Sound System 12-Speakers high performance',
              'Premiere 11-Seater': 'BOSE Premium Sound System 12-Speakers high performance',
              'Hybrid 7-Seater': 'BOSE Premium Sound System 12-Speakers high performance'
            }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Fitur Kenyamanan',
        items: [
          {
            name: 'Air Conditioning',
            values: {
              'Premiere 7-Seater': 'Auto Climate Control (3 zone)',
              'Premiere 11-Seater': 'Auto Climate Control (3 zone)',
              'Hybrid 7-Seater': 'Auto Climate Control (3 zone)'
            }
          },
          {
            name: 'Start Stop and Keyless Entry',
            values: { 'Premiere 7-Seater': '●', 'Premiere 11-Seater': '●', 'Hybrid 7-Seater': '●' }
          },
          {
            name: 'Remote Engine Start',
            values: { 'Premiere 7-Seater': '●', 'Premiere 11-Seater': '●', 'Hybrid 7-Seater': '●' }
          },
          {
            name: 'Drive Mode',
            values: { 'Premiere 7-Seater': '4 Driving Mode', 'Premiere 11-Seater': '4 Driving Mode', 'Hybrid 7-Seater': '4 Driving Mode' }
          },
          {
            name: 'Transmission',
            values: {
              'Premiere 7-Seater': 'e-Shift with Paddle Shift',
              'Premiere 11-Seater': 'e-Shift with Paddle Shift',
              'Hybrid 7-Seater': 'e-Shift with Paddle Shift'
            }
          },
          {
            name: 'Wireless Charging',
            values: { 'Premiere 7-Seater': '●', 'Premiere 11-Seater': '●', 'Hybrid 7-Seater': '●' }
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
