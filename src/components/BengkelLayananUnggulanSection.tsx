'use client';

import React from 'react';
import { Wrench, Car, Settings, Check, Clock } from 'lucide-react';

export const BengkelLayananUnggulanSection: React.FC = () => {
  const services = [
    {
      id: 'periodic-maintenance',
      icon: Wrench,
      title: 'Periodic Maintenance',
      isComingSoon: false,
      description:
        'Perawatan rutin berkala sesuai standar pabrik untuk menjaga garansi dan memastikan kendaraan Anda selalu dalam kondisi prima.',
      checklist: ['Ganti Oli & Filter', 'Pengecekan Rem', 'Tune-up Mesin'],
    },
    {
      id: 'body-paint',
      icon: Car,
      title: 'Body & Paint',
      isComingSoon: true,
      description:
        'Fasilitas perbaikan bodi dan pengecatan berteknologi tinggi yang akan segera hadir untuk mengembalikan estetika kendaraan Anda seperti baru.',
      checklist: ['Perbaikan Penyok', 'Cat Oven Presisi', 'Poles Bodi Premium'],
    },
    {
      id: 'suku-cadang-asli',
      icon: Settings,
      title: 'Suku Cadang Asli',
      isComingSoon: false,
      description:
        'Jaminan kualitas dengan suku cadang asli KIA yang dirancang khusus untuk kompatibilitas dan durabilitas maksimal.',
      checklist: ['Garansi Resmi', 'Ketersediaan Stok', 'Pemasangan Ahli'],
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gray-600 font-medium text-base sm:text-lg">
            Layanan Unggulan Kami
          </p>
          <div className="w-16 h-1 bg-black mx-auto rounded-full mt-3" />
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`relative bg-white rounded-2xl p-8 border ${
                  item.isComingSoon
                    ? 'border-amber-200/90 bg-linear-to-b from-white via-white to-amber-50/20'
                    : 'border-gray-100'
                } shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 overflow-hidden`}
              >
                {/* Coming Soon Badge Header */}
                {item.isComingSoon && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-black text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Coming Soon</span>
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Circular Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.isComingSoon ? 'bg-neutral-800 text-white' : 'bg-black text-white'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
                      <span>{item.title}</span>
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 pt-2 text-xs font-semibold text-gray-700 border-t border-gray-100">
                  {item.checklist.map((checkText, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 ${item.isComingSoon ? 'text-gray-400' : 'text-gray-900'}`} />
                      <span className={item.isComingSoon ? 'text-gray-500 font-medium' : 'text-gray-700'}>{checkText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
