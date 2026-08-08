'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { ArrowLeft, ChevronRight, Search, Minus, PhoneCall, SlidersHorizontal, FileText, Star, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CARS_DATA } from '@/data/cars';
import { CAR_SPECIFICATIONS, CarSpecification } from '@/data/specifications';
import { TestDriveModal } from '@/components/TestDriveModal';

function SpecificationContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const carId = (params?.id as string) || 'kia-all-new-carens';
  const variantParam = searchParams.get('variant');

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [focusedVariant, setFocusedVariant] = useState<string | null>(variantParam);

  const car = CARS_DATA.find((c) => c.id.toLowerCase() === carId.toLowerCase()) || CARS_DATA[0];

  // Dynamic Specification Lookup or Fallback
  let specData: CarSpecification = CAR_SPECIFICATIONS[carId.toLowerCase()];

  if (!specData) {
    // Generate fallback spec dataset from CARS_DATA
    specData = {
      carId: car.id,
      carName: car.name,
      tagline: car.tagline || 'Informasi Spesifikasi Unit Resmi KIA',
      variants: [car.trim || 'Standard'],
      dimensionDiagram: {
        lengthWidthHeight: '4.500 / 1.800 / 1.650 mm',
        wheelbase: '2.700 mm',
        tread: '1.560 / 1.570 mm',
        overhang: '800 / 900 mm',
        groundClearance: '190 mm',
        cargoCapacity: '400 L'
      },
      categories: [
        {
          id: 'powertrain',
          title: 'Power Train',
          items: [
            { name: 'Engine Type', values: { [car.trim || 'Standard']: car.engine } },
            { name: 'Power / Torque', values: { [car.trim || 'Standard']: car.power } },
            { name: 'Fuel Type', values: { [car.trim || 'Standard']: car.fuelType } }
          ]
        },
        {
          id: 'transmission',
          title: 'Transmission',
          items: [
            { name: 'Transmission Type', values: { [car.trim || 'Standard']: car.transmissionDetail || car.transmissionType } }
          ]
        },
        {
          id: 'features',
          title: 'Fitur Utama',
          items: (car.features || []).map((f) => ({
            name: f,
            values: { [car.trim || 'Standard']: '●' }
          }))
        }
      ]
    };
  }

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
    <main className="min-h-screen bg-[#F5F6F8] text-gray-900 font-sans flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar onOpenTestDrive={() => setIsTestDriveOpen(true)} />

      {/* Top Header & Breadcrumb */}
      <section className="bg-black text-white pt-8 pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-[1728px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs text-gray-400 gap-2 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href="/katalog" className="hover:text-white transition-colors">Katalog Unit</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <Link href={`/katalog/${car.id}`} className="hover:text-white transition-colors">{car.name}</Link>
            <ChevronRight className="w-3 h-3 text-gray-600" />
            <span className="text-white font-bold">Form Spesifikasi</span>
          </nav>

          {/* Title & Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300">
                <FileText className="w-3.5 h-3.5 text-rose-400" />
                <span>Lembar Spesifikasi Resmi {car.name}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                {car.name} <span className="font-normal text-gray-400">Specifications</span>
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                Data komparasi spesifikasi teknis lengkap untuk seluruh varian {car.name} di Dealer KIA Masati Semarang.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm rounded-xl border border-neutral-700 transition-all flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Cetak / Simpan Spec</span>
              </button>
              <button
                onClick={() => setIsTestDriveOpen(true)}
                className="px-6 py-3 bg-white text-black hover:bg-gray-100 font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Jadwalkan Test Drive</span>
              </button>
              <Link
                href={`/katalog/${car.id}`}
                className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm rounded-xl border border-neutral-700 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Table Container */}
      <section className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-10 w-full flex-grow">
        
        {/* Car Dimensions & Quick Specs Summary Card */}
        {specData.dimensionDiagram && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              <div className="w-full lg:w-1/3 relative aspect-[16/10] bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Length / Width / Height</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.lengthWidthHeight}</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Wheelbase</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.wheelbase}</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Front/Rear Tread</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.tread}</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Front/Rear Overhang</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.overhang}</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Ground Clearance</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.groundClearance}</span>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-xl border border-gray-200/80">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Cargo Capacity</span>
                  <span className="text-base sm:text-lg font-black text-gray-900 mt-1 block">{specData.dimensionDiagram.cargoCapacity}</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Variant Focus Selector Banner */}
        {variants.length > 1 && (
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs sm:text-sm font-extrabold text-gray-800">
                Pilih / Highlight Varian Unit:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setFocusedVariant(null)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  !focusedVariant
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Tampilkan Semua Varian
              </button>
              {variants.map((vName, idx) => {
                const isSelected = focusedVariant?.toLowerCase() === vName.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => setFocusedVariant(vName)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-600/30'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    <span>{vName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Filter Navigation & Search Bar */}
        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari fitur spesifikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none transition-all"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                }`}
              >
                Semua Kategori
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Specification Form Tables */}
        <div className="space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                
                {/* Form Category Header */}
                <div className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
                  <h3 className="text-base sm:text-lg font-black tracking-wide uppercase">
                    {cat.title}
                  </h3>
                  <span className="text-xs font-bold text-gray-400">
                    {cat.items.length} Items
                  </span>
                </div>

                {/* Form Table Grid */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-[#F8F9FA] border-b border-gray-200 text-xs font-black text-gray-700 uppercase">
                        <th className="py-3.5 px-6 border-r border-gray-200 w-1/3 sticky left-0 bg-[#F8F9FA] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          Specification Item
                        </th>
                        {variants.map((vName, idx) => {
                          const isHighlighted = focusedVariant && focusedVariant.toLowerCase() === vName.toLowerCase();
                          return (
                            <th
                              key={idx}
                              className={`py-3.5 px-6 border-r border-gray-200 text-center w-1/6 last:border-r-0 transition-colors ${
                                isHighlighted ? 'bg-emerald-50/80 border-b-2 border-b-emerald-600' : ''
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                {isHighlighted && (
                                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded-full">
                                    ★ Pilihan Anda
                                  </span>
                                )}
                                <span className={`inline-block px-3 py-1 text-xs font-black rounded-md ${
                                  isHighlighted ? 'bg-emerald-600 text-white' : 'bg-black text-white'
                                }`}>
                                  {vName}
                                </span>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                      {cat.items.map((item, itemIdx) => (
                        <tr key={itemIdx} className="hover:bg-gray-50/80 transition-colors">
                          
                          {/* Specification Name Column */}
                          <td className="py-3.5 px-6 font-bold text-gray-900 border-r border-gray-200 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                            {item.name}
                          </td>

                          {/* Variant Data Columns */}
                          {variants.map((vName, vIdx) => {
                            const val = item.values[vName] || '-';
                            const isBullet = val === '●';
                            const isDash = val === '-';
                            const isHighlighted = focusedVariant && focusedVariant.toLowerCase() === vName.toLowerCase();

                            return (
                              <td
                                key={vIdx}
                                className={`py-3.5 px-6 text-center align-middle border-r border-gray-200 last:border-r-0 transition-colors ${
                                  isHighlighted ? 'bg-emerald-50/40 font-bold' : ''
                                }`}
                              >
                                {isBullet ? (
                                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-black text-xs mx-auto shadow-sm ${
                                    isHighlighted ? 'bg-emerald-600 text-white' : 'bg-black text-white'
                                  }`}>
                                    ●
                                  </span>
                                ) : isDash ? (
                                  <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                                ) : (
                                  <span className={`font-semibold text-xs sm:text-sm leading-snug ${
                                    isHighlighted ? 'text-emerald-950 font-black' : 'text-gray-800'
                                  }`}>
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
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-gray-800">Spesifikasi Tidak Ditemukan</h3>
              <p className="text-gray-500 text-xs mt-1">Gunakan kata kunci pencarian lain.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-xl"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* Sales Contact Banner */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-gray-900">
              Butuh Informasi Simulasi Kredit atau Promo OTR Semarang untuk {car.name}?
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Hubungi Sales Executive resmi KIA Masati Semarang untuk penawaran harga terbaik & test drive.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsTestDriveOpen(true)}
              className="px-6 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              Booking Test Drive
            </button>
            <a
              href={`https://wa.me/6281325456655?text=${encodeURIComponent(`Halo KIA Semarang, saya ingin tanyakan spesifikasi dan promo untuk ${car.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all"
            >
              WhatsApp Sales
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

export default function CarSpecificationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-black border-t-transparent"></div>
      </div>
    }>
      <SpecificationContent />
    </Suspense>
  );
}
