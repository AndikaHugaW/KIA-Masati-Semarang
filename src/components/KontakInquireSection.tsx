'use client';

import React, { useState } from 'react';
import { ArrowRight, MapPin, Clock, Navigation, CheckCircle2 } from 'lucide-react';

export const KontakInquireSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Informasi Produk / Harga',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Halo KIA Semarang, saya ingin mengirimkan pertanyaan:\nNama: ${formData.name}\nTelepon: ${formData.phone}\nMinat: ${formData.interest}\nPesan: ${formData.message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleDirection = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Jl.+Sudirman+No.+128,+Semarang,+Jawa+Tengah+50141',
      '_blank'
    );
  };

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-24 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1728px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Form Card (Stretched to match Right Subsection Height) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between h-full">
          
          {/* Header inside Form Card */}
          <div className="space-y-1 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Inquire with KIA
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
              Kirimkan pertanyaan Anda mengenai ketersediaan unit, jadwal servis, atau konsultasi finansial.
            </p>
          </div>

          {submitted ? (
            <div className="text-center my-auto py-10 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="text-2xl font-bold text-gray-900">
                Pertanyaan Terkirim!
              </h4>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Terima kasih <span className="font-bold text-gray-900">{formData.name}</span>. Tim konsultan KIA Semarang akan segera menghubungi Anda.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                >
                  Chat via WhatsApp
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl text-sm transition-colors"
                >
                  Kirim Pertanyaan Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between space-y-5">
              
              <div className="space-y-5 flex-1 flex flex-col justify-between">
                {/* Row 1: Nama Lengkap & Nomor Telepon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
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
                      placeholder="+62 812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Minat Utama */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Minat Utama
                  </label>
                  <select
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none cursor-pointer"
                  >
                    <option value="Informasi Produk / Harga">Informasi Produk / Harga</option>
                    <option value="Jadual Test Drive">Jadwal Test Drive</option>
                    <option value="Simulasi Kredit / Pembiayaan">Simulasi Kredit / Pembiayaan</option>
                    <option value="Layanan Bengkel & Service">Layanan Bengkel & Service</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Row 3: Pesan Anda (Flex fill) */}
                <div className="flex-1 flex flex-col">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    required
                    placeholder="Detailkan kebutuhan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 min-h-[140px] bg-[#F3F4F6] border-none rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2 mt-auto">
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>Kirim Pertanyaan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Column: Showroom Location & Operating Hours */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Top Card: Showroom Location & Map Frame */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm space-y-0 flex-1 flex flex-col justify-between">
            
            {/* Map Frame */}
            <div className="w-full h-52 relative border-b border-gray-100 bg-gray-100">
              <iframe
                title="Lokasi Dealer KIA Semarang"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.226068393529!2d110.3887!3d-6.9822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b52f1e1a1a1%3A0x123456789abcdef!2sJl.%20Jend.%20Sudirman%20No.128%2C%20Gisikdrono%2C%20Kec.%20Semarang%20Barat%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050141!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                  Kunjungi Showroom
                </h4>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-gray-900 text-sm sm:text-base">
                  KIA Semarang Utama
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Jl. Sudirman No. 128
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Semarang, Jawa Tengah 50141
                </p>
              </div>

              <button
                onClick={handleDirection}
                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-900 font-bold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-gray-900" />
                <span>Dapatkan Petunjuk Arah</span>
              </button>
            </div>

          </div>

          {/* Bottom Card: Dark Jam Operasional */}
          <div className="bg-[#0F172A] text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-5">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-gray-300" />
              <h4 className="font-bold text-gray-100 text-base sm:text-lg">
                Jam Operasional
              </h4>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                <span className="text-gray-300">Senin - Jumat</span>
                <span className="font-medium text-gray-100">08:00 - 17:00</span>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                <span className="text-gray-300">Sabtu</span>
                <span className="font-medium text-gray-100">08:00 - 15:00</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Minggu / Libur</span>
                <span className="font-medium text-gray-100">Tutup</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
