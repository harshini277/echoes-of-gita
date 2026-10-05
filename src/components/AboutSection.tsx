'use client';

import React from 'react';
import { Info, BookOpen, CheckCircle, ShieldCheck, FileText, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const themes = [
    { name: 'Karma Yoga', desc: 'The discipline of selfless action without attachment to outcomes.' },
    { name: 'Jnana Yoga', desc: 'The path of discernment, wisdom, and understanding the eternal Self.' },
    { name: 'Bhakti Yoga', desc: 'The path of loving devotion, trust, and surrender to divine grace.' },
    { name: 'Dhyana Yoga', desc: 'The practice of meditation, self-discipline, and mastery over the mind.' },
    { name: 'Dharma', desc: 'Living in harmony with cosmic truth, righteousness, and authentic personal calling.' },
    { name: 'Equanimity (Samatvam)', desc: 'Mental poise and balance amidst pleasure and pain, success and failure.' },
  ];

  return (
    <section id="about" className="py-14 md:py-22 bg-[#f7f3eb] border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 border border-amber-300/80 text-amber-950 text-xs font-semibold">
            <Info className="w-4 h-4 text-amber-700" />
            <span>Academic Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            About the Gita & Sources
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Built with academic rigor, clear citations, and transparent distinction between original textual verse, philosophical interpretation, and modern application.
          </p>
        </div>

        {/* Academic Methodology Card */}
        <div className="bg-[#faf6f0] rounded-3xl p-6 sm:p-8 border border-amber-900/15 shadow-md space-y-6">
          <h3 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            Three-Layer Academic Distinction
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-amber-900/5 border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4 text-amber-700" />
                <span>1. Direct Text</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Original Sanskrit verses, Romanized IAST transliteration, and authoritative English translations verified against scholarly Gita editions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-900/5 border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>2. Interpretation</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Philosophical commentaries explaining technical concepts (Atman, Gunas, Sthitaprajna) in simple, accessible language.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-900/5 border border-amber-900/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>3. Modern Application</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans">
                Contextual bridges connecting ancient wisdom to daily student challenges: exam stress, overthinking, career decisions, and emotional resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Core Philosophical Themes */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-2xl text-slate-900 text-center">
            Core Philosophical Frameworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#faf6f0] border border-amber-900/15 space-y-1">
                <h4 className="font-serif font-bold text-base text-amber-900">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
