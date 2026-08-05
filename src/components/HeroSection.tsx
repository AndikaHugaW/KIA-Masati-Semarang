'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

const heroCars = [
  {
    id: 'ev9',
    title: 'KIA EV9 GT-Line',
    tagline: 'Electric SUV Premium',
    promoPrice: 'Rp 1,98 M',
    image: '/images/katalog unit/kia ev9.webp',
  },
  {
    id: 'seltos',
    title: 'KIA All New Seltos',
    tagline: 'Compact SUV Dynamic',
    promoPrice: 'Rp 399 Juta',
    image: '/images/katalog unit/all new seltos.webp',
  },
  {
    id: 'carnival',
    title: 'KIA New Carnival',
    tagline: 'Luxury Grand MPV',
    promoPrice: 'Rp 960 Juta',
    image: '/images/katalog unit/kia carnival.webp',
  },
  {
    id: 'sonet',
    title: 'KIA Sonet',
    tagline: 'Smart Urban SUV',
    promoPrice: 'Rp 240 Juta',
    image: '/images/katalog unit/kia sonet.webp',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTestDrive }) => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % heroCars.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[92dvh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-neutral-950 text-white p-6 sm:p-10 lg:p-14 rounded-none my-0 z-20">
      {/* 1. Fullscreen Unrounded Edge-to-Edge Car Background Stage */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-none">
        {heroCars.map((car, idx) => (
          <div
            key={car.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentCarIndex
                ? 'opacity-100 z-10'
                : 'opacity-0 pointer-events-none z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={car.image}
                alt={car.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center w-full h-full scale-105 transition-transform duration-1000 rounded-none"
              />
            </div>
          </div>
        ))}

        {/* Ambient Dark Gradient Overlays matching high-end showroom look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      </div>

      {/* 2. Floating Glass Menu Card (Desktop & Tablet Only - Hidden on Mobile) */}
      <div className="relative z-20 hidden sm:flex justify-end w-full my-auto py-4">
        <div className="w-full max-w-[260px] sm:max-w-[290px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 sm:p-6 shadow-2xl text-white space-y-2">
          <Link 
            href="/katalog"
            className="flex items-center justify-between text-lg sm:text-xl font-bold text-white border-b border-white/15 pb-3 group"
          >
            <span>Katalog Unit</span>
            <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link 
            href="/bengkel"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white border-b border-white/15 py-2.5 transition-colors"
          >
            Layanan Bengkel
          </Link>

          <Link 
            href="/#promo"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white border-b border-white/15 py-2.5 transition-colors"
          >
            Promo Bulan Ini
          </Link>

          <div className="block text-sm sm:text-base font-normal text-white/80 border-b border-white/15 py-2.5">
            Authorized Dealer
          </div>

          <Link 
            href="/kontak"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white pt-2 transition-colors"
          >
            Kontak & Lokasi
          </Link>
        </div>
      </div>

      {/* 3. Bottom Row: Original Website Layout on Desktop (Side-by-Side Buttons) & Stacked Buttons on Mobile */}
      <div className="relative z-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full pt-4 pb-2">
        
        {/* Headline with 20px gap */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight flex flex-col gap-[20px] max-w-2xl">
          <span>Temukan Mobil</span>
          <span>KIA Impian Anda</span>
        </h1>

        {/* Action Buttons: Stacked vertically on Mobile, Side-by-Side horizontally on Desktop */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto shrink-0">
          
          {/* Button 1: Glass Pill with Enlarged Circle Arrow Icon */}
          <Link
            href="/katalog"
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white font-semibold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between gap-4 shadow-lg transition-all group active:scale-[0.98]"
          >
            <span className="font-semibold tracking-tight whitespace-nowrap">Lihat Semua Mobil</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
            </span>
          </Link>

          {/* Button 2: Solid White Pill with Enlarged Circle Arrow Icon */}
          <button
            onClick={() => onOpenTestDrive?.()}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-950 font-bold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between gap-4 shadow-2xl transition-all group active:scale-[0.98] text-left"
          >
            <span className="font-bold tracking-tight whitespace-nowrap">Booking Test Drive</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </span>
          </button>
        </div>

      </div>

    </section>
  );
};
