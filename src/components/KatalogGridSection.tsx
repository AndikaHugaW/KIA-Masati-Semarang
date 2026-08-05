'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Car } from '@/data/cars';
import { Settings, User, Fuel, Zap, Battery, Compass, ChevronDown, SlidersHorizontal, RotateCcw } from 'lucide-react';

interface KatalogGridSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const KatalogGridSection: React.FC<KatalogGridSectionProps> = ({ onOpenTestDrive }) => {
  // State for filters (default displays all featured cards)
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<string>('all');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('Semua');
  const [selectedTransmission, setSelectedTransmission] = useState<string>('Semua');
  const [sortBy, setSortBy] = useState<string>('newest');

  // Active highlighted card ID
  const [activeCardId, setActiveCardId] = useState<string>('kia-ev9');

  // State for cars data & loading
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(0);

  // Fetch cars from API handler
  const fetchFilteredCars = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      if (selectedModels.length > 0) {
        params.append('models', selectedModels.join(','));
      }
      if (minPrice && minPrice !== 'all') {
        params.append('minPrice', minPrice);
      }
      if (maxPrice && maxPrice !== 'all') {
        params.append('maxPrice', maxPrice);
      }
      if (selectedBodyType && selectedBodyType !== 'Semua') {
        params.append('bodyType', selectedBodyType);
      }
      if (selectedTransmission && selectedTransmission !== 'Semua') {
        params.append('transmission', selectedTransmission);
      }
      if (sortBy) {
        params.append('sort', sortBy);
      }

      const res = await fetch(`/api/cars?${params.toString()}`);
      const json = await res.json();

