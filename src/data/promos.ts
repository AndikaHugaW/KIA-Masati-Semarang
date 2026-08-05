export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  discountValue: string;
  validUntil: string;
  description: string;
  highlights: string[];
}

export const PROMOS_DATA: Promo[] = [
  {
    id: 'promo-dp-ringan',
    title: 'Promo Spesial KIA Semarang',
    subtitle: 'DP Ringan Mulai 10% atau Angsuran Terjangkau',
    tag: 'LIMITED DEAL',
    discountValue: 'Free Wallbox Charger',
    validUntil: '31 Agustus 2026',
    description: 'Dapatkan penawaran khusus pembelian KIA EV6 & EV9 di Dealer Resmi KIA Semarang. Bonus Wallbox Home Charger senilai Rp 20 Juta & Free Instalasi Listrik.',
    highlights: [
      'Gratis Home Charger + Instalasi PLN',
      'Bunga 0% tenor hingga 2 tahun',
      'Free Service & Sparepart 5 Tahun',
      'Trade-in Bonus hingga Rp 15 Juta'
    ]
  },
  {
    id: 'promo-seltos-merdeka',
    title: 'Paket Kredit KIA Seltos Turbo',
    subtitle: 'Angsuran Ringan & Cashback Spesial',
    tag: 'POPULAR CHOICE',
    discountValue: 'Cashback s/d 25 Juta',
    validUntil: '31 Agustus 2026',
    description: 'Wujudkan impian memiliki SUV modern KIA Seltos dengan skema angsuran fleksibel dan approval instan 1 hari kerja.',
    highlights: [
      'DP Mulai 15%',
      'Proses Leasing Mudah & Cepat',
      'Gratis Kaca Film Solargard 3M',
      'Gratis Karpet Dasar & Karpet Original'
    ]
  },
  {
    id: 'promo-carnival-family',
    title: 'Special Luxury Family Package',
    subtitle: 'Grand Carnival Premier Special Financing',
    tag: 'FAMILY FAVOURITE',
    discountValue: 'Free Asuransi All Risk 1 Thn',
    validUntil: '15 September 2026',
    description: 'Nikmati perjalanan keluarga tingkat premium bersama KIA Grand Carnival. Dapatkan Asuransi All Risk gratis selama 1 tahun penuh.',
    highlights: [
      'Free Asuransi All Risk 1 Tahun',
      'Bunga Rendah Mulai 2.75%',
      'Garansi Mesin & Transmisi 5 Tahun',
      'Layanan Emergency Towing 24/7'
    ]
  }
];
