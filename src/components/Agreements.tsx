"use client";

import React from "react";

export default function Agreements() {
  const agreements = [
    {
      title: "Absolute Digital Detox",
      concept: "No phones are permitted in the common containers.",
      desc: "All cellular devices are collected upon arrival and safely stored. This breaks active dopamine-seeking loops and forces you to face silent presence directly.",
    },
    {
      title: "Confidentiality",
      concept: "Total protection of emotional safety and shared expressions.",
      desc: "What is spoken in circles remains inside circles. This creates a secure sandbox where you can speak deep, unpolished truths without fear of external judgment.",
    },
    {
      title: "No Fixing Others",
      concept: "We hold presence; we do not correct or pathologize others.",
      desc: "We do not offer advice, suggest solutions, or attempt to resolve someone else's grief or pain. We witness, hold, and respect their natural emotional process.",
    },
    {
      title: "Deep Respect for Silence",
      concept: "Allowing space for internal hearing to take root.",
      desc: "Silence is not empty; it is highly active. We observe designated hours of silence, including morning rituals and walks, to let your internal voice rise.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-green text-white relative torn-edge-bottom torn-edge-top">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Retreat Culture</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FAF8F5] font-bold tracking-tight mt-2 leading-tight">
            Retreat Culture & Sacred Agreements
          </h2>
          <p className="text-white/80 text-sm mt-3">
            To step into deep transformation, we build our container on immutable pillars of trust and safety.
          </p>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Agreements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {agreements.map((a, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/5 hover:border-brand-gold/25 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                {/* Gold Circle Checkmark */}
                <div className="w-8 h-8 rounded-full border-2 border-brand-gold/45 text-brand-gold flex items-center justify-center shrink-0 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                
                <h3 className="font-serif font-bold text-brand-gold text-lg md:text-xl uppercase tracking-wider">
                  {a.title}
                </h3>
              </div>

              <div className="space-y-3 pl-12">
                <p className="font-serif italic text-[#FAF8F5] text-sm md:text-base leading-relaxed">
                  "{a.concept}"
                </p>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Disclaimer */}
        <p className="text-center text-white/30 text-[10px] tracking-widest uppercase mt-16 max-w-lg mx-auto leading-relaxed">
          * These agreements are non-negotiable. Breaking these containers compromises the psychological safety of the collective unit.
        </p>

      </div>
    </section>
  );
}
