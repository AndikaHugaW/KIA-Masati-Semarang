'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-5 h-5 fill-none stroke-current stroke-2'} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-5 h-5 fill-current'} viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-5 h-5 fill-current'} viewBox="0 0 24 24">
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.96 9.96 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.669-1.038-5.176-2.925-7.062A9.925 9.925 0 0012.012 2zm5.835 14.195c-.247.693-1.235 1.272-1.706 1.349-.47.077-1.085.11-1.751-.104a15.426 15.426 0 01-6.195-3.864 15.65 15.65 0 01-2.673-3.332c-.365-.589-.785-1.576.012-2.373.259-.259.576-.328.771-.328.195 0 .39.002.558.01.179.009.421-.068.658.5.247.596.843 2.054.918 2.203.076.15.126.326.025.526-.1.2-.15.326-.299.501-.149.175-.314.39-.448.524-.15.15-.306.314-.131.614.175.3.777 1.284 1.666 2.077 1.144 1.019 2.108 1.335 2.408 1.485.3.15.476.126.65-.075.175-.201.752-.876.953-1.176.2-.3.401-.251.674-.15.274.1.174 1.096.349 2.096.175 1.001.076 1.476-.171 2.169z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className || 'w-5 h-5 fill-current'} viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .57.04.84.12V9.41a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-3.04-1.52z" />
  </svg>
);

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

            {/* Social Media Links with Hover Effects */}
            <div className="flex items-center gap-3 text-gray-600 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-gray-100 border border-transparent text-gray-600 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-gray-100 border border-transparent text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-gray-100 border border-transparent text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-xl bg-gray-100 border border-transparent text-gray-600 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
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
