'use client';

import React from 'react';
import { Promo } from '@/data/promos';
import { Sparkles, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

interface PromoSectionProps {
  promos: Promo[];
  onOpenTestDrive: (carId?: string) => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ promos, onOpenTestDrive }) => {
  const handleWhatsAppConsultation = (title: string) => {
    const message = encodeURIComponent(
      `Halo Sales Executive KIA Semarang, saya ingin bertanya tentang promo: ${title}`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="promo" className="py-20 relative bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              SPECIAL DEALER OFFERS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Promo Exclusive bulan ini di{' '}
              <span className="bg-gradient-to-r from-red-500 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                KIA Semarang
              </span>
            </h2>
            <p className="text-gray-400 text-base">
              Dapatkan bonus cashback langsung, bunga 0%, garansi resmi, dan paket kredit disetujui dalam 24 jam.
            </p>
          </div>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 hover:border-red-500/40 transition-all hover:-translate-y-1 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider">
                    {promo.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>s/d {promo.validUntil}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-white leading-snug">{promo.title}</h3>
                  <p className="text-xs text-red-400 font-semibold mt-1">{promo.subtitle}</p>
                </div>

                {/* Highlight Value Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-red-900/30 border border-red-500/30 text-center">
                  <span className="text-xs text-gray-400 block uppercase tracking-wider">Benefit Utama</span>
                  <span className="text-xl font-black text-white bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    {promo.discountValue}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">{promo.description}</p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  {promo.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => handleWhatsAppConsultation(promo.title)}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Klaim via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
