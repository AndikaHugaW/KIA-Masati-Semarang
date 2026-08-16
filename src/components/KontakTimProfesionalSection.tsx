'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/contact';

export const KontakTimProfesionalSection: React.FC = () => {
  const branchManager = TEAM_MEMBERS.find((m) => m.id === 'branch-manager') || TEAM_MEMBERS[0];
  const seniorConsultant = TEAM_MEMBERS.find((m) => m.id === 'senior-consultant') || TEAM_MEMBERS[1];

  const handleContactPerson = (waUrl: string, name: string) => {
    const text = encodeURIComponent(`Halo ${name}, saya ingin berkonsultasi mengenai unit KIA`);
    window.open(`${waUrl}?text=${text}`, '_blank');
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
          
          {/* Card 1: Timoty Yoewana (Branch Manager) */}
          <div className="lg:col-span-7 bg-[#F5F6F8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
              <Image
                src={branchManager.image}
                alt={`${branchManager.name} - ${branchManager.role} KIA Semarang`}
                fill
                sizes="144px"
                className="object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-center sm:text-left space-y-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                  {branchManager.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C] mt-1">
                  {branchManager.role}
                </p>
              </div>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                {branchManager.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={`tel:${branchManager.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-black bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gray-700" />
                  <span>{branchManager.phoneFormatted}</span>
                </a>

                <button
                  onClick={() => handleContactPerson(branchManager.waUrl, `Bapak ${branchManager.name}`)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-black hover:bg-neutral-800 px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Hubungi Langsung</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Kevin Hersatya W (Senior Consultant) */}
          <div className="lg:col-span-5 bg-[#F5F6F8] rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-4">
            {/* Avatar */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
              <Image
                src={seniorConsultant.image}
                alt={`${seniorConsultant.name} - ${seniorConsultant.role} KIA Semarang`}
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                {seniorConsultant.name}
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">
                {seniorConsultant.role}
              </p>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xs">
              {seniorConsultant.description}
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2 w-full justify-center">
              <a
                href={`tel:${seniorConsultant.phone}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-black bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gray-700" />
                <span>{seniorConsultant.phoneFormatted}</span>
              </a>

              <button
                onClick={() => handleContactPerson(seniorConsultant.waUrl, `Mas ${seniorConsultant.name}`)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-black hover:bg-neutral-800 px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Langsung</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

