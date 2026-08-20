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
            name: 'Type',
            values: { 'M/T': 'M/T 6-Speed', 'Trendy': 'Intelligent VT', 'Motion': 'Intelligent VT', 'Signature': 'Intelligent VT' }
          },
          {
            name: '1ST',
            values: { 'M/T': '3.833', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: '2ND',
            values: { 'M/T': '2.143', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: '3RD',
            values: { 'M/T': '1.370', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: '4TH',
            values: { 'M/T': '1.036', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: '5TH',
            values: { 'M/T': '0.794', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: '6TH',
            values: { 'M/T': '0.667', 'Trendy': '2.680 - 0.385', 'Motion': '2.680 - 0.385', 'Signature': '2.680 - 0.385' }
          },
          {
            name: 'Reverse',
            values: { 'M/T': '3.700', 'Trendy': '2.822 - 1.822', 'Motion': '2.822 - 1.822', 'Signature': '2.822 - 1.822' }
          },
          {
            name: 'Final',
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
            values: {
              'M/T': 'Motor Driven Power Steering (MDPS)',
              'Trendy': 'Motor Driven Power Steering (MDPS)',
              'Motion': 'Motor Driven Power Steering (MDPS)',
              'Signature': 'Motor Driven Power Steering (MDPS)'
            }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspension',
        items: [
          {
            name: 'Front',
            values: { 'M/T': 'MacPherson Strut', 'Trendy': 'MacPherson Strut', 'Motion': 'MacPherson Strut', 'Signature': 'MacPherson Strut' }
          },
          {
            name: 'Rear',
            values: {
              'M/T': 'Coupled Torsion Beam Axle',
              'Trendy': 'Coupled Torsion Beam Axle',
              'Motion': 'Coupled Torsion Beam Axle',
              'Signature': 'Coupled Torsion Beam Axle'
            }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Brakes',
        items: [
          {
            name: 'System',
            values: {
              'M/T': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)',
              'Trendy': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)',
              'Motion': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)',
              'Signature': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)'
            }
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
            name: 'Front',
            values: { 'M/T': 'Ventilated Disc', 'Trendy': 'Ventilated Disc', 'Motion': 'Ventilated Disc', 'Signature': 'Ventilated Disc' }
          },
          {
            name: 'Rear',
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
            values: {
              'M/T': '4.550 / 1.800 / 1.708',
              'Trendy': '4.550 / 1.800 / 1.708',
              'Motion': '4.550 / 1.800 / 1.708',
              'Signature': '4.550 / 1.800 / 1.708'
            }
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
            name: 'Front / Rear Overhang (mm)',
            values: { 'M/T': '830 / 940', 'Trendy': '830 / 940', 'Motion': '830 / 940', 'Signature': '830 / 940' }
          },
          {
            name: 'Ground Clearance (mm)',
            values: { 'M/T': '108', 'Trendy': '205', 'Motion': '205', 'Signature': '205' }
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
            name: 'Type',
            values: {
              'M/T': '15" Alloy Wheels',
              'Trendy': '17" Diamond Cut Alloy Wheels',
              'Motion': '17" Diamond Cut Alloy Wheels',
              'Signature': '17" Diamond Cut Alloy Wheels'
            }
          },
          {
            name: 'Tire Size',
            values: { 'M/T': '195/65 R15', 'Trendy': '215/55 R17', 'Motion': '215/55 R17', 'Signature': '215/55 R17' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Exterior',
        items: [
          {
            name: 'Head Lamp',
            values: {
              'M/T': 'Projector Halogen Bulb',
              'Trendy': 'Multi Reflector LED',
              'Motion': 'Multi Reflector LED',
              'Signature': 'Multi Reflector LED'
            }
          },
          {
            name: 'Star Map LED DRL with Integrated Turn Signals',
            values: { 'M/T': 'Bulb', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear Star Map LED Connected',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear Upper Spoiler with High Mount Stop Lamp',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Electric Folding Mirror',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Sunroof',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: '26.6" Dual Panoramic Display with 12.3" Digital LCD Cluster',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Supervision with 4.2" TFT LCD Cluster',
            values: { 'M/T': '●', 'Trendy': '-', 'Motion': '-', 'Signature': '-' }
          },
          {
            name: 'Power Window',
            values: {
              'M/T': 'Auto Up & Down Driver Side with Safety',
              'Trendy': 'Auto Up & Down Driver Side with Safety',
              'Motion': 'Auto Up & Down Driver Side with Safety',
              'Signature': 'Auto Up & Down Driver Side with Safety'
            }
          },
          {
            name: 'Seat Material',
            values: {
              'M/T': 'Artificial Leather & Cloth',
              'Trendy': 'Artificial Leather & Cloth',
              'Motion': 'Artificial Leather & Cloth',
              'Signature': 'Artificial Leather & Cloth'
            }
          },
          {
            name: 'Front Manual Adjustable Seat with Height Adjustment',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '2nd Row Captain Seat with Sliding, Reclining, & Arm Rest',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '2nd Row 60:40 Split Double Folding & Reclining',
            values: { 'M/T': '●', 'Trendy': '-', 'Motion': '-', 'Signature': '-' }
          },
          {
            name: 'Front Console with Two Cup Holder',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Automatic Climate Control',
            values: { 'M/T': 'Manual', 'Trendy': 'Auto', 'Motion': 'Auto', 'Signature': 'Auto' }
          },
          {
            name: 'Rear Air Conditioner',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Comfort & Convenience',
        items: [
          {
            name: 'Push Start Stop Button',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Remote Start Engine',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Drive Mode Select',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Wireless Charging',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '1st, 2nd, 3rd Row USB Charging Ports',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '12V Power Outlet',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Seatback Table',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: '12.3" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '8" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'M/T': '●', 'Trendy': '-', 'Motion': '-', 'Signature': '-' }
          },
          {
            name: 'Audio Speaker',
            values: { 'M/T': '6-speakers', 'Trendy': 'BOSE 8-speakers', 'Motion': 'BOSE 8-speakers', 'Signature': 'BOSE 8-speakers' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        items: [
          {
            name: 'Airbags',
            values: { 'M/T': '2 Air Bags', 'Trendy': '6 Air Bags', 'Motion': '6 Air Bags', 'Signature': '6 Air Bags' }
          },
          {
            name: 'Tire Pressure Monitoring System (TPMS)',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Parking Distance Warning (PDW)',
            values: { 'M/T': 'Reverse', 'Trendy': 'Forward & Reverse', 'Motion': 'Forward & Reverse', 'Signature': 'Forward & Reverse' }
          },
          {
            name: 'Surround View Monitor',
            values: { 'M/T': '-', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear View Monitor',
            values: { 'M/T': '●', 'Trendy': '-', 'Motion': '-', 'Signature': '-' }
          }
        ]
      },
      {
        id: 'adas',
        title: 'ADAS',
        items: [
          {
            name: 'Smart Cruise Control (SCC) with Stop & Go',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Forward Collision-avoidance Assist (FCA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Lane Following Assist (LFA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Lane Keeping Assist (LKA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Blind-spot View Monitor (BVM)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Blind-spot Collision-avoidance Assist (BCA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'Manual Speed Limited Assist (MSLA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
          },
          {
            name: 'High Beam Assist (HBA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '-', 'Signature': '●' }
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
  'kia-seltos': {
    carId: 'kia-seltos',
    carName: 'KIA All-New Seltos',
    tagline: 'Bold & Intelligent Compact SUV',
    variants: ['Trendy', 'Prestige+ ADAS', 'GT Line'],
    dimensionDiagram: {
      lengthWidthHeight: '4.460 / 1.830 / 1.630 - 1.635 mm',
      wheelbase: '2.690 mm',
      tread: '1.590 - 1.592 / 1.600 - 1.602 mm',
      overhang: '895 / 875 mm',
      groundClearance: '200 mm',
      cargoCapacity: '447 L'
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
              'Prestige+ ADAS': 'Smartstream, Gamma II, DOHC, Dual CVVT',
              'GT Line': 'Smartstream, Gamma II, DOHC, Dual CVVT'
            }
          },
          {
            name: 'Displacement (cc)',
            values: { 'Trendy': '1.497', 'Prestige+ ADAS': '1.497', 'GT Line': '1.497' }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: { 'Trendy': '115 / 6.300', 'Prestige+ ADAS': '115 / 6.300', 'GT Line': '115 / 6.300' }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: { 'Trendy': '144 / 4.500', 'Prestige+ ADAS': '144 / 4.500', 'GT Line': '144 / 4.500' }
          },
          {
            name: 'Emission',
            values: { 'Trendy': 'Euro 4', 'Prestige+ ADAS': 'Euro 4', 'GT Line': 'Euro 4' }
          },
          {
            name: 'Fuel Tank Capacity (L)',
            values: { 'Trendy': '45', 'Prestige+ ADAS': '45', 'GT Line': '45' }
          }
        ]
      },
      {
        id: 'transmission',
        title: 'Transmission',
        items: [
          {
            name: 'Type',
            values: { 'Trendy': 'Intelligent VT', 'Prestige+ ADAS': 'Intelligent VT', 'GT Line': 'Intelligent VT' }
          },
          {
            name: 'Gear Ratio Forward',
            values: { 'Trendy': '2.680 - 0.385', 'Prestige+ ADAS': '2.680 - 0.385', 'GT Line': '2.680 - 0.385' }
          },
          {
            name: 'Gear Ratio Reverse',
            values: { 'Trendy': '2.822 - 1.822', 'Prestige+ ADAS': '2.822 - 1.822', 'GT Line': '2.822 - 1.822' }
          },
          {
            name: 'Gear Ratio Final',
            values: { 'Trendy': '6.483', 'Prestige+ ADAS': '6.483', 'GT Line': '6.483' }
          }
        ]
      },
      {
        id: 'steering',
        title: 'Steering',
        items: [
          {
            name: 'Type',
            values: { 'Trendy': 'Rack & Pinion Electric', 'Prestige+ ADAS': 'Rack & Pinion Electric', 'GT Line': 'Rack & Pinion Electric' }
          },
          {
            name: 'Adjustable',
            values: { 'Trendy': 'Tilt & Telescopic', 'Prestige+ ADAS': 'Tilt & Telescopic', 'GT Line': 'Tilt & Telescopic' }
          },
          {
            name: 'Power Steering',
            values: {
              'Trendy': 'Motor Driven Power Steering (MDPS)',
              'Prestige+ ADAS': 'Motor Driven Power Steering (MDPS)',
              'GT Line': 'Motor Driven Power Steering (MDPS)'
            }
          },
          {
            name: 'Turning Radius (m)',
            values: { 'Trendy': '5.34', 'Prestige+ ADAS': '5.34', 'GT Line': '5.34' }
          }
        ]
      },
      {
        id: 'suspension',
        title: 'Suspension',
        items: [
          {
            name: 'Front',
            values: { 'Trendy': 'MacPherson Strut', 'Prestige+ ADAS': 'MacPherson Strut', 'GT Line': 'MacPherson Strut' }
          },
          {
            name: 'Rear',
            values: {
              'Trendy': 'Coupled Torsion Beam Axle',
              'Prestige+ ADAS': 'Coupled Torsion Beam Axle',
              'GT Line': 'Coupled Torsion Beam Axle'
            }
          }
        ]
      },
      {
        id: 'brakes',
        title: 'Brakes',
        items: [
          {
            name: 'System',
            values: {
              'Trendy': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)',
              'Prestige+ ADAS': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)',
              'GT Line': 'Anti-lock Brake System (ABS), Electronic Brakeforce Distribution (EBD), Brake Assist (BA)'
            }
          },
          {
            name: 'Electronic Stability Control (ESC)',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Hill Start-assist Control (HAC)',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Front Brakes',
            values: { 'Trendy': 'Ventilated Disc', 'Prestige+ ADAS': 'Ventilated Disc', 'GT Line': 'Ventilated Disc' }
          },
          {
            name: 'Rear Brakes',
            values: { 'Trendy': 'Disc', 'Prestige+ ADAS': 'Disc', 'GT Line': 'Disc' }
          },
          {
            name: 'Parking Brake',
            values: {
              'Trendy': 'Electric Parking Brake (EPB) with Auto Hold',
              'Prestige+ ADAS': 'Electric Parking Brake (EPB) with Auto Hold',
              'GT Line': 'Electric Parking Brake (EPB) with Auto Hold'
            }
          }
        ]
      },
      {
        id: 'dimensions',
        title: 'Dimensions',
        items: [
          {
            name: 'Length (mm)',
            values: { 'Trendy': '4.460', 'Prestige+ ADAS': '4.460', 'GT Line': '4.460' }
          },
          {
            name: 'Width (mm)',
            values: { 'Trendy': '1.830', 'Prestige+ ADAS': '1.830', 'GT Line': '1.830' }
          },
          {
            name: 'Height (mm)',
            values: { 'Trendy': '1.630', 'Prestige+ ADAS': '1.630', 'GT Line': '1.635' }
          },
          {
            name: 'Wheelbase (mm)',
            values: { 'Trendy': '2.690', 'Prestige+ ADAS': '2.690', 'GT Line': '2.690' }
          },
          {
            name: 'Front / Rear Tread (mm)',
            values: { 'Trendy': '1.592 / 1.602', 'Prestige+ ADAS': '1.592 / 1.602', 'GT Line': '1.590 / 1.600' }
          },
          {
            name: 'Front / Rear Overhang (mm)',
            values: { 'Trendy': '895 / 875', 'Prestige+ ADAS': '895 / 875', 'GT Line': '895 / 875' }
          },
          {
            name: 'Ground Clearance (mm)',
            values: { 'Trendy': '200', 'Prestige+ ADAS': '200', 'GT Line': '200' }
          },
          {
            name: 'Cargo Capacity (L)',
            values: { 'Trendy': '447', 'Prestige+ ADAS': '447', 'GT Line': '447' }
          }
        ]
      },
      {
        id: 'wheels',
        title: 'Wheels & Tires',
        items: [
          {
            name: 'Type',
            values: { 'Trendy': '17" Alloy Wheels', 'Prestige+ ADAS': '17" Alloy Wheels', 'GT Line': '18" Alloy Wheels' }
          },
          {
            name: 'Tire Size',
            values: { 'Trendy': '215 / 60 R17', 'Prestige+ ADAS': '215 / 60 R17', 'GT Line': '215 / 55 R18' }
          }
        ]
      },
      {
        id: 'exterior',
        title: 'Exterior',
        items: [
          {
            name: 'Front Projector LED Lamp',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: 'Front Multireflector LED Lamp',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '-' }
          },
          {
            name: 'Front Star Map Signature LED DRL with Integrated Turn Signals',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Front LED Foglamp',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: 'Rear LED Combination Lamp',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Rear Upper Spoiler with High Mount Stop Lamp',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Rear Hidden Wiper',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Electric Folding Mirror',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Panoramic Sunroof',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          }
        ]
      },
      {
        id: 'interior',
        title: 'Interior',
        items: [
          {
            name: 'Integrated Display with 12.3" Digital LCD Cluster',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: 'Integrated Display with 4.2" TFT LCD Cluster',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '-' }
          },
          {
            name: 'Power Window',
            values: {
              'Trendy': 'Auto Up & Down Driver Side with Safety',
              'Prestige+ ADAS': 'Auto Up & Down Driver Side with Safety',
              'GT Line': 'Auto Up & Down Driver Side with Safety'
            }
          },
          {
            name: 'Seat Material',
            values: { 'Trendy': 'Cloth & Artificial Leather', 'Prestige+ ADAS': 'Artificial Leather', 'GT Line': 'Artificial Leather' }
          },
          {
            name: 'Power Driver Seat',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Front Manual Adjustable Seat with Height Adjustment',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '-', 'GT Line': '-' }
          },
          {
            name: 'Front Ventilated Seats',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: '2nd Row 60:40 Split Double Folding with Centre Armrest',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Front Console with Two Cup Holder',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Dual Zone Automatic Temperature Control',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Manual Climate Control',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '-', 'GT Line': '-' }
          }
        ]
      },
      {
        id: 'comfort',
        title: 'Comfort & Convenience',
        items: [
          {
            name: 'Push Start Stop Button',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Remote Engine Start',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Smartphone Wireless Charger',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: '1st & 2nd Row USB Charging Ports',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: '12V Power Outlet',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Rain Sensor',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: '12.3" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: '10.25" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '-', 'GT Line': '-' }
          },
          {
            name: 'Audio Speaker',
            values: { 'Trendy': '6-speakers', 'Prestige+ ADAS': '6-speakers', 'GT Line': 'BOSE 8-speakers' }
          }
        ]
      },
      {
        id: 'safety',
        title: 'Safety',
        items: [
          {
            name: 'Airbags',
            values: { 'Trendy': '6', 'Prestige+ ADAS': '6', 'GT Line': '6' }
          },
          {
            name: 'Tire Pressure Monitoring System (TPMS)',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Parking Distance Warning (PDW) Forward / Side / Reverse',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Parking Distance Warning (PDW) Forward / Reverse',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '-', 'GT Line': '-' }
          },
          {
            name: 'Surround View Monitor',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: 'Rear View Monitor',
            values: { 'Trendy': '●', 'Prestige+ ADAS': '●', 'GT Line': '-' }
          }
        ]
      },
      {
        id: 'adas',
        title: 'ADAS',
        items: [
          {
            name: 'Smart Cruise Control (SCC) with Stop & Go',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Forward Collision-avoidance Assist (FCA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Lane Following Assist (LFA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Lane Keeping Assist (LKA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Blind-spot View Monitor (BVM)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '-', 'GT Line': '●' }
          },
          {
            name: 'Blind-spot Collision-avoidance Assist (BCA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Manual Speed Limited Assist (MSLA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
          },
          {
            name: 'Rear Occupant Alert (ROA)',
            values: { 'Trendy': '-', 'Prestige+ ADAS': '●', 'GT Line': '●' }
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

CAR_SPECIFICATIONS['kia-carens'] = CAR_SPECIFICATIONS['kia-all-new-carens'];
CAR_SPECIFICATIONS['kia-carens-all-new'] = CAR_SPECIFICATIONS['kia-all-new-carens'];
CAR_SPECIFICATIONS['kia-ev6'] = CAR_SPECIFICATIONS['kia-all-new-carens'];

