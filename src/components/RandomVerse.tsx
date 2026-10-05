'use client';

import React, { useState } from 'react';
import { Sparkles, RefreshCw, BookOpen, MessageSquare, ArrowRight, Sun } from 'lucide-react';
import { GITA_VERSES, GitaVerse } from '@/data/gitaData';

interface RandomVerseProps {
  onAskAboutVerse: (prompt: string) => void;
}

export const RandomVerse: React.FC<RandomVerseProps> = ({ onAskAboutVerse }) => {
  const [currentVerse, setCurrentVerse] = useState<GitaVerse>(GITA_VERSES[0]);
  const [animating, setAnimating] = useState(false);

  React.useEffect(() => {
    // Pick random verse on client mount after hydration
    const initialVerse = GITA_VERSES[Math.floor(Math.random() * GITA_VERSES.length)];
    setCurrentVerse(initialVerse);
  }, []);

  const handleDrawRandomVerse = () => {
    setAnimating(true);
    setTimeout(() => {
      let nextVerse = GITA_VERSES[Math.floor(Math.random() * GITA_VERSES.length)];
      // Ensure it changes
      if (nextVerse.id === currentVerse.id && GITA_VERSES.length > 1) {
        nextVerse = GITA_VERSES[(GITA_VERSES.indexOf(currentVerse) + 1) % GITA_VERSES.length];
      }
      setCurrentVerse(nextVerse);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-[#fbf9f4] via-[#f5eedf] to-[#fbf9f4] border-y border-amber-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-md shadow-amber-600/30 text-white">
              <Sun className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-slate-900 leading-tight">
                Verse for the Moment
              </h3>
              <p className="text-xs text-amber-800 font-medium">
                Draw a random teaching to reflect on right now
              </p>
            </div>
          </div>

          <button
            onClick={handleDrawRandomVerse}
            disabled={animating}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-white text-xs font-semibold shadow-md hover:scale-105 active:scale-95 transition-all border border-amber-500/30"
          >
            <RefreshCw className={`w-4 h-4 ${animating ? 'animate-spin' : ''}`} />
            <span>Give me a verse</span>
          </button>
        </div>

        {/* Verse Highlight Card */}
        <div className={`bg-[#faf6f0] rounded-3xl p-6 sm:p-8 border-2 border-amber-600/30 shadow-xl space-y-5 transition-all duration-300 ${
          animating ? 'opacity-30 scale-98' : 'opacity-100 scale-100 animate-fadeIn'
        }`}>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-amber-200/90 border border-amber-300 text-amber-950 text-xs font-serif font-bold">
              Bhagavad Gita • Chapter {currentVerse.chapter}, Verse {currentVerse.verse}
            </span>
            <span className="text-xs text-amber-800 font-serif italic">Random Reflection</span>
          </div>

          {/* Sanskrit */}
          <div className="p-4 rounded-2xl bg-[#fbf9f4] border border-amber-900/10 space-y-1">
            <p className="font-serif text-xl sm:text-2xl font-bold text-amber-950 leading-relaxed">
              {currentVerse.sanskrit}
            </p>
            <p className="text-xs text-amber-800/80 italic font-sans pt-1">
              "{currentVerse.transliteration}"
            </p>
          </div>

          {/* Translation */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest block">Translation</span>
            <p className="text-slate-800 text-base sm:text-lg font-sans leading-relaxed font-medium">
              "{currentVerse.translation}"
            </p>
          </div>

          {/* Meaning */}
          <div className="p-4 rounded-xl bg-amber-900/5 text-xs sm:text-sm text-slate-700 space-y-1">
            <span className="font-bold text-amber-900 uppercase tracking-widest text-[10px] block">Meaning</span>
            <p className="leading-relaxed font-sans">{currentVerse.explanation}</p>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onAskAboutVerse(`Can you explain Bhagavad Gita Chapter ${currentVerse.chapter}, Verse ${currentVerse.verse} ("${currentVerse.translation}") and how I can apply its meaning to my life?`)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-all group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
              <span>Ask Gemini about this verse</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
