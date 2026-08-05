'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, QrCode, Camera } from 'lucide-react';

interface FooterProps {
  onOpenTestDrive?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="kontak" className="bg-white border-t border-gray-200 text-gray-900 pt-16 pb-10">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-gray-200">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo/logo.png"
                alt="KIA Semarang Logo"
                width={140}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                className="h-10 w-auto object-contain"
              />
              <span className="font-semibold text-xl tracking-tight text-black uppercase">
                KIA SEMARANG
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Dealer resmi KIA melayani penjualan, perawatan, dan suku cadang dengan standar global.
            </p>

            {/* Social / QR Icons */}
            <div className="flex items-center gap-4 text-gray-400 pt-2">
              <div className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer transition-colors">
                <QrCode className="w-5 h-5" />
              </div>
              <div className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer transition-colors">
                <Camera className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Column 2: LAYANAN */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-black">
              LAYANAN
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li>
                <Link href="/katalog" className="hover:text-black transition-colors">
                  Katalog Mobil
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="hover:text-black transition-colors">
                  Promo Terbaru
                </Link>
              </li>
              <li>
                <Link href="/bengkel" className="hover:text-black transition-colors">
                  Booking Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: PERUSAHAAN */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-black">
              PERUSAHAAN
            </h4>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li>
                <Link href="/bengkel" className="hover:text-black transition-colors">
                  Suku Cadang
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-black transition-colors">
                  Lokasi Dealer
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-black transition-colors">
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: HUBUNGI KAMI */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-black">
              HUBUNGI KAMI
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Pemuda No. 123, Semarang Tengah, Kota Semarang
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-700 shrink-0" />
                <span>(024) 1234567</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© 2024 KIA Semarang. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium text-gray-600">
            <Link href="/kontak" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/kontak" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
