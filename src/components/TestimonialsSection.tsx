'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarInitial: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      rating: 5,
      quote:
        '"Pelayanan sangat profesional. Proses pembelian EV6 sangat transparan dan dibantu dari awal sampai mobil dikirim ke rumah. Sangat puas dengan Dealer KIA Semarang."',
      authorName: 'Budi Santoso',
      authorRole: 'Pemilik KIA EV6',
      avatarInitial: 'B',
    },
    {
      id: '2',
      rating: 5,
      quote:
        '"Service bengkelnya cepat dan ruang tunggunya nyaman sekali. Teknisi menjelaskan dengan detail apa saja yang diganti. Harga suku cadang juga jelas."',
      authorName: 'Anisa Rahma',
      authorRole: 'Pelanggan Bengkel Resmi',
      avatarInitial: 'A',
    },
    {
      id: '3',
      rating: 4,
      quote:
        '"Tukar tambah Seltos lama saya dengan Sorento baru prosesnya anti ribet. Salesnya komunikatif dan memberikan penawaran terbaik."',
      authorName: 'Deni Hermawan',
      authorRole: 'Pemilik KIA Sorento',
      avatarInitial: 'D',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Apa Kata Klien Kami
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Komitmen kami adalah kepuasan Anda. Simak pengalaman mereka yang telah mempercayakan perjalanannya bersama KIA Semarang.
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex <= item.rating
                        ? 'text-red-600 fill-red-600'
                        : 'text-gray-300 fill-gray-100'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed font-medium flex-1">
                {item.quote}
              </p>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-200/60">
                <div className="w-11 h-11 rounded-full bg-gray-200 text-gray-800 font-extrabold text-base flex items-center justify-center shrink-0">
                  {item.avatarInitial}
                </div>
                <div>
                  <h4 className="font-extrabold text-black text-sm sm:text-base">
                    {item.authorName}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.authorRole}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
