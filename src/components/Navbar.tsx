'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTestDrive }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Katalog Unit', href: '/katalog' },
    { name: 'Layanan Bengkel', href: '/bengkel' },
    { name: 'Kontak & Tentang', href: '/kontak' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-14 w-auto max-w-[260px] flex items-center">
            <Image
              src="/images/logo/logo.png"
              alt="Masati Semarang Logo"
              width={220}
              height={60}
              style={{ width: 'auto', height: '56px' }}
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <span className="font-semibold text-2xl tracking-tight text-black uppercase">
            MASATI SEMARANG
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors group ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-6px] left-0 right-0 h-[2px] bg-black rounded-full transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/kontak"
            className="bg-black hover:bg-neutral-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg shadow-sm transition-all active:scale-95 text-center inline-block"
          >
            Kontak
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base ${
                  isActive
                    ? 'font-bold text-black border-l-4 border-black pl-2'
                    : 'text-gray-600 pl-3'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-black text-white font-medium py-3 rounded-lg text-center"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};


