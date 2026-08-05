'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';

const KontakTimProfesionalSection = dynamic(() => import('@/components/KontakTimProfesionalSection').then(mod => mod.KontakTimProfesionalSection));
const KontakInquireSection = dynamic(() => import('@/components/KontakInquireSection').then(mod => mod.KontakInquireSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

export default function KontakPage() {

  const whatsappUrl =
    'https://wa.me/6281234567890?text=Halo%20KIA%20Semarang,%20saya%20butuh%20informasi%20mengenai%20unit,%20harga,%20dan%20promo';
  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Jl.+Jend.+Sudirman+No.+294,+Gisikdrono,+Kec.+Semarang+Barat,+Kota+Semarang';

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-gray-900 font-sans flex flex-col justify-between">
      {/* Section 1: Navbar */}
      <Navbar />

      {/* Section 1: Hero Contact */}
      <section className="flex-1 max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 flex items-center w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Column: Content + CTAs + Small Info Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Header & Subtitle */}
            <div className="space-y-4 pt-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Butuh Informasi? Hubungi Kami
              </h1>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                Dapatkan informasi lengkap mengenai model Kia, harga, promo, pembiayaan, hingga layanan purna jual langsung dari tim dealer kami.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black hover:bg-neutral-800 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.99] text-center"
                >
                  Hubungi Sales
                </a>
                
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all active:scale-[0.99] text-center"
                >
                  Lihat Lokasi Dealer
                </a>
              </div>
            </div>

            {/* Bottom 2 Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center space-y-1 h-[150px]">
                <span className="text-xs text-gray-500 font-semibold">
                  24/7
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                  SIAP MELAYANI
                </span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center space-y-1 h-[150px]">
                <span className="text-xs text-gray-500 font-semibold">
                  Senin – Sabtu
                </span>
                <span className="text-xs sm:text-sm font-bold text-gray-900 tracking-wider uppercase">
                  JAM OPERASIONAL
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Showroom Exterior Image */}
          <div className="lg:col-span-6 relative w-full min-h-[380px] lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-black/5 bg-gray-200">
            <Image
              src="/images/landing page/hero 1.png"
              alt="KIA Semarang Showroom Exterior"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </section>

      {/* Section 2: Tim Profesional Kami */}
      <KontakTimProfesionalSection />

      {/* Section 3: Inquire with KIA & Showroom Map / Hours */}
      <KontakInquireSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
