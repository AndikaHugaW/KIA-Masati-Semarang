'use client';

import React from 'react';
import Image from 'next/image';

export const BengkelComingSoonSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden flex items-center justify-center text-center bg-neutral-900">
      {/* Full Width & Height Background Image */}
      <Image
        src="/images/layanan bengkel/hero bengkel.png"
        alt="Layanan Bengkel Resmi KIA"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content Box */}
      <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
          Layanan Bengkel Resmi KIA
        </h2>

        <p className="text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
          Jelajahi berbagai model Kia, mulai dari SUV, MPV, hingga kendaraan listrik dengan teknologi modern, fitur keselamatan terbaik, dan desain yang menginspirasi.
        </p>

        <div className="pt-2">
          <span className="bg-white text-gray-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl uppercase tracking-wider inline-block hover:scale-105 transition-transform cursor-pointer">
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
};
