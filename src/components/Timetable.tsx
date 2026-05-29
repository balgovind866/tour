"use client";

import React, { useState } from "react";

export default function Timetable() {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      num: 1,
      title: "Arrival & Deceleration",
      focus: "Safety and slowing down. Settling into the space, unplugging from noise, establishing group trust.",
      schedule: [
        { time: "11:00 AM – 1:00 PM", task: "Arrival & settling in", desc: "Arrive at the sanctuary, settle into your premium timber lodge, and unplug from all devices." },
        { time: "1:00 PM – 2:00 PM", task: "Slow shared lunch", desc: "An organic, farm-to-table lunch crafted by our somatic nutrition team." },
        { time: "2:00 PM – 4:00 PM", task: "Rest / decompression", desc: "Unstructured space to allow your nervous system to begin decelerating." },
        { time: "4:00 PM – 5:30 PM", task: "Opening Circle + Slowing Down", desc: "Align intentions, establish absolute group confidentiality, and run our initial deceleration workshop." },
        { time: "5:30 PM – 6:30 PM", task: "Sunset walk", desc: "A silent walk through our surrounding redwoods during the golden hour." },
        { time: "7:00 PM – 8:00 PM", task: "Mindful dinner", desc: "Gathered in silence to cultivate taste, appreciation, and direct presence." },
        { time: "8:15 PM – 9:15 PM", task: "Gratitude circle + Card game", desc: "Warm connections using curated reflective card prompts." },
      ],
    },
    {
      num: 2,
      title: "Body & Presence",
      focus: "Somatic regulation. Shifting from conceptual thoughts into physical safety and releasing tension.",
      schedule: [
        { time: "7:00 AM – 8:00 AM", task: "Silent morning ritual", desc: "Preserving pure silence, drinking herbal infusion teas, and setting mental space." },
        { time: "8:00 AM – 9:30 AM", task: "Movement, yoga & breathwork", desc: "Re-anchoring into your biological shell, opening blocked breathing patterns." },
        { time: "11:00 AM – 1:00 PM", task: "Cold plunge experience", desc: "Guided nervous system down-regulation inside our pristine wilderness plunge pools." },
        { time: "2:30 PM – 4:00 PM", task: "Reflection & free time", desc: "Reflecting in nature, writing in your somatic journal." },
        { time: "4:00 PM – 5:30 PM", task: "Somatic release workshop", desc: "A deep masterclass focused on shaking out somatic blocks and chronic tension." },
        { time: "8:15 PM – 9:15 PM", task: "Reflection circle", desc: "Checking in as a collective unit, processing somatic releases together." },
      ],
    },
    {
      num: 3,
      title: "Nature Immersion",
      focus: "Spaciousness & Silence. Deep integration with nature, cleansing mental fields, and widening perspective.",
      schedule: [
        { time: "7:00 AM – 8:00 AM", task: "Gentle morning + tea", desc: "Gently waking up, tea ceremony, preparing for the day." },
        { time: "9:00 AM – 5:00 PM", task: "Full nature immersion day", desc: "A curated wilderness trek deep into surrounding peaks. Preserving periods of noble silence." },
        { time: "8:30 PM – 10:00 PM", task: "Movie night", desc: "Gathering for an inspiring film on absolute resilience and slow living." },
      ],
    },
    {
      num: 4,
      title: "Opening the Heart",
      focus: "Emotional openness and self-awareness. Softening cognitive barriers, leaning into deep vulnerability.",
      schedule: [
        { time: "7:00 AM – 8:00 AM", task: "Vipassana meditation", desc: "Observing thoughts as ripples, learning the art of absolute non-reaction." },
        { time: "8:00 AM – 9:00 AM", task: "Partner yoga + breathwork", desc: "Building relational trust and shared field regulation." },
        { time: "10:30 AM – 12:00 PM", task: "Emotional awareness workshop", desc: "Locating and mapping underlying anger, grief, or fear trapped in cognitive loops." },
        { time: "2:00 PM – 3:30 PM", task: "Sound healing", desc: "Acoustic gong and crystal bowl meditation to dissolve stubborn defenses." },
        { time: "4:00 PM – 5:30 PM", task: "Deep sharing circle", desc: "Stepping into vulnerable narratives, being heard without corrections." },
        { time: "6:00 PM – 8:00 PM", task: "Cacao ceremony + kirtan", desc: "A sensory heart-opening ritual followed by acoustic musical liberation." },
      ],
    },
    {
      num: 5,
      title: "Impossible Day",
      focus: "Identity challenge and transformation. Overcoming resistance, breaking personal barriers, realizing actual capacity.",
      schedule: [
        { time: "7:00 AM – 8:00 AM", task: "Meditation + silence", desc: "Centering yourself, storing physical and spiritual energy." },
        { time: "9:30 AM – 11:00 AM", task: "Identity & potential workshop", desc: "Reframing fear as adrenaline, preparation for your personal challenge." },
        { time: "11:30 AM", task: "Impossible Day reveal", desc: "Unveiling your specific rotating creative sprint task (performance, art, poetry)." },
        { time: "1:00 PM – 5:00 PM", task: "Learning sprint + practice", desc: "Intense, supportive, structured sprint to master the absolute basics." },
        { time: "5:00 PM – 7:00 PM", task: "Performance / showcase", desc: "Sharing your expression openly in front of your cohort. Radically proving what is possible." },
        { time: "8:30 PM – 10:00 PM", task: "Integration circle", desc: "Reflecting on the psychological breakthroughs triggered by overcoming the impossible." },
      ],
    },
    {
      num: 6,
      title: "Integration & Closure",
      focus: "Integration and grounded closure. Setting down an actionable protocol for the life you return to.",
      schedule: [
        { time: "7:00 AM – 8:00 AM", task: "Meditation + breathwork", desc: "Calming the nervous system, securing the week's insights." },
        { time: "9:30 AM – 11:00 AM", task: "Integration workshop", desc: "Translating retreat realizations into a custom, actionable daily protocol." },
        { time: "11:30 AM – 1:00 PM", task: "Closing ceremony", desc: "The final circle, expressing gratitude, and securing our lifelong bond." },
        { time: "1:00 PM – 2:00 PM", task: "Final lunch", desc: "A joyful celebratory feast before departing back into your new world." },
      ],
    },
  ];

  return (
    <section id="timetable" className="py-24 md:py-32 bg-brand-light-green/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Chronological Arc</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green font-bold tracking-tight mt-2 leading-tight">
            The Full Experiential Journey
          </h2>
          <p className="text-brand-slate text-sm mt-3">
            A carefully calculated somatic and emotional sequence. Six days designed to reset, explore, and expand.
          </p>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Interactive Day Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          {days.map((day, idx) => {
            const isActive = activeDay === idx;
            return (
              <button
                key={day.num}
                onClick={() => setActiveDay(idx)}
                className={`px-5 py-3 md:px-7 md:py-4 rounded-xl text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                  isActive
                    ? "bg-brand-green text-white border-brand-green shadow-lg"
                    : "bg-white text-brand-slate border-brand-green/10 hover:border-brand-green/30 hover:bg-brand-light-green/30"
                }`}
              >
                Day {day.num}
              </button>
            );
          })}
        </div>

        {/* Selected Day Content */}
        <div className="bg-white rounded-2xl border border-brand-green/5 shadow-xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Day Highlight Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-brand-green/10 pb-8 mb-10">
            
            {/* Title & Eyebrow */}
            <div className="lg:col-span-6">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full">
                Phase 0{days[activeDay].num}
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-brand-green mt-3">
                Day {days[activeDay].num}: {days[activeDay].title}
              </h3>
            </div>
            
            {/* Emotional Arc / Focus Box */}
            <div className="lg:col-span-6 bg-brand-light-green/45 p-6 rounded-xl border border-brand-green/5">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-green/70 block mb-2">
                Emotional Arc & Depth
              </span>
              <p className="font-serif italic text-brand-green text-sm md:text-base leading-relaxed">
                "{days[activeDay].focus}"
              </p>
            </div>

          </div>

          {/* Timeline Schedule */}
          <div className="relative border-l-2 border-brand-green/10 pl-6 md:pl-10 space-y-10 py-2">
            
            {days[activeDay].schedule.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Visual marker dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF8F5] border-2 border-brand-gold group-hover:bg-brand-green group-hover:border-brand-green transition-colors duration-300" />
                
                {/* Time & Activity */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8">
                  <div className="md:col-span-3 text-xs uppercase tracking-widest font-bold text-brand-gold pt-1">
                    {item.time}
                  </div>
                  
                  <div className="md:col-span-9">
                    <h4 className="font-serif font-bold text-brand-green text-base md:text-lg mb-1.5 group-hover:text-brand-gold transition-colors">
                      {item.task}
                    </h4>
                    <p className="text-brand-slate text-xs md:text-sm leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
