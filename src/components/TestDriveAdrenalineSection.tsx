'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface TestDriveAdrenalineSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const TestDriveAdrenalineSection: React.FC<TestDriveAdrenalineSectionProps> = ({ onOpenTestDrive }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    setSubmitted(true);
    if (onOpenTestDrive) {
      onOpenTestDrive();
    }
  };

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1728px] mx-auto">
        <div className="bg-[#0E1522] text-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Text & Schedule Form */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Experience the Adrenaline
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
              Rasakan sensasi berkendara yang sebenarnya. Jadwalkan test drive Anda hari ini dan biarkan performa KIA berbicara.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-3 text-emerald-400 text-sm font-semibold">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span>Terima kasih! Tim Sales KIA Semarang akan segera menghubungi nomor WhatsApp Anda.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3 pt-2 max-w-lg">
                <input
                  type="tel"
                  required
                  placeholder="Masukkan Nomor Telepon"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-white text-gray-900 placeholder-gray-400 px-5 py-3.5 rounded-xl font-medium text-sm focus:outline-none focus:ring-2 focus:ring-red-600 flex-1 shadow-inner"
                />

                <button
                  type="submit"
                  className="bg-[#B91C1C] hover:bg-red-700 active:scale-95 text-white font-extrabold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shrink-0 whitespace-nowrap"
                >
                  Jadwalkan Sekarang
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Car Cockpit Image using img5.webp */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] bg-neutral-900 overflow-hidden">
            <Image
              src="/images/landing page/img5.webp"
              alt="KIA Experience the Adrenaline"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Soft inner glow gradient for seamless dark blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1522] via-transparent to-transparent hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
};
