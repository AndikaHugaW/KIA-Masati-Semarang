'use client';

import React from 'react';
import { BadgeCheck, Star } from 'lucide-react';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-200/80 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-4 divide-x divide-gray-300/60 text-center">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="text-xl sm:text-3xl md:text-5xl font-black text-black tracking-tight">
              1+
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mt-1 sm:mt-2 tracking-wide">
              Tahun Melayani
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="text-xl sm:text-3xl md:text-5xl font-black text-black tracking-tight">
              500+
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mt-1 sm:mt-2 tracking-wide">
              Mobil Terjual
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <div className="flex items-center justify-center">
              <BadgeCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black stroke-[1.75]" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mt-1 sm:mt-2 tracking-wide">
              Dealer Resmi KIA
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
              <span className="text-xl sm:text-3xl md:text-5xl font-black text-black tracking-tight">
                4.9
              </span>
              <Star className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-amber-400 fill-amber-400" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mt-1 sm:mt-2 tracking-wide">
              Rating Pelanggan
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

