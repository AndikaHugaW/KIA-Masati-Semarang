'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarSpecData {
  id: string;
  name: string;
  badge: string;
  bgImage: string;
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
  performance: {
    power: string;
    torqueOrHp: string;
  };
  quickStats: {
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    stat4Label: string;
    stat4Value: string;
  };
}

const SPEC_CARS: CarSpecData[] = [
  {
    id: 'kia-ev9',
    name: 'KIA EV9',
    badge: 'ALL-ELECTRIC 6-SEATER',
    bgImage: '/images/landing%20page/section%203.png',
    dimensions: {
      length: '113.2 IN',
      width: '184.8 IN',
      height: '72.8 IN',
    },
    performance: {
      power: '208 KW',
      torqueOrHp: '283 HP',
    },
    quickStats: {
      stat1Label: 'BATTERY CAPACITY',
      stat1Value: '99.8 KWH',
      stat2Label: 'DUAL MOTOR',
      stat2Value: 'AWD',
      stat3Label: 'TOP SPEED',
      stat3Value: '225 KM/H',
      stat4Label: 'WEIGHT',
      stat4Value: '4,030 LBS',
    },
  },
  {
    id: 'kia-sonet',
    name: 'KIA SONET',
    badge: 'COMPACT SUV TURBO',
    bgImage: '/images/katalog%20unit/kia%20sonet.png',
    dimensions: {
      length: '162.2 IN',
      width: '70.5 IN',
      height: '64.6 IN',
    },
    performance: {
      power: '140 PS',
      torqueOrHp: '242 NM',
    },
    quickStats: {
      stat1Label: 'ENGINE',
      stat1Value: '1.4L TURBO',
      stat2Label: 'TRANSMISSION',
      stat2Value: '7-DCT',
      stat3Label: 'DRIVE TYPE',
      stat3Value: 'FWD',
      stat4Label: 'SEATING',
      stat4Value: '5 SEATER',
    },
  },
  {
    id: 'kia-carnival',
    name: 'KIA CARNIVAL',
    badge: 'GRAND UTILITY MPV',
    bgImage: '/images/katalog%20unit/kia%20carnival.webp',
    dimensions: {
      length: '203.0 IN',
      width: '78.5 IN',
      height: '68.9 IN',
    },
    performance: {
      power: '320 HP',
      torqueOrHp: '506 KM RANGE',
    },
    quickStats: {
      stat1Label: 'BATTERY CAPACITY',
      stat1Value: '77.4 KWH',
      stat2Label: 'DUAL MOTOR',
      stat2Value: 'AWD',
      stat3Label: 'TOP SPEED',
      stat3Value: '210 KM/H',
      stat4Label: 'SEATING',
      stat4Value: '7 SEATER',
    },
  },
  {
    id: 'kia-seltos',
    name: 'KIA SELTOS',
    badge: 'BOLD & INTELLIGENT SUV',
    bgImage: '/images/katalog%20unit/all%20new%20seltos.png',
    dimensions: {
      length: '170.0 IN',
      width: '70.9 IN',
      height: '63.6 IN',
    },
    performance: {
      power: '140 PS',
      torqueOrHp: '242 NM',
    },
    quickStats: {
      stat1Label: 'ENGINE',
      stat1Value: '1.4L TURBO',
      stat2Label: 'TRANSMISSION',
      stat2Value: '7-DCT',
      stat3Label: 'ACCELERATION',
      stat3Value: '8.9 SEC',
      stat4Label: 'SEATING',
      stat4Value: '5 SEATER',
    },
  },
  {
    id: 'kia-carens',
    name: 'KIA CARENS',
    badge: 'PURE ELECTRIC CROSSOVER',
    bgImage: '/images/katalog%20unit/kia%20all%20new%20carens.png',
    dimensions: {
      length: '181.5 IN',
      width: '70.8 IN',
      height: '66.9 IN',
    },
    performance: {
      power: '325 PS',
      torqueOrHp: '605 NM',
    },
    quickStats: {
      stat1Label: 'BATTERY CAPACITY',
      stat1Value: '77.4 KWH',
      stat2Label: 'DUAL MOTOR',
      stat2Value: 'AWD',
      stat3Label: 'TOP SPEED',
      stat3Value: '200 KM/H',
      stat4Label: 'SEATING',
      stat4Value: '6 SEATER',
    },
  },
];

