"use client";

import React from "react";

export default function Team() {
  const team = [
    {
      name: "Transformational Life Coach",
      role: "You / Chief Facilitator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=700&q=80",
      bio: "Focuses on identity engineering, self-belief systems, and concrete daily behavioral structures to transition you into your ultimate chapter.",
      rating: 5,
    },
    {
      name: "The Vipassana Teacher",
      role: "The Monk",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=700&q=80",
      bio: "Preserves the space for noble silence, vipassana stillness, breathing discipline, and absolute psychological detachment from cognitive noise.",
      rating: 5,
    },
    {
      name: "The Somatic Facilit facilitator",
      role: "Somatic Coach",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=700&q=80",
      bio: "Specializes in nervous system down-regulation, kinetic release practices, cold-plunge conditioning, and biological memory healing.",
      rating: 5,
    },
    {
      name: "The Psychological Guide",
      role: "Emotional Health Coach",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=700&q=80",
      bio: "Coordinates heart mapping, vulnerability process, fear circles, and secures deep interpersonal container safety.",
      rating: 5,
    },
    {
      name: "Creative Facilitators",
      role: "Live Artists & Sound Healers",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&h=700&q=80",
      bio: "Guides you through acoustic sound meditations, movement expression sprints, and coordinates your Impossible Day showcase.",
      rating: 5,
    },
  ];

  return (
    <section id="guides" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">The Custodians</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green font-bold tracking-tight mt-2 leading-tight">
            The Custodians of Your Transformation
          </h2>
          <p className="text-brand-slate text-sm mt-3">
            Highly trained specialists holding safe, intentional space for your transition.
          </p>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Guides Grid (Inspired by Our Guide Team from the Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {team.map((guide, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl overflow-hidden border border-brand-green/5 shadow-md flex flex-col group hover:shadow-xl hover:border-brand-gold/20 transition-all duration-300"
            >
              {/* Profile Image with subtle review stars overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Gold Rating Badges (Inspired by the star reviews in AltaiTour mockup) */}
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1 border border-brand-green/5">
                  <span className="text-[10px] text-brand-green font-bold uppercase">Expert</span>
                  <div className="flex">
                    {[...Array(guide.rating)].map((_, i) => (
                      <span key={i} className="text-[9px] text-brand-gold">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block mb-1.5">
                    {guide.role}
                  </span>
                  <h4 className="font-serif font-semibold text-brand-green text-base mb-3 group-hover:text-brand-gold transition-colors">
                    {guide.name}
                  </h4>
                  <p className="text-brand-slate text-[11px] leading-relaxed mb-4">
                    {guide.bio}
                  </p>
                </div>

                {/* Social Connect placeholders (Similar to the icons in the Guide Team mockup) */}
                <div className="flex items-center gap-3 pt-3 border-t border-brand-green/5 text-brand-slate hover:text-brand-green transition-colors">
                  <span className="text-[9px] uppercase tracking-widest font-semibold">Integrity Verified</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-brand-gold ml-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
