'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
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
    <section className="relative w-full min-h-[92dvh] sm:min-h-screen flex flex-col justify-end overflow-hidden bg-neutral-950 text-white p-5 sm:p-8 lg:p-12 rounded-none my-0 z-20">
      {/* 1. Fullscreen Edge-to-Edge Car Background Stage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
                className="object-cover object-center w-full h-full scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        ))}

        {/* Ambient Dark Gradient Overlays matching high-end showroom look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/50 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
      </div>

      {/* 2. Bottom Hero Headline & Large Circle Arrow Action Buttons */}
      <div className="relative z-20 w-full max-w-2xl space-y-6 pb-4 sm:pb-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
          Temukan Mobil <br />
          KIA Impian Anda
        </h1>

        <div className="space-y-4 pt-2 max-w-md">
          {/* Button 1: Glass Pill with Enlarged Circle Arrow Icon */}
          <Link
            href="/katalog"
            className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white font-semibold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between shadow-lg transition-all group active:scale-[0.98]"
          >
            <span className="font-semibold tracking-tight">Lihat Semua Mobil</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
            </span>
          </Link>

          {/* Button 2: Solid White Pill with Enlarged Circle Arrow Icon */}
          <button
            onClick={() => onOpenTestDrive?.()}
            className="w-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between shadow-2xl transition-all group active:scale-[0.98] text-left"
          >
            <span className="font-bold tracking-tight">Booking Test Drive</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </span>
          </button>
        </div>
      </div>

    </section>
  );
};
