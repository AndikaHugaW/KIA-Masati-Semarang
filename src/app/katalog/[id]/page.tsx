'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Car } from '@/data/cars';
import {
  Check,
  ArrowLeft,
  PhoneCall,
  ChevronRight,
  Settings,
  User,
  Fuel,
  Battery,
  Zap,
  Compass
} from 'lucide-react';

interface CarVariant {
  name: string;
  trim: string;
  price: string;
  image: string;
  badge?: string;
  engine: string;
  transmission: string;
  seats: number;
  fuelType: string;
  features: string[];
}

const CAR_VARIANTS_MAP: Record<string, CarVariant[]> = {
  'kia-sonet': [
    {
      name: 'Trendy',
      trim: '1.5L IVT Trendy',
      price: 'Rp 263.000.000',
      image: '/images/katalog unit/kia sonet/kia-sonet-trendy.webp',
      badge: 'READY STOCK',
      engine: 'Smartstream 1.5L',
      transmission: 'IVT Automatic',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        'Smartstream Gamma II 1.5L with IVT',
        '16" Alloy Wheel Dual Tone Color',
        'Supervision with 4.2" TFT LCD Cluster',
        '8" LCD Infotainment Screen with Android Auto & Apple CarPlay',
        'Rear Centre Arm Rest with Cup Holder',
        'Rear Parking Camera with Reverse Parking Distance Warning',
        'Remote Engine Start'
      ]
    },
    {
      name: 'Motion',
      trim: '1.5L IVT Motion',
      price: 'Rp 288.000.000',
      image: '/images/katalog unit/kia sonet/kia-sonet-motion.webp',
      badge: 'READY STOCK',
      engine: 'Smartstream 1.5L',
      transmission: 'IVT Automatic',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        'Smartstream Gamma II 1.5L with IVT',
        '16" Alloy Wheel Dual Tone Color',
        'Multireflector LED with Star Map LED DRL',
        'Supervision with 4.2" TFT LCD Cluster',
        '8" LCD Infotainment Screen with Android Auto & Apple CarPlay',
        'Rear Centre Arm Rest with Cup Holder',
        'Rear Parking Camera with Reverse Parking Distance Warning'
      ]
    },
    {
      name: 'Signature',
      trim: '1.5L IVT Signature',
      price: 'Rp 313.000.000',
      image: '/images/katalog unit/kia sonet/kia-sonet-signature.webp',
      badge: 'READY STOCK',
      engine: 'Smartstream 1.5L',
      transmission: 'IVT Automatic',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        'Smartstream Gamma II 1.5L with IVT',
        '16" Alloy Wheel Dual Tone Color',
        'Multireflector LED with Star Map LED DRL',
        'Sunroof Electric',
        '10.25" Full Digital Cluster',
        '8" LCD Infotainment Screen with Android Auto & Apple CarPlay',
        'BOSE Premium Sound System with 8-speakers'
      ]
    }
  ],
  'kia-ev9': [
    {
      name: 'GT-Line',
      trim: 'EV9 GT-Line 99.8 kWh',
      price: 'Rp 1.985.000.000',
      image: '/images/katalog unit/kia ev9/kia-ev9-gt-line.webp',
      badge: 'PROMO',
      engine: 'Dual Motor 99.8 kWh',
      transmission: 'Single Speed',
      seats: 6,
      fuelType: 'Listrik',
      features: [
        'Dual Motor AWD 99.8 kWh (385 PS / 700 Nm)',
        'Relaxation Swivel Seats with Massage',
        'Meridian 14-Speaker Sound System',
        'Remote Smart Parking Assist 2 (RSPA2)',
        'Vehicle-to-Load (V2L) Power Station'
      ]
    }
  ],
  'kia-carnival': [
    {
      name: 'Dynamic 11-Seater',
      trim: '2.2 CRDi Dynamic',
      price: 'Rp 1.150.000.000',
      image: '/images/katalog unit/kia carnival.webp',
      badge: 'FULL EV',
      engine: '2.2L Turbo Diesel',
      transmission: '8-Speed Automatic',
      seats: 11,
      fuelType: 'Diesel',
      features: [
        'Smartstream 2.2L Turbo Diesel Engine',
        'Smart Power Sliding Doors & Power Tailgate',
        '12.3" Infotainment Display with Apple CarPlay',
        'Safety Suite FCA, LKA, & BCA'
      ]
    },
    {
      name: 'Premiere 7-Seater',
      trim: '2.2 CRDi Premiere',
      price: 'Rp 1.280.000.000',
      image: '/images/katalog unit/kia carnival.webp',
      badge: 'FULL EV',
      engine: '2.2L Turbo Diesel',
      transmission: '8-Speed Automatic',
      seats: 7,
      fuelType: 'Diesel',
      features: [
        'Relaxation Captain Seats with Heating/Cooling',
        'Dual Sunroof & BOSE 12-Speaker Sound System',
        'Dual 12.3" Curved Display',
        '360 Camera & Blind Spot Monitor'
      ]
    },
    {
      name: 'GT-Line Luxury',
      trim: 'GT-Line 7-Seater AWD',
      price: 'Rp 1.300.000.000',
      image: '/images/katalog unit/kia carnival.webp',
      badge: 'FULL EV',
      engine: 'Dual Motor 77.4 kWh',
      transmission: 'Single Speed',
      seats: 7,
      fuelType: 'Listrik',
      features: [
        'Full Electric EV Dual Motor 320 HP',
        'GT-Line Sporty Bodykit & 20" Wheels',
        'Bose Surround Sound System 12-Speaker',
        'Dual Sunroof & Mood Ambient Lighting'
      ]
    }
  ],
  'kia-seltos': [
    {
      name: 'Seltos E 1.5',
      trim: '1.5L IVT E',
      price: 'Rp 395.000.000',
      image: '/images/katalog unit/all new seltos.webp',
      badge: 'READY STOCK',
      engine: '1.5L Gasoline MPI',
      transmission: 'IVT Automatic',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        'Smartstream 1.5L MPI Engine',
        '8" Touchscreen Display with CarPlay',
        'Rear Parking Sensor & Camera',
        '16" Alloy Wheels'
      ]
    },
    {
      name: 'Seltos EX 1.4 Turbo',
      trim: '1.4 Turbo EX',
      price: 'Rp 425.000.000',
      image: '/images/katalog unit/all new seltos.webp',
      badge: 'READY STOCK',
      engine: '1.4L Turbo GDI',
      transmission: '7-DCT Dual Clutch',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        '1.4L Turbo Engine 140 PS / 242 Nm',
        'Sunroof Electric with One-Touch',
        'Wireless Charger & Cruise Control',
        '17" Dual Tone Alloy Wheels'
      ]
    },
    {
      name: 'Seltos GT-Line 1.4 Turbo',
      trim: '1.4 Turbo GT-Line',
      price: 'Rp 446.000.000',
      image: '/images/katalog unit/all new seltos.webp',
      badge: 'READY STOCK',
      engine: '1.4L Turbo GDI',
      transmission: '7-DCT Dual Clutch',
      seats: 5,
      fuelType: 'Bensin',
      features: [
        'BOSE Premium 8-Speaker Audio System',
        'Head-Up Display & Red Stitched Interior',
        'Drive & Traction Mode Select',
        'Full LED Headlamps & DRL'
      ]
    }
  ],
  'kia-ev6': [
    {
      name: 'Carens 1.5 MPI',
      trim: '1.5 MPI Premiere 7-Seater',
      price: 'Rp 407.000.000',
      image: '/images/katalog unit/kia all new carens.webp',
      badge: 'FULL EV',
      engine: 'Smartstream 1.5L MPI',
      transmission: 'IVT Automatic',
      seats: 7,
      fuelType: 'Bensin',
      features: [
        'Smartstream 1.5L Engine',
        '10.25" HD Touchscreen Display',
        'Bose Premium 8-Speaker Sound System',
        'Ambient Light 64 Colors'
      ]
    },
    {
      name: 'Carens 1.4 Turbo',
      trim: '1.4 Turbo Premiere 6-Seater',
      price: 'Rp 467.000.000',
      image: '/images/katalog unit/kia all new carens.webp',
      badge: 'FULL EV',
      engine: '1.4L Turbo GDI',
      transmission: '7-DCT Dual Clutch',
      seats: 6,
      fuelType: 'Bensin',
      features: [
        '1.4L Turbo Gasoline Engine',
        'Ventilated Front Seats',
        'Wireless Phone Charger & Sunroof',
        'Drive Mode Select & TPMS'
      ]
    },
    {
      name: 'Carens GT-Line EV',
      trim: 'GT-Line AWD Electric',
      price: 'Rp 1.309.000.000',
      image: '/images/katalog unit/kia all new carens.webp',
      badge: 'FULL EV',
      engine: 'Dual Motor AWD 77.4 kWh',
      transmission: 'Single Speed',
      seats: 6,
      fuelType: 'Listrik',
      features: [
        'Dual Motor AWD 325 PS / 605 Nm',
        'Vehicle-to-Load (V2L) 3.6kW',
        'Augmented Reality Head-Up Display',
        'Dual 12.3" Curved Display'
      ]
    }
  ]
};