      if (json.status === 'success' && Array.isArray(json.data)) {
        setCars(json.data);
        setTotalCount(json.data.length);
      } else {
        setCars([]);
        setTotalCount(0);
      }
    } catch (err) {
      console.error('Error fetching cars:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial data & on filter changes
  useEffect(() => {
    fetchFilteredCars();
  }, [sortBy]);

  // Model Checkbox Toggle Handler
  const handleModelToggle = (modelName: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelName)
        ? prev.filter((m) => m !== modelName)
        : [...prev, modelName]
    );
  };

  // Reset Filters Handler
  const handleResetFilters = () => {
    setSelectedModels([]);
    setMinPrice('all');
    setMaxPrice('all');
    setSelectedBodyType('Semua');
    setSelectedTransmission('Semua');
    setSortBy('newest');

    // Trigger fresh fetch
    fetch('/api/cars')
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'success') {
          setCars(json.data);
          setTotalCount(json.data.length);
        }
      });
  };

  const router = useRouter();

  return (
    <section id="katalog-grid" className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Filter Sidebar */}
        <div className="w-full lg:w-72 shrink-0 bg-white p-6 sm:p-7 rounded-3xl border border-gray-100 shadow-xl shadow-black/5 space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-black" />
              <h3 className="text-lg font-black text-black tracking-tight">Filter Unit</h3>
            </div>
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-xs font-bold text-gray-400 hover:text-black transition-colors group"
            >
              <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform" />
              <span>Reset</span>
            </button>
          </div>

          {/* Model Section */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">Model Vehicles</h4>
            <div className="space-y-2">
              {['Sonet', 'Seltos', 'All New Carens', 'EV9', 'Carnival'].map((m) => {
                const isChecked = selectedModels.includes(m);
                return (
                  <label
                    key={m}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm'
                        : 'bg-gray-50/70 border-gray-100 text-gray-700 hover:bg-gray-100/80 hover:border-gray-200'
                    }`}
                  >
                    <span className="font-semibold text-xs sm:text-sm">{m}</span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleModelToggle(m)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                      isChecked ? 'bg-white border-white' : 'border-gray-300 bg-white'
                    }`}>
                      {isChecked && <div className="w-2 h-2 rounded-sm bg-black" />}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Harga (Rp) Section */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">Rentang Harga (Rp)</h4>
            
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-[11px] font-bold text-gray-400 block mb-1">Min Price</label>
                <div className="relative">
                  <select
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer pr-8"
                  >
                    <option value="all">Semua</option>
                    <option value="300000000">300 Jt</option>
                    <option value="400000000">400 Jt</option>
                    <option value="500000000">500 Jt</option>
                    <option value="800000000">800 Jt</option>
                    <option value="1000000000">1 M</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-400 block mb-1">Max Price</label>
                <div className="relative">
                  <select
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full bg-[#F8F9FA] border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer pr-8"
                  >
                    <option value="all">Semua</option>
                    <option value="500000000">500 Jt</option>
                    <option value="800000000">800 Jt</option>
                    <option value="1500000000">1.5 M</option>
                    <option value="2000000000">2 M</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Tipe Section */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">Tipe</h4>
            <div className="flex flex-wrap gap-2">
              {['SUV', 'MPV', 'Elektrik'].map((bType) => (
                <button
                  key={bType}
                  type="button"
                  onClick={() => setSelectedBodyType(bType === selectedBodyType ? 'Semua' : bType)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    selectedBodyType === bType
                      ? 'bg-black text-white shadow-md shadow-black/10 scale-105'
                      : 'bg-[#F3F4F6] text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {bType}
                </button>
              ))}
            </div>
          </div>

          {/* Transmisi Section */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            <h4 className="font-extrabold text-xs text-gray-900 uppercase tracking-wider">Transmisi</h4>
            <div className="space-y-2">
              {[
                { label: 'Semua Transmisi', value: 'Semua' },
                { label: 'Automatic (AT/CVT/DCT)', value: 'Automatic' },
                { label: 'Manual (MT)', value: 'Manual' }
              ].map((t) => (
                <label
                  key={t.value}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                    selectedTransmission === t.value
                      ? 'bg-black/5 border-black text-black'
                      : 'border-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="transmission"
                    checked={selectedTransmission === t.value}
                    onChange={() => setSelectedTransmission(t.value)}
                    className="w-4 h-4 border-gray-300 text-black focus:ring-black accent-black cursor-pointer"
                  />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Filter Button */}
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={fetchFilteredCars}
              className="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3.5 px-6 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg active:scale-98 text-center flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Terapkan Filter</span>
              <SlidersHorizontal className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

        </div>

        {/* Right Main Grid */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Top Bar: Count & Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
            <p className="text-sm font-semibold text-gray-700">
              Menampilkan <span className="font-extrabold text-black">{totalCount || cars.length}</span> unit kendaraan
            </p>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Urutkan:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-extrabold text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-black appearance-none cursor-pointer pr-9 shadow-sm hover:border-gray-300 transition-all"
                >
                  <option value="newest">Terbaru</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="name-asc">Nama A-Z</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Loading state */}
          {loading ? (
            <div className="py-20 text-center text-gray-500 font-medium animate-pulse">
              Memuat data katalog mobil KIA...
            </div>
          ) : cars.length === 0 ? (
            <div className="py-20 text-center space-y-3 bg-white rounded-2xl border border-gray-200 p-8">
              <p className="text-gray-500 font-bold text-lg">Tidak ada unit kendaraan yang sesuai filter.</p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-black text-white rounded-xl text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            /* Cars 3-Column Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cars.map((car) => {
                const isActive = activeCardId === car.id;
                return (
                  <div
                    key={car.id}
                    onClick={() => {
                      setActiveCardId(car.id);
                      router.push(`/katalog/${car.id}`);
                    }}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer ${
                      isActive ? 'border-2 border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-200'
                    }`}
                  >
                    {/* Top Image Showcase (Full Width) */}
                    <div className="relative aspect-[16/10] bg-[#F2F4F7] w-full overflow-hidden group">
                      
                      {/* Badge Badge Pill */}
                      {car.badge && (
                        <div className="absolute top-4 left-4 z-10">
                          {car.badge.type === 'ready' && (
                            <span className="bg-white/90 text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm tracking-wider uppercase">
                              {car.badge.text}
                            </span>
                          )}
                          {car.badge.type === 'promo' && (
                            <span className="bg-red-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm tracking-wider uppercase">
                              {car.badge.text}
                            </span>
                          )}
                          {car.badge.type === 'ev' && (
                            <span className="bg-sky-100 text-sky-800 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wider">
                              <Zap className="w-3 h-3 text-sky-600 fill-sky-600" />
                              {car.badge.text}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Car Image (Full Width) */}
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      
                      {/* Title & Trim */}
                      <div>
                        <h3 className="text-2xl font-black text-black tracking-tight leading-tight">
                          {car.name}
                        </h3>
                        <p className="text-xs font-medium text-gray-500 mt-1">
                          {car.trim}
                        </p>

                        {/* Price */}
                        <div className="mt-3">
                          <span className="text-2xl font-black text-black">
                            {car.priceStarting}
                          </span>
                        </div>
                      </div>

                      {/* Specs 4-Box Grid */}
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-3 border-t border-gray-100 text-xs text-gray-600 font-medium">
                        {car.category === 'EV' || car.fuelType === 'Listrik' ? (
                          <>
                            <div className="flex items-center gap-2">
                              <Battery className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.battery || '77.4 kWh'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.power || '320 HP'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Compass className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.range || '506 km Range'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Settings className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.driveType || 'AWD'}</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <Settings className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.engine}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Settings className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.transmissionDetail}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.seats} Seats</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Fuel className="w-4 h-4 text-gray-400 shrink-0" />
                              <span className="truncate">{car.fuelType}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenTestDrive) onOpenTestDrive(car.id);
                          }}
                          className="bg-black hover:bg-neutral-800 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs flex-1 text-center transition-colors shadow-sm cursor-pointer"
                        >
                          Pesan
                        </button>
                        <Link
                          href={`/katalog/${car.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-gray-900 font-bold py-2.5 px-4 rounded-xl text-xs flex-1 text-center transition-colors block cursor-pointer"
                        >
                          Detail
                        </Link>
                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
