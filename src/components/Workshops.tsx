"use client";

import React from "react";

export default function Workshops() {
  const workshops = [
    { name: "Slowing Down Workshop", desc: "Interrupting immediate reactive loops and resetting pacing." },
    { name: "Identity & Limiting Beliefs", desc: "Mapping current narratives and boundaries you've outgrown." },
    { name: "Fear & Avoidance", desc: "Understanding the avoidance triggers holding back progress." },
    { name: "Dopamine & Distraction", desc: "Recalibrating high-stimulation dependencies." },
    { name: "Life Audit Workshop", desc: "An honest accounting of actions, energy leaks, and patterns." },
    { name: "Future Self Workshop", desc: "Crystallizing the ultimate character of your next chapter." },
    { name: "Somatic Release", desc: "Safely processing stored stress out of physical tissues." },
    { name: "Emotional Mapping", desc: "Locating and naming repressed or hidden emotional currents." },
    { name: "Integration Workshop", desc: "Crafting the structures needed to sustain growth back home." },
  ];

  const circles = [
    { title: "One Truth Circle", duration: "Day 1 Opening" },
    { title: "Masks Circle", duration: "Day 2 Somatic" },
    { title: "Fear Circle", duration: "Day 3 Vulnerability" },
    { title: "Appreciation Circle", duration: "Day 4 Support" },
    { title: "Story of My Life in 5 Min", duration: "Day 4 Connection" },
    { title: "Silent Eye Contact Exercise", duration: "Day 5 Depth" },
    { title: "What I Need Right Now", duration: "Day 6 Closing" },
  ];

  return (
    <section id="workshops" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Internal Architecture</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green font-bold tracking-tight mt-2 leading-tight">
            Curated Internal Architecture: <br />Masterclasses & Spaces
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Masterclasses (9 Workshops) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green font-serif italic text-xs font-semibold">
                W
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-green">
                The Masterclasses (Workshops)
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {workshops.map((w, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl border border-brand-green/5 shadow-sm hover:shadow-md hover:border-brand-gold/20 transition-all duration-300 group"
                >
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block mb-2">
                    Module 0{idx + 1}
                  </span>
                  <h4 className="font-serif font-semibold text-brand-green group-hover:text-brand-gold transition-colors text-base md:text-lg mb-2">
                    {w.name}
                  </h4>
                  <p className="text-brand-slate text-xs leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Shared Circles (7 Spaces) */}
          <div className="lg:col-span-5 bg-brand-light-green/40 border border-brand-green/5 p-8 md:p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-serif italic text-xs font-semibold">
                C
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-green">
                Sacred Shared Circles
              </h3>
            </div>
            
            <p className="text-brand-slate text-xs leading-relaxed mb-8">
              True safety and healing thrive in relational mirrors. Our structural spaces are designed to bypass polite small talk and drop directly into profound human connection.
            </p>

            <div className="space-y-4">
              {circles.map((c, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between py-3.5 border-b border-brand-green/10 group last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif italic text-sm text-brand-gold font-semibold group-hover:scale-110 transition-transform">
                      {idx + 1}.
                    </span>
                    <span className="font-serif font-semibold text-brand-green group-hover:translate-x-1 transition-transform text-sm md:text-base">
                      {c.title}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-brand-slate bg-white px-3 py-1 rounded-full border border-brand-green/5">
                    {c.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
