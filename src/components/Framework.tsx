"use client";

import React, { useState } from "react";

export default function Framework() {
  const [activePillar, setActivePillar] = useState<number | null>(0);

  const pillars = [
    {
      id: 1,
      name: "RESET",
      eyebrow: "Pillar One",
      concept: "Slow down the nervous system, drop daily armor, step away from digital overstimulation, and clear your mental field.",
      color: "bg-[#1E3B2E]",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "REGULATE",
      eyebrow: "Pillar Two",
      concept: "Shift your physiology out of chronic flight-or-flight using intentional breathwork, somatic exploration, meditation, and cold exposure.",
      color: "bg-[#274637]",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "REALISE",
      eyebrow: "Pillar Three",
      concept: "Awaken deep self-awareness through psychology, philosophical discourses, emotional mapping, and structured circles.",
      color: "bg-[#335645]",
      image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "PROVE",
      eyebrow: "Pillar Four",
      concept: "Step past your self-imposed limits in real time with our highly intentional Impossible Day challenge.",
      color: "bg-[#3F6653]",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "INTEGRATE",
      eyebrow: "Pillar Five",
      concept: "Securely bridge your internal breakthroughs back into everyday routines, habit structures, and relationships.",
      color: "bg-[#4B7662]",
      image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="framework" className="py-24 md:py-32 bg-brand-green text-white relative torn-edge-bottom torn-edge-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Our Core Framework</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FAF8F5] font-bold tracking-tight mt-2 leading-tight">
            The 5 Pillars of Real Transformation
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mt-6" />
        </div>

        {/* Desktop Interactive Row/Cards (Accordions or Tabs) */}
        <div className="hidden lg:flex gap-4 h-[420px] items-stretch">
          {pillars.map((pillar, idx) => {
            const isActive = activePillar === idx;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 flex flex-col justify-end p-8 ${
                  isActive ? "flex-[2.5]" : "flex-[0.8]"
                } border border-white/5 shadow-2xl group`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 scale-102 group-hover:scale-105"
                  style={{ backgroundImage: `url('${pillar.image}')` }}
                />
                
                {/* Colored Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-60 group-hover:opacity-50 ${pillar.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold border border-brand-gold/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {pillar.eyebrow}
                    </span>
                    <span className="font-serif text-2xl font-bold opacity-30 text-white">0{pillar.id}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-widest uppercase mb-3">
                      {pillar.name}
                    </h3>
                    
                    {isActive ? (
                      <p className="text-sm text-white/90 leading-relaxed max-w-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {pillar.concept}
                      </p>
                    ) : (
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5 mt-2">
                        Reveal Pillar
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Listing (Clean Responsive Grid) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="relative rounded-xl overflow-hidden p-6 border border-white/5 shadow-lg flex flex-col justify-between min-h-[220px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{ backgroundImage: `url('${pillar.image}')` }}
              />
              <div className={`absolute inset-0 opacity-80 ${pillar.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="relative z-10 flex justify-between items-start mb-4">
                <span className="text-[9px] uppercase tracking-widest font-semibold text-brand-gold border border-brand-gold/30 px-2 py-0.5 rounded-full">
                  {pillar.eyebrow}
                </span>
                <span className="font-serif text-lg font-bold opacity-40">0{pillar.id}</span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold tracking-widest uppercase mb-2">
                  {pillar.name}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  {pillar.concept}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
