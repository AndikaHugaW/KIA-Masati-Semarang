'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

const heroImages = [
  '/images/landing page/hero 1.webp',
  '/images/katalog unit/hero2.webp',
  '/images/katalog unit/hero3.webp',
  '/images/katalog unit/kia all new carens.webp',
  '/images/katalog unit/kia ev9.webp',
];


export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTestDrive }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image Showcase with Crossfade Transition */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out scale-105 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt="KIA Dealer Showcase"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      
      {/* Overlay to match lighting & text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left Column: Main Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/40 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-white" />
                AUTHORIZED KIA DEALER
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Temukan Mobil KIA <br />
              Impian Anda
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              Dealer resmi KIA di Semarang dengan pilihan SUV, MPV, dan EV terbaru. Nikmati promo terbaik, test drive gratis, serta layanan purna jual terpercaya.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenTestDrive?.()}
                className="bg-black hover:bg-neutral-900 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-lg shadow-lg transition-all active:scale-95"
              >
                Lihat Semua Mobil
              </button>

              <button
                onClick={() => onOpenTestDrive?.()}
                className="bg-white/30 hover:bg-white/40 border border-white/50 text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-lg backdrop-blur-md transition-all active:scale-95 shadow-lg"
              >
                Booking Test Drive
              </button>
            </div>

            {/* 4 Feature Checkpoints */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-8 pt-4 text-xs sm:text-sm font-medium text-white/90 max-w-md">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Dealer Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Garansi Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Service Center</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Kredit Mudah</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Price & Promo Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end pb-4 lg:pb-8">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full max-w-xs sm:max-w-sm text-white shadow-2xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                  Promo Agustus
                </span>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Ready Stock
                </span>
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">Mulai Dari</p>
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  Rp 399 jt
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

