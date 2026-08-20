'use client';

import React from 'react';

const statsData = [
  { value: '01', label: 'Authorized Dealer' },
  { value: '05+', label: 'KIA Models' },
  { value: '24/7', label: 'Sales Assistance' },
  { value: '100%', label: 'Customer Support' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-200/80 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto px-2 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0 divide-y-0 sm:divide-x divide-gray-300/60 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-2 sm:px-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 mt-1.5 sm:mt-2 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
