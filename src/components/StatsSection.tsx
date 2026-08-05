'use client';

import React from 'react';
import { BadgeCheck, Star } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-200/80 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-300/60 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
              1+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 tracking-wide">
              Tahun Melayani
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center px-4">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
              500+
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 tracking-wide">
              Mobil Terjual
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center px-4">
            <div className="flex items-center justify-center">
              <BadgeCheck className="w-9 h-9 sm:w-10 sm:h-10 text-black stroke-[1.75]" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 tracking-wide">
              Dealer Resmi KIA
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center px-4">
            <div className="flex items-center justify-center gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
                4.9
              </span>
              <Star className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 fill-amber-400" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-2 tracking-wide">
              Rating Pelanggan
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
