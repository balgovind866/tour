"use client";

import React from "react";

export default function Evolution() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">The Evolution</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green font-bold tracking-tight mt-2 leading-tight">
            The Cost of Overstimulation <br />is Your True Voice
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Columns */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            <div className="border-l-2 border-brand-green/10 pl-6 md:pl-8">
              <h3 className="text-lg md:text-xl font-serif text-brand-green font-semibold mb-4">
                The Noise of Modern Life
              </h3>
              <p className="text-brand-slate text-sm md:text-base leading-relaxed">
                We live in an age of constant hyper-vigilance. Your attention is fragmented, your nervous system is continuously overstimulated, and the constant digital noise has drowned out your internal guidance. Disconnection from yourself isn't just exhaustion—it’s a loss of clarity, identity, and life direction.
              </p>
            </div>

            <div className="border-l-2 border-brand-gold/20 pl-6 md:pl-8">
              <h3 className="text-lg md:text-xl font-serif text-brand-green font-semibold mb-4">
                The Curated Container
              </h3>
              <p className="text-brand-slate text-sm md:text-base leading-relaxed">
                True transformation doesn’t come from forced intensity or rigid self-optimization. It emerges naturally when you create space to decompress, allow the body to open emotionally, and safely challenge your deepest self-imposed limits. The Third Act Retreat provides that exact curated container.
              </p>
            </div>
          </div>

          {/* Visual Showcase (Inspired by AltaiTour mockup) */}
          <div className="relative order-1 lg:order-2">
            
            {/* Background earthy shape frame */}
            <div className="absolute inset-4 -right-2 -bottom-2 bg-brand-light-green rounded-2xl -z-10" />

            {/* Main Image with torn border framing */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-green/5 max-w-full">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=850&q=80"
                alt="Serene mountain landscape reflecting on calm water"
                className="w-full h-auto object-cover max-h-[480px] hover:scale-102 transition-transform duration-700"
              />
              
              {/* Subtle elegant caption tag */}
              <div className="absolute bottom-4 left-4 bg-brand-green/90 backdrop-blur-sm px-4 py-2 rounded text-[10px] uppercase tracking-widest text-[#FAF8F5]">
                Space to hear yourself again
              </div>
            </div>

            {/* Tiny accent badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-charcoal text-xs font-serif italic shadow-md">
              Act 3
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
