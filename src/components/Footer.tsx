"use client";

import React from "react";

interface FooterProps {
  onOpenApply: () => void;
}

export default function Footer({ onOpenApply }: FooterProps) {
  return (
    <footer className="relative bg-brand-charcoal text-white overflow-hidden mt-auto">
      
      {/* Background Image: Wooden dock leading into calm mountain lake at dusk */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-102"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      
      {/* Elegant dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal z-10" />

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12">
        
        {/* Centered Closing CTA */}
        <div className="text-center max-w-3xl mx-auto mb-20 border border-white/5 bg-brand-charcoal/60 backdrop-blur-md p-10 md:p-14 rounded-2xl shadow-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-4">
            Your Invitation
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#FAF8F5] font-bold tracking-tight mb-6 leading-tight">
            Are You Ready to Step Into <br />Your Next Chapter?
          </h2>
          <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            The Third Act Retreat is evolving into a premium transformational experience that combines nervous system regulation, emotional openness, nature immersion, spiritual depth, creative expression, and identity expansion. Space is intentionally constrained to protect relational safety.
          </p>
          <button
            onClick={onOpenApply}
            className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-charcoal font-semibold text-xs tracking-wider uppercase rounded-full shadow-lg shadow-brand-gold/10 hover:shadow-brand-gold/25 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Apply for the Next Cohort
          </button>
        </div>

        {/* Footer Link Architecture Grid (Inspired by AltaiTour mockup) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-white/5 text-sm">
          
          {/* About us column */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-brand-gold uppercase tracking-wider text-xs">
              The Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li><a href="#experience" className="hover:text-[#FAF8F5] transition-colors">Our Ethos</a></li>
              <li><a href="#framework" className="hover:text-[#FAF8F5] transition-colors">The 5 Pillars</a></li>
              <li><a href="#workshops" className="hover:text-[#FAF8F5] transition-colors">Internal Architecture</a></li>
              <li><a href="#guides" className="hover:text-[#FAF8F5] transition-colors">Transformational Guides</a></li>
            </ul>
          </div>

          {/* Pricing / Booking Column */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-brand-gold uppercase tracking-wider text-xs">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-xs text-white/50">
              <li><button onClick={onOpenApply} className="hover:text-[#FAF8F5] transition-colors text-left">Cohort Calendar</button></li>
              <li><button onClick={onOpenApply} className="hover:text-[#FAF8F5] transition-colors text-left">Application Form</button></li>
              <li><button onClick={onOpenApply} className="hover:text-[#FAF8F5] transition-colors text-left">Relational Safety</button></li>
              <li><button onClick={onOpenApply} className="hover:text-[#FAF8F5] transition-colors text-left">Investment</button></li>
            </ul>
          </div>

          {/* Contacts Column (Directly inspired by AltaiTour contacts footer) */}
          <div className="space-y-4 col-span-2 md:col-span-2 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-inner">
            <h4 className="font-serif font-bold text-[#FAF8F5] uppercase tracking-wider text-xs">
              Contact & Sanctuary
            </h4>
            <div className="space-y-2.5 text-xs text-white/60">
              <p className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">Location:</span> Redwood Wilderness Highlands, CA
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">Email:</span> sanctuary@thethirdactretreat.com
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-gold font-bold">Inquiries:</span> +1 (800) 555-0199
              </p>
            </div>
            <div className="flex gap-4 pt-4 border-t border-white/5 mt-4 text-[10px] text-white/30 uppercase tracking-widest">
              <span>Verified Sanctuary</span>
              <span>•</span>
              <span>100% Phone Free</span>
            </div>
          </div>

        </div>

        {/* Copyright Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} The Third Act Retreat. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-[#FAF8F5] transition-colors">Sacred Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
