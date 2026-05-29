"use client";

import React, { useState } from "react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    occupation: "",
    motivation: "",
    somaticExperience: "none",
    agreeToDetox: false,
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      // Reset form
      setFormData({
        name: "",
        email: "",
        age: "",
        occupation: "",
        motivation: "",
        somaticExperience: "none",
        agreeToDetox: false,
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-brand-green/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Decorative banner */}
        <div className="h-3 bg-brand-green w-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-brand-slate hover:text-brand-green hover:bg-brand-green/5 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {!submitted ? (
            <>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Cohort Application</span>
                <h3 className="text-3xl font-serif text-brand-green mt-1">Begin Your Third Act</h3>
                <p className="text-brand-slate text-sm mt-2">
                  Space is strictly limited to 12 participants per cohort to preserve deep relational safety and attention. Please share your intentions honestly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-brand-green/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-brand-slate/40 text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-brand-green/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-brand-slate/40 text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">Age</label>
                    <input
                      type="number"
                      required
                      placeholder="e.g., 42"
                      className="w-full px-4 py-3 bg-white border border-brand-green/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-brand-slate/40 text-sm"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">Occupation / Life Path</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Creative Director, Engineer"
                      className="w-full px-4 py-3 bg-white border border-brand-green/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-brand-slate/40 text-sm"
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-green mb-2">
                    What feels heavy in your life right now? What are you looking to reset?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share a brief overview of your current transition and why you seek to decompress..."
                    className="w-full px-4 py-3 bg-white border border-brand-green/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-brand-charcoal placeholder-brand-slate/40 text-sm resize-none"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="detoxCheck"
                      required
                      className="mt-1 h-4 w-4 rounded border-brand-green/20 text-brand-green focus:ring-brand-gold"
                      checked={formData.agreeToDetox}
                      onChange={(e) => setFormData({ ...formData, agreeToDetox: e.target.checked })}
                    />
                    <label htmlFor="detoxCheck" className="text-xs text-brand-slate leading-relaxed">
                      I agree to the <strong className="text-brand-green">Absolute Digital Detox</strong> agreement. I understand that phones are not permitted in shared container spaces.
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-brand-green/5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3.5 border border-brand-green/10 text-brand-green rounded-lg text-sm font-medium hover:bg-brand-green/5 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3.5 bg-brand-green hover:bg-brand-green/90 text-white rounded-lg text-sm font-semibold tracking-wider hover:shadow-lg transition-all duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-brand-green">Application Received</h3>
              <p className="text-brand-slate text-sm mt-3 max-w-sm">
                Your voice has been recorded. Our transformational guides will review your intention and reach out within 48 hours to schedule your introductory call.
              </p>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mt-8 animate-pulse">
                Holding space for you...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
