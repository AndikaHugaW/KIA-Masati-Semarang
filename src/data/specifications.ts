export interface SpecItem {
  name: string;
  subName?: string;
  values: Record<string, string>; // e.g. { "M/T": "...", "Trendy": "...", "Motion": "...", "Signature": "..." }
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
  variants: string[]; // List of variant names
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
            values: {
              'M/T': '1.497',
              'Trendy': '1.497',
              'Motion': '1.497',
              'Signature': '1.497'
            }
          },
          {
            name: 'Maximum Power (PS/rpm)',
            values: {
              'M/T': '115 / 6.300',
              'Trendy': '115 / 6.300',
              'Motion': '115 / 6.300',
              'Signature': '115 / 6.300'
            }
          },
          {
            name: 'Maximum Torque (Nm/rpm)',
            values: {
              'M/T': '144 / 4.500',
              'Trendy': '144 / 4.500',
              'Motion': '144 / 4.500',
              'Signature': '144 / 4.500'
            }
          },
          {
            name: 'Emission',
            values: {
              'M/T': 'Euro 4',
              'Trendy': 'Euro 4',
              'Motion': 'Euro 4',
              'Signature': 'Euro 4'
            }
          },
          {
            name: 'Fuel Tank Capacity (L)',
            values: {
              'M/T': '45',
              'Trendy': '45',
              'Motion': '45',
              'Signature': '45'
            }
          }
        ]
      },
      {
        id: 'transmission',
        title: 'Transmission',
        items: [
          {
            name: 'Transmission Type',
            values: {
              'M/T': 'M/T 6-Speed',
              'Trendy': 'Intelligent VT',
              'Motion': 'Intelligent VT',
              'Signature': 'Intelligent VT'
            }
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
            values: { 'M/T': 'Motor Driven Power Steering (MDPS)', 'Trendy': 'Motor Driven Power Steering (MDPS)', 'Motion': 'Motor Driven Power Steering (MDPS)', 'Signature': 'Motor Driven Power Steering (MDPS)' }
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
            name: 'Front / Rear Overhang (mm)',
            values: { 'M/T': '830 / 940', 'Trendy': '830 / 940', 'Motion': '830 / 940', 'Signature': '830 / 940' }
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
            values: { 'M/T': '15" Alloy Wheels', 'Trendy': '15" Alloy Wheels', 'Motion': '17" Diamond Cut Alloy Wheels', 'Signature': '17" Diamond Cut Alloy Wheels' }
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
            name: 'Star Map LED DRL with Integrated Turn Signals',
            values: { 'M/T': 'Bulb', 'Trendy': 'Bulb', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear Star Map LED Connected',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear Upper Spoiler with High Mount Stop Lamp',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Electric Folding Mirror',
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
            name: '26.6" Dual Panoramic Display with 12.3" Digital LCD Cluster',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Supervision with 4.2" TFT LCD Cluster',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '-', 'Signature': '-' }
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
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '2nd Row 60:40 Split Double Folding & Reclining',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '-', 'Signature': '-' }
          },
          {
            name: 'Front Console with Two Cup Holder',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Automatic Climate Control',
            values: { 'M/T': 'Manual', 'Trendy': 'Manual', 'Motion': 'Auto', 'Signature': 'Auto' }
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
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          }
        ]
      },
      {
        id: 'infotainment',
        title: 'Infotainment',
        items: [
          {
            name: '12.3" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: '8" Infotainment Display with Android Auto & Apple CarPlay',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '-', 'Signature': '-' }
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
            name: 'Tire Pressure Monitoring System (TPMS)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Parking Distance Warning (PDW)',
            values: { 'M/T': 'Reverse', 'Trendy': 'Reverse', 'Motion': 'Forward & Reverse', 'Signature': 'Forward & Reverse' }
          },
          {
            name: 'Surround View Monitor',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Rear View Monitor',
            values: { 'M/T': '●', 'Trendy': '●', 'Motion': '-', 'Signature': '-' }
          }
        ]
      },
      {
        id: 'adas',
        title: 'ADAS (Advanced Driver Assistance Systems)',
        items: [
          {
            name: 'Smart Cruise Control (SCC) with Stop & Go',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Forward Collision-avoidance Assist (FCA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Lane Following Assist (LFA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Lane Keeping Assist (LKA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Blind-spot View Monitor (BVM)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Blind-spot Collision-avoidance Assist (BCA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'Manual Speed Limit Assist (MSLA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          },
          {
            name: 'High Beam Assist (HBA)',
            values: { 'M/T': '-', 'Trendy': '-', 'Motion': '●', 'Signature': '●' }
          }
        ]
      }
    ]
  }
};