export const Ev9SpecSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto transition every 3 seconds (3000ms) unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SPEC_CARS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeCar = SPEC_CARS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SPEC_CARS.length) % SPEC_CARS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SPEC_CARS.length);
  };

  return (
    <section 
      className="relative w-full min-h-[calc(100vh-80px)] bg-neutral-950 overflow-hidden flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-12 text-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Showcase with 1000ms Smooth Crossfade Transition */}
      {SPEC_CARS.map((car, idx) => (
        <div 
          key={car.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 scale-100 z-0' : 'opacity-0 scale-105 pointer-events-none -z-10'
          }`}
          style={{
            backgroundImage: `url('${car.bgImage}')`,
          }}
        />
      ))}

      {/* Gradient & Dark Vignette for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none z-0" />

      {/* Top Section: Title & Model Selector Tabs */}
      <div className="relative z-10 text-center pt-2 sm:pt-4 space-y-3">
        {/* Category Badge */}
        <div className="inline-block">
          <span className="bg-white/10 backdrop-blur-md text-white/90 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-white/20 tracking-widest uppercase">
            {activeCar.badge}
          </span>
        </div>

        {/* Dynamic Title */}
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg uppercase transition-all duration-500">
          Specification ({activeCar.name})
        </h2>

        {/* Model Tabs Selector */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-2 flex-wrap">
          {SPEC_CARS.map((car, idx) => (
            <button
              key={car.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${
                idx === activeIndex
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-white/70 hover:text-white border border-white/15'
              }`}
            >
              {car.name}
            </button>
          ))}
        </div>
      </div>

      {/* Side Navigation Arrow Buttons */}
      <button 
        onClick={handlePrev}
        aria-label="Previous Unit"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button 
        onClick={handleNext}
        aria-label="Next Unit"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Middle Grid: 4 Columns with Sub-sections Aligned with Battery Capacity & Weight */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-16 grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-8 mb-auto py-2 sm:py-4">
        
        {/* Col 1: Left Specs (DIMENSION - Pulled slightly inward) */}
        <div className="col-span-1 space-y-2 sm:space-y-4 max-w-[260px]">
          <h3 className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-widest text-white/90 uppercase border-b border-white/20 pb-1 inline-block">
            DIMENSION
          </h3>
          
          <div key={`dim-${activeCar.id}`} className="space-y-1.5 sm:space-y-2.5 text-[9px] sm:text-xs md:text-sm font-semibold tracking-wider transition-opacity duration-500">
            <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-6">
              <span className="text-white/80 uppercase">LENGTH</span>
              <span className="text-white font-extrabold">{activeCar.dimensions.length}</span>
            </div>
            <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-6">
              <span className="text-white/80 uppercase">WIDTH</span>
              <span className="text-white font-extrabold">{activeCar.dimensions.width}</span>
            </div>
            <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-6">
              <span className="text-white/80 uppercase">HEIGHT</span>
              <span className="text-white font-extrabold">{activeCar.dimensions.height}</span>
            </div>
          </div>
        </div>

        {/* Col 2 & Col 3: Empty Center Showcase Space */}
        <div className="col-span-2 pointer-events-none" />

        {/* Col 4: Right Specs (PERFORMANCE - Pulled slightly inward with ml-auto) */}
        <div className="col-span-1 space-y-2 sm:space-y-4 max-w-[260px] ml-auto">
          <h3 className="text-[10px] sm:text-xs md:text-sm font-extrabold tracking-widest text-white/90 uppercase border-b border-white/20 pb-1 inline-block">
            PERFORMANCE
          </h3>
          
          <div key={`perf-${activeCar.id}`} className="space-y-1.5 sm:space-y-2.5 text-[9px] sm:text-xs md:text-sm font-semibold tracking-wider transition-opacity duration-500">
            <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-6">
              <span className="text-white/80 uppercase">POWER</span>
              <span className="text-white font-extrabold">{activeCar.performance.power}</span>
            </div>
            <div className="flex items-center justify-between gap-1 sm:gap-4 md:gap-6">
              <span className="text-white/80 uppercase">OUTPUT</span>
              <span className="text-white font-extrabold">{activeCar.performance.torqueOrHp}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Horizontal Quick Stats (Aligned with 4 Columns) */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-4 sm:px-8 lg:px-16 pt-4 sm:pt-6 pb-2 border-t border-white/10">
        <div key={`stats-${activeCar.id}`} className="grid grid-cols-4 gap-2 sm:gap-6 text-center transition-opacity duration-500">
          
          <div>
            <span className="block text-[9px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              {activeCar.quickStats.stat1Label}
            </span>
            <span className="block text-xs sm:text-xl md:text-2xl font-black text-white mt-0.5 sm:mt-1 tracking-tight">
              {activeCar.quickStats.stat1Value}
            </span>
          </div>

          <div>
            <span className="block text-[9px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              {activeCar.quickStats.stat2Label}
            </span>
            <span className="block text-xs sm:text-xl md:text-2xl font-black text-white mt-0.5 sm:mt-1 tracking-tight">
              {activeCar.quickStats.stat2Value}
            </span>
          </div>

          <div>
            <span className="block text-[9px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              {activeCar.quickStats.stat3Label}
            </span>
            <span className="block text-xs sm:text-xl md:text-2xl font-black text-white mt-0.5 sm:mt-1 tracking-tight">
              {activeCar.quickStats.stat3Value}
            </span>
          </div>

          <div>
            <span className="block text-[9px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              {activeCar.quickStats.stat4Label}
            </span>
            <span className="block text-xs sm:text-xl md:text-2xl font-black text-white mt-0.5 sm:mt-1 tracking-tight">
              {activeCar.quickStats.stat4Value}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
