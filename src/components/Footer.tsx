'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    defaultIcon: '/images/medsos/default/icon 1.svg',
    hoverIcon: '/images/medsos/hover/icon 1.svg',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    defaultIcon: '/images/medsos/default/icon 2.svg',
    hoverIcon: '/images/medsos/hover/icon 2.svg',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6281325456655',
    defaultIcon: '/images/medsos/default/icon 3.svg',
    hoverIcon: '/images/medsos/hover/icon 3.svg',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com',
    defaultIcon: '/images/medsos/default/icon 4.svg',
    hoverIcon: '/images/medsos/hover/icon 4.svg',
  },
];

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
                alt="Masati Semarang Logo"
                width={140}
                height={40}
                style={{ width: 'auto', height: '40px' }}
                className="h-10 w-auto object-contain"
              />
              <span className="font-semibold text-xl tracking-tight text-black uppercase">
                MASATI SEMARANG
              </span>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Dealer resmi KIA melayani penjualan, perawatan, dan suku cadang dengan standar global.
            </p>

            {/* Social Media Links from /images/medsos/ default and hover folders */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="group relative w-10 h-10 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                >
                  {/* Default State Icon */}
                  <Image
                    src={item.defaultIcon}
                    alt={`${item.name} Icon`}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {/* Hover State Icon */}
                  <Image
                    src={item.hoverIcon}
                    alt={`${item.name} Hover Icon`}
                    width={40}
                    height={40}
                    unoptimized
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
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
              <a
                href="https://maps.app.goo.gl/LtEd1xDa1nDk8CQz5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-black transition-colors group"
              >
                <MapPin className="w-5 h-5 text-gray-700 group-hover:text-black shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Jl. Dr. Cipto No. 136, Sarirejo, Semarang Timur, Kota Semarang 50124
                </span>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-700 shrink-0" />
                <span>0813-2545-6655</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© 2024 Masati Semarang. All rights reserved.</p>
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
