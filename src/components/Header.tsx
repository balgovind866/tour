"use client";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  onOpenApply: () => void;
}

export default function Header({ onOpenApply }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Experience", href: "#experience" },
    { label: "The Framework", href: "#framework" },
    { label: "Complete Timetable", href: "#timetable" },
    { label: "Meet the Guides", href: "#guides" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-brand-green/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-widest text-brand-green">
              THE THIRD ACT
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold -mt-1 block font-medium">
              R E T R E A T
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-brand-slate hover:text-brand-green transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Call / CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={onOpenApply}
              className="px-6 py-2.5 border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-green hover:bg-brand-green/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#FAF8F5] transition-all duration-500 lg:hidden flex flex-col justify-center px-8 md:px-16 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-brand-green hover:text-brand-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenApply();
            }}
            className="mt-8 px-8 py-4 bg-brand-green hover:bg-brand-green/90 text-white rounded-full text-sm font-semibold tracking-widest uppercase shadow-lg shadow-brand-green/10 self-center transition-all duration-300"
          >
            Apply Now
          </button>
        </nav>
      </div>
    </>
  );
}
