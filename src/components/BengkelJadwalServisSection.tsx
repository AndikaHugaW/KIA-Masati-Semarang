'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Headphones, CheckCircle2 } from 'lucide-react';

export const BengkelJadwalServisSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    serviceType: '',
    arrivalDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Halo KIA Semarang, saya ingin konfirmasi booking servis:\nNama: ${formData.name}\nTelepon: ${formData.phone}\nModel: ${formData.carModel || '-'}\nLayanan: ${formData.serviceType || '-'}\nTanggal: ${formData.arrivalDate || '-'}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1728px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Image & Info */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Dealership Exterior / Cars Lineup Image */}
          <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-gray-200">
            <Image
              src="/images/layanan bengkel/hero 2.png"
              alt="KIA Service Center & Lineup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

          </div>

          {/* Copy under Image */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Jadwalkan Servis Anda
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xl font-normal">
              Isi formulir di samping untuk memesan waktu servis tanpa antre. Tim kami akan segera mengonfirmasi jadwal Anda.
            </p>
          </div>

          {/* Customer Service Contact Box */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-rose-100/80 text-rose-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Layanan Pelanggan
              </p>
              <p className="text-xs font-medium text-gray-500 mt-0.5">
                0800 1 800 KIA (Bebas Pulsa)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card (Stretched to match Left Height) */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl shadow-black/5 flex flex-col justify-between h-full">
          {submitted ? (
            <div className="text-center my-auto py-8 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-extrabold text-gray-900">
                Permintaan Jadwal Terkirim!
              </h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Terima kasih <span className="font-bold text-gray-900">{formData.name}</span>. Tim kami akan mengonfirmasi jadwal servis Anda via WhatsApp.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                >
                  Konfirmasi via WhatsApp
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl text-sm transition-colors"
                >
                  Buat Jadwal Baru
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-5">
              
              <div className="space-y-5">
                {/* Row 1: Nama Lengkap & Nomor Telepon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812 xxxx xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Model Kendaraan */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Model Kendaraan
                  </label>
                  <select
                    required
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Pilih Model KIA Anda
                    </option>
                    <option value="KIA Sonet">KIA Sonet</option>
                    <option value="KIA Seltos">KIA Seltos</option>
                    <option value="KIA Carens">KIA Carens</option>
                    <option value="KIA EV6">KIA EV6</option>
                    <option value="KIA EV9">KIA EV9</option>
                    <option value="KIA Carnival">KIA Carnival</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Row 3: Jenis Layanan */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    required
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Pilih Jenis Servis
                    </option>
                    <option value="Periodic Maintenance">Periodic Maintenance (Servis Berkala)</option>
                    <option value="Body & Paint">Body & Paint (Perbaikan Bodi & Cat)</option>
                    <option value="Perbaikan Mesin">Perbaikan Mesin / General Repair</option>
                    <option value="Pemeriksaan EV">Pemeriksaan Baterai & Sistem EV</option>
                    <option value="Spooring Balancing">Spooring & Balancing</option>
                  </select>
                </div>

                {/* Row 4: Tanggal Rencana Kedatangan */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Tanggal Rencana Kedatangan
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 mt-auto">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>Kirim Permintaan Jadwal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