export default function CarDetailPage() {
  const params = useParams();
  const carId = params?.id as string;

  const [car, setCar] = useState<Car | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!carId) return;

    const fetchCarDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cars/${carId}`);
        const json = await res.json();

        if (json.status === 'success' && json.data) {
          setCar(json.data);
          setSelectedImage(json.data.image || json.data.gallery?.[0] || '');
        } else {
          setError(json.message || 'Mobil tidak ditemukan');
        }
      } catch (err) {
        console.error('Error fetching car detail:', err);
        setError('Gagal memuat data mobil');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetail();
  }, [carId]);

  const handleWhatsAppContact = () => {
    if (!car) return;
    const phone = '6281234567890';
    const text = encodeURIComponent(
      `Halo KIA Semarang, saya tertarik dengan unit ${car.name} (${car.trim}) - ${car.formattedPrice}. Bisa tanyakan informasi promo & simulasi kreditnya?`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const currentVariants = (carId && CAR_VARIANTS_MAP[carId]) || CAR_VARIANTS_MAP['kia-sonet'];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex-1 max-w-[1728px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/katalog" className="hover:text-black transition-colors">
            Mobil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-extrabold">{car ? car.name : 'Detail Mobil'}</span>
        </nav>

        {/* Loading State */}
        {loading && (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 font-bold">Memuat detail unit kendaraan...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-20 text-center space-y-4 bg-gray-50 border border-gray-200 rounded-3xl p-8 max-w-xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-black">Unit Tidak Ditemukan</h2>
            <p className="text-gray-500 text-sm">{error}</p>
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-black/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Katalog
            </Link>
          </div>
        )}

        {/* Section 1: Main Content Layout */}
        {!loading && car && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Image Showcase & Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Frame */}
              <div className="relative aspect-[16/11] bg-gray-50 border border-gray-200/90 rounded-3xl overflow-hidden group shadow-sm flex items-center justify-center">
                {/* Main Selected Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage || car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-all duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnails Row */}
              {car.gallery && car.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3.5">
                  {car.gallery.map((imgUrl, idx) => {
                    const isSelected = selectedImage === imgUrl;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(imgUrl)}
                        className={`relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden transition-all cursor-pointer ${
                          isSelected
                            ? 'border-2 border-black ring-2 ring-black/10 shadow-md shadow-black/10 scale-102'
                            : 'border border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={imgUrl}
                            alt={`${car.name} thumb ${idx + 1}`}
                            fill
                            sizes="(max-width: 768px) 33vw, 200px"
                            className="object-cover object-center"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column: Car Details, Specs & Features (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Top Content Group */}
              <div className="space-y-6">
                {/* Header Title & Subtitle */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                    {car.name}
                  </h1>
                  <p className="text-sm font-bold text-gray-500 mt-1">
                    {car.brand || 'KIA'} • {car.model} • {car.year || '2024'}
                  </p>

                  {/* Price Display */}
                  <div className="mt-4">
                    <span className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                      {car.formattedPrice || car.priceStarting}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-4 font-medium">
                    {car.description ||
                      `${car.name} ${car.year || '2024'} SUV premium dengan ruang kabin yang luas dan nyaman. Cocok untuk keluarga dengan fitur keselamatan dan teknologi terkini.`}
                  </p>
                </div>

                {/* Spesifikasi Section */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-black text-gray-900">Spesifikasi</h3>
                  
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm">
                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Tahun</span>
                      <span className="font-extrabold text-gray-900">{car.year || '2024'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Warna</span>
                      <span className="font-extrabold text-gray-900">{car.color || 'Hitam'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Transmisi</span>
                      <span className="font-extrabold text-gray-900">{car.transmissionDetail || car.transmissionType}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Bahan Bakar</span>
                      <span className="font-extrabold text-gray-900">{car.fuelType}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Kilometer</span>
                      <span className="font-extrabold text-gray-900">{car.kilometer || '0 km'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Status</span>
                      <span className="font-extrabold text-gray-900">{car.status || 'Tersedia'}</span>
                    </div>
                  </div>
                </div>

                {/* Fitur Section */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-black text-gray-900">Fitur</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm">
                    {car.features && car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-gray-800">
                        <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />
                        <span className="font-bold text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Pinned at Bottom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-auto">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-black hover:bg-gray-800 text-white font-extrabold py-4 px-6 rounded-2xl text-base transition-all shadow-lg shadow-black/10 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Hubungi Kami</span>
                </button>

                <Link
                  href="/katalog"
                  className="w-full bg-white border-2 border-gray-900 hover:bg-black hover:text-white text-gray-900 font-extrabold py-4 px-6 rounded-2xl text-base transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
                >
                  <span>Kembali ke Daftar</span>
                </Link>
              </div>

            </div>

          </div>
        )}

        {/* Section 2: Varian Unit / Varian Tersedia */}
        {!loading && car && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-gray-200">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
                Lupakan yang Biasa, Hidupkan yang Luar Biasa
              </h2>
              <p className="text-sm font-semibold text-gray-500">
                {currentVariants.length} Tingkat/Varian tersedia
              </p>
            </div>

            {/* Cards Grid using Katalog Unit card style */}
            <div className={`grid grid-cols-1 ${currentVariants.length === 1 ? 'max-w-md mx-auto' : currentVariants.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
              {currentVariants.map((v, index) => (
                <div
                  key={index}
                  onClick={handleWhatsAppContact}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer group"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[16/10] bg-[#F2F4F7] w-full overflow-hidden">
                    {v.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm tracking-wider uppercase">
                          {v.badge}
                        </span>
                      </div>
                    )}
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>


                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Title, Trim & Price */}
                    <div>
                      <h3 className="text-2xl font-black text-black tracking-tight leading-tight">
                        {v.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        {v.trim}
                      </p>

                      <div className="mt-3">
                        <span className="text-2xl font-black text-black">
                          {v.price}
                        </span>
                      </div>
                    </div>

                    {/* Specs 4-box grid */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-3 border-t border-gray-100 text-xs text-gray-600 font-medium">
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="truncate">{v.engine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="truncate">{v.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="truncate">{v.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="truncate">{v.fuelType}</span>
                      </div>
                    </div>

                    {/* Fitur Utama List */}
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      <p className="text-xs font-black text-gray-900 uppercase tracking-wider">
                        Fitur utama :
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                        {v.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-gray-400">•</span>
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-extrabold text-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Spesifikasi &gt;
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
