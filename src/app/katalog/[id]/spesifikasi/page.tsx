'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronRight, Download, Check, Minus, Search, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CARS_DATA } from '@/data/cars';
import { CAR_SPECIFICATIONS } from '@/data/specifications';
import { TestDriveModal } from '@/components/TestDriveModal';

export default function CarSpecificationPage() {
  const params = useParams();
  const router = useRouter();
  const carId = (params?.id as string) || 'kia-all-new-carens';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const car = CARS_DATA.find((c) => c.id === carId) || CARS_DATA.find((c) => c.id === 'kia-all-new-carens')!;
  const specData = CAR_SPECIFICATIONS[carId] || CAR_SPECIFICATIONS['kia-all-new-carens'];

  const categories = specData.categories || [];
  const variants = specData.variants || [car.trim || 'Standard'];

  const filteredCategories = categories.map((cat) => {
    if (!searchQuery.trim()) return cat;
    const matchingItems = cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.values(item.values).some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => (activeCategory === 'all' || cat.id === activeCategory) && cat.items.length > 0);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar onOpenTestDrive={() => setIsTestDriveOpen(true)} />

      {/* Top Breadcrumb & Hero Banner */}
      <section className="bg-neutral-900 text-white pt-8 pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1728px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-gray-400 gap-2 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href="/katalog" className="hover:text-white transition-colors">Katalog Unit</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href={`/katalog/${car.id}`} className="hover:text-white transition-colors">{car.name}</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-bold">Spesifikasi</span>
          </nav>

          {/* Hero Header Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Spesifikasi Lengkap Dealer Resmi</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {car.name} <span className="text-gray-400 font-normal">Spesifikasi</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {specData.tagline || car.tagline}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsTestDriveOpen(true)}
                className="px-6 py-3.5 bg-white text-black hover:bg-gray-100 font-extrabold text-sm rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Jadwalkan Test Drive</span>
              </button>
              <Link
                href={`/katalog/${car.id}`}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Detail</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Specification Body */}
      <section className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 w-full flex-grow">
        
        {/* Dimensions Showcase Diagram Section */}
        {specData.dimensionDiagram && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl shadow-black/5 mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              
              {/* Car Image Preview */}
              <div className="w-full lg:w-1/2 relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <Image
                  src={car.image}
                  alt={`${car.name} Dimensions`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Dimension Metrics Grid */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Dimensi Utama & Proporsi
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Desain aerodinamis dengan proporsi kabin lapang dan stabilitas tinggi.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Panjang</span>
                    <span className="text-xl font-extrabold text-gray-900 mt-1 block">{specData.dimensionDiagram.length}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Lebar</span>
                    <span className="text-xl font-extrabold text-gray-900 mt-1 block">{specData.dimensionDiagram.width}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Tinggi</span>
                    <span className="text-xl font-extrabold text-gray-900 mt-1 block">{specData.dimensionDiagram.height}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Wheelbase</span>
                    <span className="text-xl font-extrabold text-gray-900 mt-1 block">{specData.dimensionDiagram.wheelbase}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 col-span-2 sm:col-span-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">Ground Clearance</span>
                    <span className="text-xl font-extrabold text-gray-900 mt-1 block">{specData.dimensionDiagram.groundClearance}</span>
                  </div>
                </div>

                {specData.wheelSpec && (
                  <div className="p-4 bg-neutral-900 text-white rounded-2xl flex items-center gap-4">
                    <ShieldCheck className="w-8 h-8 text-rose-400 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold">{specData.wheelSpec.type}</h4>
                      <p className="text-xs text-gray-300 mt-0.5">{specData.wheelSpec.description}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation & Search Bar */}
        <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg shadow-black/5 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari spesifikasi (mis. Sunroof, Bose)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-none rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                Semua Kategori
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  {cat.title.split('(')[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Specification Comparison Table View */}
        <div className="space-y-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-black/5 overflow-hidden">
                
                {/* Category Header */}
                <div className="bg-gray-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                    {cat.items.length} Fitur
                  </span>
                </div>

                {/* Table Data */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-gray-50/80 border-b border-gray-100">
                        <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">
                          Spesifikasi / Fitur
                        </th>
                        {variants.map((vName, idx) => (
                          <th key={idx} className="py-4 px-6 text-xs font-extrabold text-gray-900 uppercase tracking-wider text-center">
                            {vName}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {cat.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-gray-50/60 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900 align-middle">
                            {item.name}
                          </td>
                          {variants.map((vName, vIdx) => {
                            const val = item.values[vName] || item.values[Object.keys(item.values)[vIdx]] || '-';
                            const isAvailable = val.toLowerCase() === 'tersedia' || val.toLowerCase() === 'ya';
                            const isNotAvailable = val === '-';

                            return (
                              <td key={vIdx} className="py-4 px-6 text-center align-middle">
                                {isAvailable ? (
                                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full">
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Tersedia</span>
                                  </div>
                                ) : isNotAvailable ? (
                                  <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                                ) : (
                                  <span className="font-medium text-gray-700 text-xs sm:text-sm">
                                    {val}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            ))
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-md">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-gray-800">Tidak ada spesifikasi yang cocok</h3>
              <p className="text-gray-500 text-sm mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori lain.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-5 py-2.5 bg-black text-white text-xs font-bold rounded-xl hover:bg-neutral-800 transition-all"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl relative z-10 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Tertarik Mencoba {car.name} Secara Langsung?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dapatkan konsultasi gratis, simulasi kredit dengan DP ringan, dan jadwalkan Test Drive langsung ke rumah atau lokasi Anda di Semarang.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => setIsTestDriveOpen(true)}
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 font-extrabold text-sm rounded-2xl shadow-xl transition-all active:scale-95"
            >
              Booking Test Drive Gratis
            </button>
            <a
              href="https://wa.me/6281325456655?text=Halo%20KIA%20Semarang,%20saya%20ingin%20tanya%20spesifikasi%20dan%20promo%20lengkap"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-2xl shadow-lg transition-all"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

      </section>

      {/* Test Drive Modal */}
      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        preselectedCarId={car.id}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
