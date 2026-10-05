'use client';

import React, { useState } from 'react';
import { Layers, BookOpen, ArrowRight, Search, MessageSquare, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { GITA_CHAPTERS, GitaChapter } from '@/data/chaptersData';
import { GITA_VERSES, GitaVerse } from '@/data/gitaData';

interface ChapterExplorerProps {
  onAskAboutVerse: (prompt: string) => void;
}

export const ChapterExplorer: React.FC<ChapterExplorerProps> = ({ onAskAboutVerse }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = GITA_CHAPTERS.filter(ch => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ch.sanskritName.toLowerCase().includes(q) ||
      ch.englishName.toLowerCase().includes(q) ||
      ch.meaning.toLowerCase().includes(q) ||
      ch.summary.toLowerCase().includes(q) ||
      ch.id.toString() === q
    );
  });

  const getChapterVerses = (chapterId: number): GitaVerse[] => {
    return GITA_VERSES.filter(v => v.chapter === chapterId);
  };

  return (
    <div className="py-8 md:py-12 bg-[#fbf9f4] space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-amber-700" />
          <span>The Complete 18 Chapters</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
          Bhagavad Gita Chapters & Verses
        </h1>
        <p className="text-slate-600 text-sm font-sans">
          Browse all 18 chapters of spiritual wisdom, explore grounded verses, or ask the AI companion to explain any verse.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto px-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapters by title, theme, or number..."
            className="w-full pl-11 pr-4 py-2.5 bg-[#faf6f0] rounded-full border border-amber-900/15 text-slate-900 text-sm focus:outline-none focus:border-amber-600 shadow-2xs font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredChapters.map((chapter) => {
            const isSelected = selectedChapterId === chapter.id;
            const chapterVerses = getChapterVerses(chapter.id);

            return (
              <div
                key={chapter.id}
                className={`bg-[#faf6f0] rounded-3xl border transition-all ${
                  isSelected
                    ? 'border-amber-600 ring-2 ring-amber-600/20 shadow-lg col-span-1 md:col-span-2 lg:col-span-3 p-6 sm:p-8'
                    : 'border-amber-900/15 hover:border-amber-700/40 shadow-xs hover:shadow-md p-6'
                }`}
              >
                {/* Chapter Summary Header */}
                <div
                  onClick={() => setSelectedChapterId(isSelected ? null : chapter.id)}
                  className="cursor-pointer space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-amber-700 text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                        {chapter.id}
                      </span>
                      <div>
                        <h2 className="font-serif font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                          {chapter.sanskritName}
                        </h2>
                        <p className="text-xs text-amber-900 font-serif italic">
                          "{chapter.englishName}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                        {chapter.verseCount} Verses
                      </span>
                      {isSelected ? (
                        <ChevronUp className="w-5 h-5 text-amber-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                    {chapter.summary}
                  </p>

                  {/* Theme Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {chapter.mainThemes.map((theme, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-white border border-amber-900/10 text-[11px] text-amber-950 font-medium"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  {!isSelected && (
                    <div className="pt-2 text-xs font-semibold text-amber-800 flex items-center gap-1">
                      <span>View Verses in Chapter {chapter.id}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Expanded Chapter Verses List */}
                {isSelected && (
                  <div className="mt-6 pt-6 border-t border-amber-900/15 space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-amber-700" />
                        Key Verses from Chapter {chapter.id}
                      </h3>
                      <button
                        onClick={() => setSelectedChapterId(null)}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                      >
                        Close Verses
                      </button>
                    </div>

                    {chapterVerses.length === 0 ? (
                      <p className="text-xs text-slate-500 italic py-3">
                        Grounded verse translations for Chapter {chapter.id} can be asked directly in the Ask Gita tab!
                      </p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {chapterVerses.map((verse) => (
                          <div
                            key={verse.id}
                            className="bg-[#fbf9f4] p-5 rounded-2xl border border-amber-900/10 space-y-3 flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-950 text-xs font-serif font-bold inline-block">
                                Verse {verse.verse}
                              </span>

                              <p className="font-serif text-base font-bold text-amber-950 leading-relaxed">
                                {verse.sanskrit}
                              </p>

                              <p className="text-xs text-amber-800/80 italic font-sans">
                                "{verse.transliteration}"
                              </p>

                              <p className="text-slate-800 text-xs font-sans leading-relaxed pt-1 border-t border-amber-900/10">
                                "{verse.translation}"
                              </p>
                            </div>

                            <button
                              onClick={() => onAskAboutVerse(`Can you explain Bhagavad Gita Chapter ${verse.chapter}, Verse ${verse.verse} ("${verse.translation}") and how I can apply its meaning to my life?`)}
                              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-all mt-2 group"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
                              <span>Ask Gita about Verse {verse.verse}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
