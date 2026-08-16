'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/contact';

export const KontakTimProfesionalSection: React.FC = () => {
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

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#F5F6F8] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs flex flex-col items-center justify-between text-center space-y-6 transition-all hover:shadow-md"
            >
              {/* Top Group: Avatar & Info */}
              <div className="flex flex-col items-center space-y-4 w-full">
                {/* Avatar */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} KIA Semarang`}
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#B91C1C]">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {member.description}
                </p>
              </div>

              {/* Bottom Group: Contact Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full">
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-black bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-2xs transition-colors w-full sm:w-auto"
                >
                  <Phone className="w-3.5 h-3.5 text-gray-700" />
                  <span>{member.phoneFormatted}</span>
                </a>

                <button
                  onClick={() => handleContactPerson(member.waUrl, member.name)}
                  className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-black hover:bg-neutral-800 px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer active:scale-[0.98] w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Hubungi Langsung</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
