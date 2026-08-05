'use client';

import React from 'react';

export const Ev9SpecSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-neutral-900 overflow-hidden flex flex-col justify-between py-12 px-6 md:px-12 text-white">
      {/* Background Image Showcase */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/landing%20page/section%203.png')`,
        }}
      />

      {/* Gradient & Dark Vignette for Crisp Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />

      {/* Top Title */}
      <div className="relative z-10 text-center pt-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg uppercase">
          Specification (KIA EV9)
        </h2>
      </div>

      {/* Middle Grid: Left & Right Specs Overlay */}
      <div className="relative z-10 max-w-[1728px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-10 mb-auto py-4 -translate-y-2 md:-translate-y-4">
        
        {/* Left Side Specs */}
        <div className="space-y-4 max-w-xs">
          <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white/90 uppercase border-b border-white/20 pb-1.5 inline-block">
            DIMENSION
          </h3>
          
          <div className="space-y-2.5 text-xs sm:text-sm font-semibold tracking-wider">
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/80 uppercase">LENGTH</span>
              <span className="text-white font-extrabold">113.2 IN</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/80 uppercase">WIDTH</span>
              <span className="text-white font-extrabold">184.8 IN</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/80 uppercase">HEIGHT</span>
              <span className="text-white font-extrabold">72.8 IN</span>
            </div>
          </div>
        </div>

        {/* Right Side Specs */}
        <div className="space-y-4 max-w-xs md:ml-auto">
          <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white/90 uppercase border-b border-white/20 pb-1.5 inline-block">
            DIMENSION
          </h3>
          
          <div className="space-y-2.5 text-xs sm:text-sm font-semibold tracking-wider">
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/80 uppercase">POWER</span>
              <span className="text-white font-extrabold">208 KW</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-white/80 uppercase">HORSEPOWER</span>
              <span className="text-white font-extrabold">283 HP</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Horizontal Quick Stats */}
      <div className="relative z-10 max-w-[1728px] mx-auto w-full pt-6 pb-2 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div>
            <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              BATTERY CAPACITY
            </span>
            <span className="block text-base sm:text-xl md:text-2xl font-black text-white mt-1 tracking-tight">
              51 KWH
            </span>
          </div>

          <div>
            <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              DUAL MOTOR
            </span>
            <span className="block text-base sm:text-xl md:text-2xl font-black text-white mt-1 tracking-tight">
              AWD
            </span>
          </div>

          <div>
            <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              TOP SPEED
            </span>
            <span className="block text-base sm:text-xl md:text-2xl font-black text-white mt-1 tracking-tight">
              225 KM/H
            </span>
          </div>

          <div>
            <span className="block text-[11px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
              WEIGHT
            </span>
            <span className="block text-base sm:text-xl md:text-2xl font-black text-white mt-1 tracking-tight">
              4,030 LBS
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
