"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Evolution from "@/components/Evolution";
import Framework from "@/components/Framework";
import Workshops from "@/components/Workshops";
import Timetable from "@/components/Timetable";
import ImpossibleDay from "@/components/ImpossibleDay";
import Team from "@/components/Team";
import Journaling from "@/components/Journaling";
import Agreements from "@/components/Agreements";
import ApplyModal from "@/components/ApplyModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const openApply = () => setIsApplyOpen(true);
  const closeApply = () => setIsApplyOpen(false);

  return (
    <>
      {/* Sticky header and navigation */}
      <Header onOpenApply={openApply} />

      {/* Main landing sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero banner */}
        <Hero onOpenApply={openApply} />
        
        {/* Section 2: Evolution block */}
        <Evolution />
        
        {/* Section 3: The 5 Pillars of Real Transformation */}
        <Framework />
        
        {/* Section 4: Curated Internal Architecture */}
        <Workshops />
        
        {/* Section 5: The Full Experiential 6-Day Timetable */}
        <Timetable />
        
        {/* Section 6: Unique Edge - The Impossible Day */}
        <ImpossibleDay />
        
        {/* Section 7: Transformational Guide Custodians */}
        <Team />
        
        {/* Section 8: Deep Reflection Journaling Prompts */}
        <Journaling />
        
        {/* Section 9: Sacred Retreat Culture & Agreements */}
        <Agreements />

      </main>

      {/* Section 10: Closing CTA and Footer */}
      <Footer onOpenApply={openApply} />

      {/* Pop-up Interactive Cohort Application Form */}
      <ApplyModal isOpen={isApplyOpen} onClose={closeApply} />
    </>
  );
}

