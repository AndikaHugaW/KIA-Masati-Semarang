'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';
import { 
  ArrowLeft, 
  ChevronRight, 
  Search, 
  Minus, 
  PhoneCall, 
  SlidersHorizontal, 
  FileText, 
  Star, 
  Check, 
  LayoutList, 
  Table, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CARS_DATA } from '@/data/cars';
import { CAR_SPECIFICATIONS, CarSpecification } from '@/data/specifications';
import { TestDriveModal } from '@/components/TestDriveModal';
import { CONTACT_INFO } from '@/data/contact';

function SpecificationContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const carId = (params?.id as string) || 'kia-all-new-carens';
  const variantParam = searchParams.get('variant');

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [focusedVariant, setFocusedVariant] = useState<string | null>(variantParam);
  const [mobileViewMode, setMobileViewMode] = useState<'card' | 'table'>('card');

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

  // Helper to render formatted values
  const renderValueBadge = (val: string, isHighlighted: boolean) => {
    if (val === '●') {
      return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${
          isHighlighted ? 'bg-emerald-600 text-white' : 'bg-black text-white'
        }`}>
          <Check className="w-3.5 h-3.5 stroke-[3]" />
          <span>Tersedia</span>
        </span>
      );
    }
    if (val === '-') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 text-gray-400 text-xs font-medium">
          <Minus className="w-3 h-3" />
          <span>Tidak Ada</span>
        </span>
      );
    }
    return (
      <span className={`text-xs sm:text-sm font-bold leading-relaxed break-words ${
        isHighlighted ? 'text-emerald-950 font-black' : 'text-gray-900'
      }`}>
        {val}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-gray-900 font-sans flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar onOpenTestDrive={() => setIsTestDriveOpen(true)} />

      {/* Top Header & Breadcrumb */}
      <section className="bg-black text-white pt-6 sm:pt-8 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-neutral-800">
        <div className="max-w-[1728px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center text-[11px] sm:text-xs text-gray-400 gap-1.5 sm:gap-2 mb-4 sm:mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
            <Link href="/katalog" className="hover:text-white transition-colors">Katalog Unit</Link>
            <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
            <Link href={`/katalog/${car.id}`} className="hover:text-white transition-colors">{car.name}</Link>
            <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
            <span className="text-white font-bold truncate">Spesifikasi Lengkap</span>
          </nav>

          {/* Title & Actions */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-300">
                <FileText className="w-3.5 h-3.5 text-rose-400" />
                <span>Lembar Spesifikasi Resmi {car.name}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {car.name} <span className="font-normal text-gray-400 block sm:inline">Specifications</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-base leading-relaxed">
                Data komparasi spesifikasi teknis lengkap untuk seluruh varian {car.name} di Dealer KIA Masati Semarang.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 sm:px-5 sm:py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-neutral-700 transition-all flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Cetak Spec</span>
              </button>
              <button
                onClick={() => setIsTestDriveOpen(true)}
                className="px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-black hover:bg-gray-100 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Test Drive</span>
              </button>
              <Link
                href={`/katalog/${car.id}`}
                className="col-span-2 sm:col-span-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-neutral-700 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Kembali ke Detail Unit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Table Container */}
      <section className="max-w-[1728px] mx-auto px-3 sm:px-8 lg:px-12 py-6 sm:py-10 w-full flex-grow">
        
        {/* Car Dimensions & Quick Specs Summary Card */}
        {specData.dimensionDiagram && (
          <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 shadow-xs mb-6 sm:mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-5 sm:gap-8">
              
              <div className="w-full lg:w-1/3 relative aspect-[16/10] bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center border border-gray-100">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Panjang / Lebar / Tinggi</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.lengthWidthHeight}</span>
                </div>
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Wheelbase</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.wheelbase}</span>
                </div>
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Tread Depan / Belakang</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.tread}</span>
                </div>
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Overhang Depan / Belakang</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.overhang}</span>
                </div>
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Ground Clearance</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.groundClearance}</span>
                </div>
                <div className="bg-[#F8F9FA] p-3 sm:p-4 rounded-xl border border-gray-200/80">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">Kapasitas Bagasi</span>
                  <span className="text-xs sm:text-base font-black text-gray-900 mt-1 block break-words">{specData.dimensionDiagram.cargoCapacity}</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Control Bar: Variant Focus Selector + Mobile View Mode Switch */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 border border-gray-200 shadow-xs mb-6 space-y-3.5 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
          
          {/* Variant Selector Chips */}
          <div className="space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
            <div className="flex items-center gap-1.5 shrink-0 text-xs font-extrabold text-gray-800">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Varian Unit:</span>
            </div>
            
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <button
                onClick={() => setFocusedVariant(null)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  !focusedVariant
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Semua Varian
              </button>
              {variants.map((vName, idx) => {
                const isSelected = focusedVariant?.toLowerCase() === vName.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => setFocusedVariant(vName)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
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

          {/* Mobile View Mode Switcher (Visible on Mobile) */}
          <div className="flex md:hidden items-center justify-between pt-2 border-t border-gray-100 sm:pt-0 sm:border-0">
            <span className="text-[11px] font-bold text-gray-500">Mode Tampilan:</span>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => setMobileViewMode('card')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  mobileViewMode === 'card'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Kartu Detail</span>
              </button>
              <button
                onClick={() => setMobileViewMode('table')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  mobileViewMode === 'table'
                    ? 'bg-white text-black shadow-xs'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Tabel</span>
              </button>
            </div>
          </div>

        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="sticky top-14 sm:top-20 z-30 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-gray-200 shadow-xs mb-6 sm:mb-8 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari fitur spesifikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black focus:outline-none transition-all"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
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
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
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

        {/* Specification Content: Dual Render (Mobile Cards vs Desktop Table) */}
        <div className="space-y-6 sm:space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
                
                {/* Category Header */}
                <div className="bg-[#1A1A1A] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-gray-800">
                  <h3 className="text-sm sm:text-lg font-black tracking-wide uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span>{cat.title}</span>
                  </h3>
                  <span className="text-[11px] sm:text-xs font-bold bg-white/10 px-2.5 py-0.5 rounded-full text-gray-300">
                    {cat.items.length} Fitur
                  </span>
                </div>

                {/* 1. MOBILE CARD VIEW (Default on Mobile when mobileViewMode === 'card') */}
                <div className={`${mobileViewMode === 'card' ? 'block md:hidden' : 'hidden'} p-3.5 space-y-3 bg-[#F8F9FA]`}>
                  {cat.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="bg-white p-4 rounded-xl border border-gray-200/90 shadow-2xs space-y-3"
                    >
                      {/* Item Name */}
                      <div className="border-b border-gray-100 pb-2">
                        <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 leading-snug">
                          {item.name}
                        </h4>
                      </div>

                      {/* Item Values per Variant */}
                      {focusedVariant ? (
                        /* Single Focused Variant View */
                        <div className="flex items-center justify-between gap-3 pt-0.5">
                          <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                            Varian {focusedVariant}
                          </span>
                          <div className="text-right">
                            {renderValueBadge(
                              item.values[focusedVariant] || '-', 
                              true
                            )}
                          </div>
                        </div>
                      ) : (
                        /* All Variants Stacked View */
                        <div className="space-y-2 pt-0.5">
                          {variants.map((vName, vIdx) => {
                            const val = item.values[vName] || '-';
                            return (
                              <div 
                                key={vIdx}
                                className="flex items-center justify-between gap-3 text-xs p-2 rounded-lg bg-gray-50/80 border border-gray-100"
                              >
                                <span className="font-extrabold text-[10px] text-gray-900 bg-black text-white px-2 py-0.5 rounded shrink-0">
                                  {vName}
                                </span>
                                <div className="text-right font-medium text-gray-800 max-w-[70%] break-words">
                                  {renderValueBadge(val, false)}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* 2. DESKTOP / TABLE VIEW (Always on Desktop, Optional on Mobile) */}
                <div className={`${mobileViewMode === 'table' ? 'block' : 'hidden md:block'} overflow-x-auto`}>
                  <table className="w-full text-left border-collapse min-w-[700px] sm:min-w-[800px]">
                    <thead>
                      <tr className="bg-[#F8F9FA] border-b border-gray-200 text-xs font-black text-gray-700 uppercase">
                        <th className="py-3.5 px-4 sm:px-6 border-r border-gray-200 w-1/3 sticky left-0 bg-[#F8F9FA] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                          Fitur / Spesifikasi
                        </th>
                        {variants.map((vName, idx) => {
                          const isHighlighted = focusedVariant && focusedVariant.toLowerCase() === vName.toLowerCase();
                          return (
                            <th
                              key={idx}
                              className={`py-3.5 px-4 sm:px-6 border-r border-gray-200 text-center w-1/6 last:border-r-0 transition-colors ${
                                isHighlighted ? 'bg-emerald-50/80 border-b-2 border-b-emerald-600' : ''
                              }`}
                            >
                              <div className="flex flex-col items-center gap-1">
                                {isHighlighted && (
                                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded-full">
                                    ★ Pilihan
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
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900 border-r border-gray-200 sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] break-words">
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
                                className={`py-3.5 px-4 sm:px-6 text-center align-middle border-r border-gray-200 last:border-r-0 transition-colors ${
                                  isHighlighted ? 'bg-emerald-50/40 font-bold' : ''
                                }`}
                              >
                                {isBullet ? (
                                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full font-black text-xs mx-auto shadow-xs ${
                                    isHighlighted ? 'bg-emerald-600 text-white' : 'bg-black text-white'
                                  }`}>
                                    ●
                                  </span>
                                ) : isDash ? (
                                  <Minus className="w-4 h-4 text-gray-300 mx-auto" />
                                ) : (
                                  <span className={`font-semibold text-xs sm:text-sm leading-snug break-words ${
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
            <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-200 shadow-xs">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base sm:text-lg font-bold text-gray-800">Spesifikasi Tidak Ditemukan</h3>
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
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-xl font-black text-gray-900">
              Butuh Informasi Simulasi Kredit atau Promo OTR Semarang untuk {car.name}?
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Hubungi Sales Executive resmi KIA Masati Semarang untuk penawaran harga terbaik & test drive.
            </p>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0 justify-center">
            <button
              onClick={() => setIsTestDriveOpen(true)}
              className="flex-1 sm:flex-none px-4 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center"
            >
              Booking Test Drive
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.waNumber}?text=${encodeURIComponent(`Halo KIA Semarang, saya ingin tanyakan spesifikasi dan promo untuk ${car.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md transition-all text-center"
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
