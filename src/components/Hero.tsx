"use client";

import React from "react";

interface HeroProps {
  onOpenApply: () => void;
}

export default function Hero({ onOpenApply }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-brand-charcoal">
      
      {/* Background Image with elegant overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Dark overlay for rich contrast & readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-brand-charcoal/50 to-brand-cream/10 z-10" />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Floating abstract decorative frame */}
      <div className="absolute inset-8 border border-white/10 pointer-events-none z-20 hidden md:block" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center pt-20">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="h-px w-8 bg-brand-gold" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">
            A Transformative Slow-Living Experience
          </span>
          <span className="h-px w-8 bg-brand-gold" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-[#FAF8F5] max-w-4xl mx-auto drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Slow down enough <br className="hidden md:inline" />
          <span className="italic font-normal text-brand-gold">to hear yourself</span> again.<br />
          <span className="text-white">Challenge yourself enough</span> <br className="hidden md:inline" />
          to realize your potential.
        </h1>

        {/* Sub-headline / Core Philosophy */}
        <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          The Third Act Retreat is a deeply intentional, immersive experience designed to regulate your nervous system, awaken self-awareness, and shatter self-imposed limits. We combine restorative slowness with courageous identity challenges to help you step into your ultimate chapter.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold text-sm tracking-wider uppercase rounded-full shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/25 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Apply for the Next Cohort
          </button>
          
          <a
            href="#timetable"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors duration-300 py-3"
          >
            Explore the 6-Day Timetable
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Decorative torn paper bottom edge transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 z-25 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none" />
    </section>
  );
}
