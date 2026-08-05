'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { Ev9SpecSection } from '@/components/Ev9SpecSection';
import { FeaturedUnitsSection } from '@/components/FeaturedUnitsSection';
import { TestDriveAdrenalineSection } from '@/components/TestDriveAdrenalineSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BengkelComingSoonSection } from '@/components/BengkelComingSoonSection';
import { Footer } from '@/components/Footer';
import { TestDriveModal } from '@/components/TestDriveModal';

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

      {/* Section 6: Apa Kata Klien Kami (Testimonials) */}
      <TestimonialsSection />

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


