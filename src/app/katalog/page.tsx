'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { KatalogGridSection } from '@/components/KatalogGridSection';
import { TestDriveModal } from '@/components/TestDriveModal';

const heroSlides = [
  {
    image: '/images/katalog unit/hero.png',
    subtitle: 'World Class Design.',
    title: 'Drive now',
  },
  {
    image: '/images/katalog unit/hero2.png',
    subtitle: 'World Class Design.',
    title: 'Drive now',
  },
  {
    image: '/images/katalog unit/hero3.png',
    subtitle: 'World Class Design.',
    title: 'Drive now',
  },
  {
    image: '/images/katalog unit/kia all new carens.png',
    subtitle: 'World Class Design.',
    title: 'Drive now',
  },
];

export default function KatalogPage() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenTestDrive = (carId?: string) => {
    setSelectedCarId(carId);
    setTestDriveOpen(true);
  };

  const handleExploreMore = () => {
    const element = document.getElementById('katalog-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Section 1: Navbar & Hero Section */}
      <Navbar onOpenTestDrive={handleOpenTestDrive} />

      <section className="relative w-full h-[65vh] sm:h-[78vh] lg:h-[88vh] flex flex-col justify-end items-center overflow-hidden bg-neutral-900 pb-16 sm:pb-20 select-none">
        {/* Background Images Crossfade Transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt="KIA Hero Banner"
              fill
              unoptimized
              className="w-full h-full object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Soft Dark Vignette Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

        {/* Centered Overlay Content (Subtitle, Title, Action Button) */}
        <div className="relative z-10 text-center px-4 max-w-xl mx-auto flex flex-col items-center justify-center space-y-2.5 mb-2 sm:mb-4">
          <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide drop-shadow-sm">
            {heroSlides[currentImageIndex].subtitle}
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-md pb-2">
            {heroSlides[currentImageIndex].title}
          </h1>

          <div className="pt-2">
            <button
              onClick={handleExploreMore}
              className="bg-white hover:bg-neutral-100 text-gray-900 font-semibold px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer rounded-none"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* Bottom Slide Dash Indicators */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-0.5 sm:h-1 transition-all duration-300 cursor-pointer ${
                index === currentImageIndex
                  ? 'w-8 sm:w-12 bg-white'
                  : 'w-5 sm:w-7 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Switch to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section 2: Katalog Unit Filter Sidebar & Grid with API Integration */}
      <KatalogGridSection onOpenTestDrive={handleOpenTestDrive} />

      {/* Footer */}
      <Footer onOpenTestDrive={handleOpenTestDrive} />

      {/* Test Drive Modal */}
      <TestDriveModal
        isOpen={testDriveOpen}
        preselectedCarId={selectedCarId}
        onClose={() => setTestDriveOpen(false)}
      />
    </main>
  );
}
