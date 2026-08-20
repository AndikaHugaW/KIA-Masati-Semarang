'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gauge, Users, Zap, Fuel } from 'lucide-react';

interface FeaturedUnitsSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const FeaturedUnitsSection: React.FC<FeaturedUnitsSectionProps> = ({ onOpenTestDrive }) => {
  const featuredUnits = [
    {
      id: 'kia-sonet',
      name: 'KIA Sonet',
      categoryBadge: 'SUV',
      price: 'Mulai Rp 272.000.000',
      image: '/images/katalog unit/kia sonet.webp',
      specs: [
        { icon: Fuel, label: '1.5L Engine' },
        { icon: Gauge, label: '115 PS' },
        { icon: Users, label: '5-Seater' },
      ],
    },
    {
      id: 'kia-seltos',
      name: 'KIA Seltos',
      categoryBadge: 'SUV',
      price: 'Mulai Rp 373.000.000',
      image: '/images/katalog unit/all new seltos.webp',
      specs: [
        { icon: Fuel, label: '1.4L Turbo / 1.5L' },
        { icon: Gauge, label: '140 PS' },
        { icon: Users, label: '5-Seater' },
      ],
    },
    {
      id: 'kia-all-new-carens',
      name: 'KIA All New Carens',
      categoryBadge: 'MPV',
      price: 'Mulai Rp 407.000.000',
      image: '/images/katalog unit/kia all new carens.webp',
      specs: [
        { icon: Fuel, label: '1.4L Turbo / 1.5L' },
        { icon: Gauge, label: '140 PS' },
        { icon: Users, label: '6-7 Seater' },
      ],
    },
  ];


  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Unit Unggulan
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Eksplorasi kendaraan KIA paling diminati. Inovasi desain dan performa tanpa kompromi untuk setiap perjalanan Anda.
            </p>
          </div>

          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-bold text-sm sm:text-base transition-colors group shrink-0"
          >
            <span>Lihat Semua Unit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredUnits.map((unit) => {
            return (
              <div
                key={unit.id}
                className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:scale-[1.015] hover:border-gray-300 active:scale-[0.98] active:translate-y-0 active:shadow-md transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer group"
              >
                {/* Image Box */}
                <div className="relative aspect-[16/10] w-full bg-[#F2F4F7] overflow-hidden group flex items-center justify-center">
                  {/* Badge */}
                  <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-black font-extrabold text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200/50">
                    {unit.categoryBadge}
                  </span>

                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-black tracking-tight">
                      {unit.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-1">
                      {unit.price}
                    </p>

                    {/* Spec Icons Row */}
                    <div className="flex items-center justify-between gap-2 mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-700">
                      {unit.specs.map((spec, idx) => {
                        const IconComp = spec.icon;
                        return (
                          <div key={idx} className="flex items-center gap-1.5">
                            <IconComp className="w-4 h-4 text-gray-500 shrink-0" />
                            <span className="truncate">{spec.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Detail Spesifikasi Button */}
                  <Link
                    href={`/katalog/${unit.id}`}
                    className="w-full border-2 border-gray-900 hover:bg-black hover:text-white text-gray-900 font-extrabold py-3 px-4 rounded-2xl text-sm transition-all duration-200 text-center active:scale-[0.98] block"
                  >
                    Detail Spesifikasi
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
