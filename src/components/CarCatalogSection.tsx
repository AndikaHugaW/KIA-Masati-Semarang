'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Car } from '@/data/cars';
import { Search, Zap, Users, Gauge, CalendarCheck, Info, X, CheckCircle2 } from 'lucide-react';

interface CarCatalogSectionProps {
  cars: Car[];
  onOpenTestDrive: (carId: string) => void;
}

export const CarCatalogSection: React.FC<CarCatalogSectionProps> = ({
  cars,
  onOpenTestDrive,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCar, setActiveModalCar] = useState<Car | null>(null);

  const categories = ['All', 'EV', 'SUV', 'MPV'];

  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="katalog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Jajaran Mobil Terbaru{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
              KIA Semarang
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Pilih unit impian Anda dari lini EV ramah lingkungan hingga SUV & MPV keluarga berteknologi canggih.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'All' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari tipe (EV9, Seltos, dll)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/60 focus:ring-1 focus:ring-red-500/60 text-sm transition-all"
            />
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden group">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  {car.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-extrabold shadow-md">
                      {typeof car.badge === 'string' ? car.badge : car.badge.text}
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 text-xs font-semibold">
                    {car.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white">{car.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{car.tagline}</p>
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-red-500 shrink-0" />
                      <div>
                        <span className="text-gray-500 block text-[10px]">Mesin/Motor</span>
                        <span className="font-semibold truncate block max-w-[130px]">{car.engine}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-gray-500 block text-[10px]">Tenaga</span>
                        <span className="font-semibold block">{car.power}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                      <div>
                        <span className="text-gray-500 block text-[10px]">Kapasitas</span>
                        <span className="font-semibold block">{car.seats} Penumpang</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-gray-500 block text-[10px]">Transmisi</span>
                        <span className="font-semibold truncate block max-w-[130px]">{car.transmissionDetail}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-gray-400">Harga OTR Semarang Mulai</span>
                  <p className="text-xl font-extrabold text-white">{car.priceStarting}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalCar(car)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                    title="Detail Spesifikasi"
                  >
                    <Info className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => onOpenTestDrive(car.id)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Specs Modal */}
      {activeModalCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0F1420] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalCar(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
                <Image src={activeModalCar.image} alt={activeModalCar.name} fill className="object-cover" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
                  {activeModalCar.category} Spec Sheet
                </span>
                <h3 className="text-2xl font-black text-white">{activeModalCar.name}</h3>
                <p className="text-sm text-gray-400">{activeModalCar.priceStarting} OTR Semarang</p>
              </div>
            </div>

            {/* Spec Highlights */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-sm">
              <div>
                <span className="text-gray-500 text-xs">Akselerasi / Penggerak</span>
                <p className="font-semibold text-white">{activeModalCar.specs.driveType}</p>
                {activeModalCar.specs.acceleration && (
                  <p className="text-xs text-amber-400 mt-0.5">{activeModalCar.specs.acceleration}</p>
                )}
              </div>

              <div>
                <span className="text-gray-500 text-xs">Jangkauan / Garansi</span>
                <p className="font-semibold text-white">{activeModalCar.specs.warranty}</p>
                {activeModalCar.specs.range && (
                  <p className="text-xs text-emerald-400 mt-0.5">{activeModalCar.specs.range}</p>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-bold text-white mb-3">Fitur Unggulan Utama</h4>
              <div className="space-y-2">
                {activeModalCar.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setActiveModalCar(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-gray-300"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const carId = activeModalCar.id;
                  setActiveModalCar(null);
                  onOpenTestDrive(carId);
                }}
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg"
              >
                Jadwalkan Test Drive
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
