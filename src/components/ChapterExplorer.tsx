'use client';

import React from 'react';
import { Layers, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { GITA_CHAPTERS, GitaChapter } from '@/data/chaptersData';

interface ChapterExplorerProps {
  onSelectChapter: (chapterId: number) => void;
}

export const ChapterExplorer: React.FC<ChapterExplorerProps> = ({ onSelectChapter }) => {
  return (
    <section id="chapters" className="py-14 md:py-22 bg-[#f7f3eb] border-y border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 border border-amber-300/80 text-amber-950 text-xs font-semibold">
            <Layers className="w-4 h-4 text-amber-700" />
            <span>Complete Structure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            The 18 Chapters of the Gita
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Explore the complete 18-chapter framework of spiritual psychology, philosophy, and self-mastery.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GITA_CHAPTERS.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className="bg-[#faf6f0] rounded-3xl p-6 border border-amber-900/15 shadow-sm hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                
                {/* Header Badge & Verse Count */}
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-amber-700 text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                    {chapter.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold">
                    {chapter.verseCount} Verses
                  </span>
                </div>

                {/* Names */}
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-amber-800 transition-colors">
                    {chapter.sanskritName}
                  </h3>
                  <p className="text-xs text-amber-900 font-serif italic font-medium">
                    "{chapter.englishName}"
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans line-clamp-3">
                  {chapter.summary}
                </p>

                {/* Theme Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {chapter.mainThemes.map((theme, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white border border-amber-900/10 text-[11px] text-amber-900 font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Action */}
              <div className="flex items-center justify-between text-xs font-bold text-amber-800 pt-3 border-t border-amber-900/10 group-hover:text-amber-950">
                <span>Browse Chapter {chapter.id} Verses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
