'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';

const StatsSection = dynamic(() => import('@/components/StatsSection').then(mod => mod.StatsSection), {
  loading: () => <div className="h-28 bg-[#090B10] animate-pulse" />
});
const Ev9SpecSection = dynamic(() => import('@/components/Ev9SpecSection').then(mod => mod.Ev9SpecSection));
const FeaturedUnitsSection = dynamic(() => import('@/components/FeaturedUnitsSection').then(mod => mod.FeaturedUnitsSection));
const TestDriveAdrenalineSection = dynamic(() => import('@/components/TestDriveAdrenalineSection').then(mod => mod.TestDriveAdrenalineSection));
const BengkelComingSoonSection = dynamic(() => import('@/components/BengkelComingSoonSection').then(mod => mod.BengkelComingSoonSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));
const TestDriveModal = dynamic(() => import('@/components/TestDriveModal').then(mod => mod.TestDriveModal), { ssr: false });

export default function Home() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);

  const handleOpenTestDrive = (carId?: string) => {
    setSelectedCarId(carId);
    setTestDriveOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* Section 1: Navbar & Hero */}
      <Navbar onOpenTestDrive={handleOpenTestDrive} />
      <HeroSection onOpenTestDrive={handleOpenTestDrive} />

      {/* Section 2: Stats Banner */}
      <StatsSection />

      {/* Section 3: KIA EV9 Specification Showcase */}
      <Ev9SpecSection />

      {/* Section 4: Unit Unggulan */}
      <FeaturedUnitsSection onOpenTestDrive={handleOpenTestDrive} />

      {/* Section 5: Experience the Adrenaline Test Drive CTA */}
      <TestDriveAdrenalineSection onOpenTestDrive={handleOpenTestDrive} />


      {/* Section 7: Layanan Bengkel Resmi KIA (Coming Soon) */}
      <BengkelComingSoonSection />

      {/* Footer */}
      <Footer onOpenTestDrive={handleOpenTestDrive} />

      {/* Modal */}
      <TestDriveModal
        isOpen={testDriveOpen}
        preselectedCarId={selectedCarId}
        onClose={() => setTestDriveOpen(false)}
      />
    </main>
  );
}



