'use client';

import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export const KontakTimProfesionalSection: React.FC = () => {
  const handleContactManager = () => {
    window.open(
      'https://wa.me/6281325456655?text=Halo%20Bapak%20Ari%20Cahyo,%20saya%20ingin%20berkonsultasi%20mengenai%20unit%20KIA',
      '_blank'
    );
  };

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="max-w-[1728px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Tim Profesional Kami
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            Pakar otomotif berdedikasi tinggi yang siap memberikan konsultasi transparan dan solusi pembiayaan presisi untuk kebutuhan kendaraan Anda.
          </p>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Ari Cahyo (Branch Manager - Horizontal Split Layout) */}
          <div className="lg:col-span-7 bg-[#F5F6F8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
              <Image
                src="/images/team/budi.webp"
                alt="Ari Cahyo - Branch Manager KIA Semarang"
                fill
                sizes="144px"
                className="object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                  Ari Cahyo
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C] mt-1">
                  BRANCH MANAGER
                </p>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Memimpin tim dengan visi integritas dan pelayanan premium. Memastikan setiap interaksi di KIA Semarang memberikan pengalaman standar global.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleContactManager}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-black transition-opacity group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-gray-900" />
                  <span className="group-hover:underline">Hubungi Langsung</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Siska Wijaya (Senior Consultant - Centered Vertical Layout) */}
          <div className="lg:col-span-5 bg-[#F5F6F8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
            {/* Avatar */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
              <Image
                src="/images/team/siska.webp"
                alt="Siska Wijaya - Senior Consultant KIA Semarang"
                fill
                sizes="128px"
                className="object-cover object-top"
              />

            </div>

            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                Siska Wijaya
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
                SENIOR CONSULTANT
              </p>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
              Spesialis pembiayaan dan fleet management.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
