'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BengkelLayananUnggulanSection } from '@/components/BengkelLayananUnggulanSection';
import { BengkelJadwalServisSection } from '@/components/BengkelJadwalServisSection';

export default function BengkelPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col justify-between">
      {/* Section 1: Navbar */}
      <Navbar />

      {/* Section 1: Hero / Coming Soon */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-neutral-900">
        {/* Background Image: /images/layanan bengkel/hero.png */}
        <Image
          src="/images/layanan bengkel/hero bengkel.png"
          alt="Layanan Bengkel Resmi KIA"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Contrast Overlay with slight blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-lg">
            Layanan Bengkel Resmi KIA
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mt-4 font-medium drop-shadow">
            Jelajahi berbagai model Kia, mulai dari SUV, MPV, hingga kendaraan listrik dengan teknologi modern, fitur keselamatan terbaik, dan desain yang menginspirasi.
          </p>

          <div className="pt-6">
            <span className="bg-white text-gray-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl inline-block uppercase tracking-wider">
              Coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Layanan Unggulan Kami (3 Cards Grid) */}
      <BengkelLayananUnggulanSection />

      {/* Section 3: Jadwalkan Servis Anda (Form & Dealership Image) */}
      <BengkelJadwalServisSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
