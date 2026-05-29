"use client";

import React from "react";

export default function ImpossibleDay() {
  const steps = [
    { name: "FEAR", desc: "The immediate gut reaction of 'I cannot do this.' Observing resistance." },
    { name: "LEARNING", desc: "Highly structured sprint demystifying the core patterns of the skill." },
    { name: "PRACTICE", desc: "Supported execution in safe environments, moving through discomfort." },
    { name: "PUBLIC SHOWCASE", desc: "Performing or presenting for the cohort. Real-time identity expansion." },
    { name: "REFLECTION", desc: "Securing the proof that growth happens faster than you ever imagined." },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-green text-white relative overflow-hidden torn-edge-bottom torn-edge-top">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Copy and Quote */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Our Unique Edge</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#FAF8F5] font-bold tracking-tight mt-2 leading-tight">
                Proof Over Pure Theory: <br />The Impossible Day
              </h2>
              <div className="h-0.5 w-16 bg-brand-gold mt-6" />
            </div>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Most wellness retreats give you insights that fade within 48 hours of your return home. The Third Act Retreat gives you undeniable proof. On Day 5, we launch a rotating challenge (music, painting, storytelling, dance, etc.). The goal is not skill mastery, but radical identity expansion.
            </p>

            {/* Blockquote Card */}
            <div className="relative border-l-4 border-brand-gold pl-6 py-2 bg-white/5 rounded-r-xl pr-6">
              <span className="font-serif text-5xl text-brand-gold/25 absolute -top-4 left-2 pointer-events-none">“</span>
              <p className="font-serif italic text-brand-gold text-lg md:text-xl leading-relaxed relative z-10">
                This is not about talent. This is about proving to yourself that growth is possible faster than you think.
              </p>
            </div>
          </div>

          {/* Right Side: Interactive Flow Architecture */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-6">
              The Identity Challenge Framework
            </h3>

            {/* Flow Cards */}
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={step.name} 
                  className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/20 rounded-xl p-5 md:p-6 flex items-start gap-5 transition-all duration-300 group"
                >
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-serif font-bold text-sm border border-brand-gold/20 shrink-0 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300">
                    0{idx + 1}
                  </div>
                  
                  {/* Text Details */}
                  <div>
                    <h4 className="font-serif text-brand-gold font-bold tracking-widest text-sm md:text-base mb-1.5 uppercase">
                      {step.name}
                    </h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Horizontal flow connector preview (purely design) */}
            <div className="hidden md:flex items-center justify-between text-[10px] tracking-widest text-white/30 font-semibold px-4 pt-4 uppercase">
              <span>Nervous Resistance</span>
              <span>→</span>
              <span>Supported Sprints</span>
              <span>→</span>
              <span>Radical Breakthrough</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
