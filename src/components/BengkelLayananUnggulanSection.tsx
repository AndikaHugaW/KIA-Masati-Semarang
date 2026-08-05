'use client';

import React from 'react';
import { Wrench, Car, Settings, Check } from 'lucide-react';

export const BengkelLayananUnggulanSection: React.FC = () => {
  const services = [
    {
      id: 'periodic-maintenance',
      icon: Wrench,
      title: 'Periodic Maintenance',
      description:
        'Perawatan rutin berkala sesuai standar pabrik untuk menjaga garansi dan memastikan kendaraan Anda selalu dalam kondisi prima.',
      checklist: ['Ganti Oli & Filter', 'Pengecekan Rem', 'Tune-up Mesin'],
    },
    {
      id: 'body-paint',
      icon: Car,
      title: 'Body & Paint',
      description:
        'Fasilitas perbaikan bodi dan pengecatan berteknologi tinggi untuk mengembalikan estetika kendaraan Anda seperti baru.',
      checklist: ['Perbaikan Penyok', 'Cat Oven Presisi', 'Poles Bodi Premium'],
    },
    {
      id: 'suku-cadang-asli',
      icon: Settings,
      title: 'Suku Cadang Asli',
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
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Circular Icon */}
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-3 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 pt-2 text-xs font-semibold text-gray-700">
                  {item.checklist.map((checkText, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-gray-900 shrink-0" />
                      <span>{checkText}</span>
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
