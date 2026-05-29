"use client";

import React, { useState } from "react";

export default function Journaling() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    {
      category: "Awareness Journaling",
      question: "What feels heavy in my life?",
      helper: "Take an inventory of commitments, relationships, digital habits, and unspoken expectations that drain your lifeforce.",
      placeholder: "Write down the weight you are ready to let go of...",
    },
    {
      category: "Emotional Journaling",
      question: "What emotion do I avoid most?",
      helper: "Identify where you avoid discomfort—whether it's anger, grief, vulnerability, or standing in your absolute power.",
      placeholder: "Locate and name the emotion you have locked away...",
    },
    {
      category: "Somatic Journaling",
      question: "What sensations did I notice?",
      helper: "Observe constriction, tightness, temperature, or expansions in your physical chest, shoulders, throat, and gut.",
      placeholder: "Listen to the voice of your physical body...",
    },
    {
      category: "Identity Journaling",
      question: "Who have I become?",
      helper: "Map out the masks, habits, and protective behaviors that kept you safe, but now trap you in stagnation.",
      placeholder: "Analyze the current shell you are outgrowing...",
    },
    {
      category: "Future Self Journaling",
      question: "What kind of life do I truly want?",
      helper: "Bypass small compromises. Design the daily pacing, focus, relational quality, and impact of your next chapter.",
      placeholder: "Crystallize the vision of your upcoming Third Act...",
    },
    {
      category: "Impossible Day Reflection",
      question: "What changed today?",
      helper: "Record the precise moment when your self-imposed narrative shattered and you realized what you are actually capable of.",
      placeholder: "Document the undeniable proof of your growth...",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Deep Reflection</span>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-green font-bold tracking-tight mt-2 leading-tight">
            The Architecture of Deep Reflection
          </h2>
          <p className="text-brand-slate text-sm mt-3">
            A structured daily journaling system designed to bridge internal breakthroughs into tangible reality.
          </p>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Notebook Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Prompts List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-4">
                Select Reflection Architecture
              </span>
              
              {prompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    selectedPrompt === idx
                      ? "bg-brand-green text-white border-brand-green shadow-md"
                      : "bg-white text-brand-slate border-brand-green/10 hover:border-brand-green/30"
                  }`}
                >
                  <div>
                    <span className={`text-[9px] uppercase tracking-widest block font-bold ${
                      selectedPrompt === idx ? "text-brand-gold" : "text-brand-gold/75"
                    }`}>
                      {prompt.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm md:text-base mt-1.5">
                      {prompt.question}
                    </h4>
                  </div>
                  
                  <span className={`text-lg font-serif font-bold shrink-0 ml-4 group-hover:translate-x-0.5 transition-transform ${
                    selectedPrompt === idx ? "text-brand-gold" : "text-brand-green/20"
                  }`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Lined Notebook Page */}
          <div className="lg:col-span-7">
            <div className="relative h-full bg-white border border-brand-green/10 shadow-xl rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col justify-between min-h-[460px]">
              
              {/* Premium Top Margin Margin Red Line */}
              <div className="absolute top-0 bottom-0 left-[38px] md:left-[54px] w-px bg-red-400/35 pointer-events-none" />

              <div>
                {/* Notebook Header */}
                <div className="flex items-center justify-between border-b border-brand-green/5 pb-4 mb-6 pl-8 md:pl-12">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-brand-gold">
                    {prompts[selectedPrompt].category}
                  </span>
                  <span className="text-[9px] font-sans text-brand-slate/50">
                    THE THIRD ACT ARCHIVE
                  </span>
                </div>

                {/* Question & Guide */}
                <div className="pl-8 md:pl-12 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="text-xl md:text-3xl font-serif text-brand-green font-bold mb-3">
                    {prompts[selectedPrompt].question}
                  </h3>
                  <p className="text-brand-slate text-xs md:text-sm leading-relaxed italic">
                    {prompts[selectedPrompt].helper}
                  </p>
                </div>

                {/* Lined Writing Surface */}
                <div className="pl-8 md:pl-12">
                  <textarea
                    rows={6}
                    placeholder={prompts[selectedPrompt].placeholder}
                    className="w-full bg-transparent focus:outline-none text-brand-charcoal text-sm leading-[2rem] journal-line resize-none placeholder-brand-slate/30"
                  />
                </div>
              </div>

              {/* Notebook Footer */}
              <div className="pl-8 md:pl-12 pt-6 border-t border-brand-green/5 mt-8 flex items-center justify-between text-[10px] text-brand-slate/40">
                <span>Hold space for your own truth</span>
                <span>Page 0{selectedPrompt + 1} of 06</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
