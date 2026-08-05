'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { KatalogGridSection } from '@/components/KatalogGridSection';
import { TestDriveModal } from '@/components/TestDriveModal';

const heroImages = [
  '/images/katalog unit/hero.png',
  '/images/katalog unit/hero2.png',
  '/images/katalog unit/hero3.png',
];

export default function KatalogPage() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenTestDrive = (carId?: string) => {
    setSelectedCarId(carId);
    setTestDriveOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Section 1: Navbar & Hero Section */}
      <Navbar onOpenTestDrive={handleOpenTestDrive} />

      <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-900">
        {/* Background Images Crossfade Transition */}
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="KIA Hero Banner"
              fill
              className="w-full h-full object-contain object-center"
              priority
            />
          </div>
        ))}
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
