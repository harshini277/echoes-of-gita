'use client';

import React from 'react';
import { MessageSquare, BookOpen, Compass, Sparkles, ScrollText, ArrowRight, Sun } from 'lucide-react';

interface HeroSectionProps {
  onAskGita: () => void;
  onExploreVerses: () => void;
  onExploreFacing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onAskGita,
  onExploreVerses,
  onExploreFacing
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#fbf9f4] via-[#f7f2e6] to-[#fbf9f4]">
      {/* Background Decorative Mandala Pattern SVG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-[0.04] pointer-events-none select-none">
        <svg viewBox="0 0 500 500" className="w-full h-full text-amber-900 fill-current animate-spin-slow">
          <circle cx="250" cy="250" r="240" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 250 250)`}>
              <path d="M250 30 C 265 80, 265 120, 250 170 C 235 120, 235 80, 250 30 Z" opacity="0.6" />
              <circle cx="250" cy="70" r="6" />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Bhishma Parva Context Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 text-xs font-semibold shadow-xs">
              <ScrollText className="w-4 h-4 text-amber-700" />
              <span>Bhishma Parva • Mahabharata Context</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-ping"></span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                ECHOES OF <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent">GITA</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl font-medium text-amber-800/90 mt-2 tracking-wide">
                Wisdom, just a tap away.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-sans leading-relaxed">
              Explore timeless teachings from the Bhagavad Gita and discover how they relate to the real questions, decisions, and stress of modern daily life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onAskGita}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white font-semibold text-base shadow-lg shadow-amber-700/25 hover:shadow-xl hover:shadow-amber-700/35 hover:scale-[1.02] active:scale-[0.98] transition-all border border-amber-400/30 group"
              >
                <MessageSquare className="w-5 h-5 text-amber-200 group-hover:rotate-12 transition-transform" />
                Ask the Gita
                <ArrowRight className="w-4 h-4 text-amber-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreVerses}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#faf6f0] text-amber-950 font-semibold text-base shadow-xs hover:bg-amber-100/70 transition-all border border-amber-900/20 hover:border-amber-800/40"
              >
                <BookOpen className="w-5 h-5 text-amber-700" />
                Explore Verses
              </button>
            </div>

            {/* Informational Context Box */}
            <div className="p-4 rounded-2xl bg-amber-900/5 border border-amber-900/10 text-left text-xs sm:text-sm text-slate-700 space-y-1">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs tracking-wider uppercase">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>Textual Note</span>
              </div>
              <p className="leading-normal">
                The Bhagavad Gita is a 700-verse sacred dialogue between Arjuna and Krishna, contained within the Bhishma Parva of the epic Mahabharata.
              </p>
            </div>
          </div>

          {/* Right Visual Artwork Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-amber-600/20 to-amber-900/10 rounded-3xl blur-2xl transform -rotate-3 scale-95"></div>

              {/* Main Artwork Frame */}
              <div className="relative bg-[#faf7f0] rounded-3xl p-6 shadow-xl border border-amber-900/15 text-center space-y-6">
                
                {/* Visual Emblem Banner */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-600 to-amber-800 p-1 shadow-lg shadow-amber-700/30">
                  <div className="w-full h-full rounded-full bg-[#fbf9f4] flex items-center justify-center border-2 border-amber-200/60">
                    <span className="font-serif text-4xl text-amber-800 font-bold">ॐ</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    Dialogue at Kurukshetra
                  </h3>
                  <p className="text-xs text-amber-800 font-serif italic">
                    "When action meets wisdom, fear dissolves."
                  </p>
                </div>

                {/* Quick Quick-Start Card Grid */}
                <div className="grid grid-cols-2 gap-3 text-left">
                  <button
                    onClick={onExploreFacing}
                    className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-all text-xs font-medium text-amber-950 flex flex-col gap-1 group"
                  >
                    <div className="flex items-center justify-between text-amber-700 font-semibold">
                      <span>Life Situations</span>
                      <Compass className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    </div>
                    <span className="text-[11px] text-slate-600">Stress, Exams, Failure</span>
                  </button>

                  <button
                    onClick={onAskGita}
                    className="p-3 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-all text-xs font-medium text-amber-950 flex flex-col gap-1 group"
                  >
                    <div className="flex items-center justify-between text-amber-700 font-semibold">
                      <span>AI Guidance</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] text-slate-600">Grounded Gemini AI</span>
                  </button>
                </div>

                {/* Verse Teaser Badge */}
                <div className="pt-2 border-t border-amber-900/10 text-[11px] text-slate-600 flex items-center justify-between">
                  <span className="font-semibold text-amber-900">Verse 2.47:</span>
                  <span className="italic truncate max-w-[200px]">"Your right is to action alone..."</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
