'use client';

import React, { useState, useMemo } from 'react';
import { BookOpen, Search, Filter, Sparkles, MessageSquare, ArrowRight, Check, Heart } from 'lucide-react';
import { GITA_VERSES, GitaVerse } from '@/data/gitaData';

interface ExploreVersesProps {
  onAskAboutVerse: (prompt: string) => void;
  selectedVerseFilter?: { chapter: number; verse?: number };
}

export const ExploreVerses: React.FC<ExploreVersesProps> = ({
  onAskAboutVerse,
  selectedVerseFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<number | 'All'>(
    selectedVerseFilter?.chapter || 'All'
  );
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  const allTopics = [
    'All',
    'Duty',
    'Karma',
    'Fear',
    'Mind',
    'Detachment',
    'Knowledge',
    'Devotion',
    'Courage',
    'Self-discipline',
    'Failure',
    'Success',
    'Anger',
    'Peace',
    'Action',
    'Dharma',
    'Self-knowledge'
  ];

  const filteredVerses = useMemo(() => {
    return GITA_VERSES.filter(v => {
      // Chapter filter
      if (selectedChapter !== 'All' && v.chapter !== selectedChapter) {
        return false;
      }
      // Topic filter
      if (selectedTopic !== 'All' && !v.topics.includes(selectedTopic)) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesSanskrit = v.sanskrit.toLowerCase().includes(q);
        const matchesTrans = v.transliteration.toLowerCase().includes(q);
        const matchesEng = v.translation.toLowerCase().includes(q);
        const matchesExp = v.explanation.toLowerCase().includes(q);
        const matchesId = v.id.toLowerCase().includes(q);
        return matchesSanskrit || matchesTrans || matchesEng || matchesExp || matchesId;
      }
      return true;
    });
  }, [selectedChapter, selectedTopic, searchQuery]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="verses" className="py-14 md:py-22 bg-[#fbf9f4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Verses & Teachings Library</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            Explore the Gita
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Search 700 verses, filter by philosophical topics or specific chapters, and explore grounded translations.
          </p>
        </div>

        {/* Search & Controls Container */}
        <div className="bg-[#faf6f0] p-6 rounded-3xl border border-amber-900/15 shadow-md space-y-5">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keywords (e.g. 'exam', 'duty', 'mind', 'Chapter 2')..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-amber-900/15 text-slate-900 text-sm sm:text-base focus:outline-none focus:border-amber-600 shadow-2xs font-sans"
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

          {/* Chapter Selector Dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-amber-700" />
              <span>Chapter Filter:</span>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                className="px-3 py-1.5 bg-white border border-amber-900/20 rounded-xl text-slate-900 text-xs font-semibold focus:outline-none focus:border-amber-600"
              >
                <option value="All">All Chapters (1–18)</option>
                {Array.from({ length: 18 }, (_, i) => i + 1).map(num => (
                  <option key={num} value={num}>Chapter {num}</option>
                ))}
              </select>
            </div>

            <div className="text-xs text-amber-900 font-medium">
              Showing <span className="font-bold">{filteredVerses.length}</span> verse{filteredVerses.length === 1 ? '' : 's'}
            </div>
          </div>

          {/* Topic Pills */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest block">Topic Filters:</span>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-1">
              {allTopics.map((topic) => {
                const isActive = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-amber-700 text-white font-semibold shadow-xs'
                        : 'bg-white hover:bg-amber-100/70 border border-amber-900/10 text-slate-700'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Verses Grid Display */}
        {filteredVerses.length === 0 ? (
          <div className="text-center py-16 p-6 rounded-3xl bg-[#faf6f0] border border-amber-900/15 space-y-3">
            <BookOpen className="w-10 h-10 text-amber-700 mx-auto opacity-50" />
            <h3 className="font-serif font-bold text-lg text-slate-900">No verses found</h3>
            <p className="text-sm text-slate-600">
              Try adjusting your search terms or clearing the topic filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopic('All');
                setSelectedChapter('All');
              }}
              className="px-4 py-2 rounded-full bg-amber-700 text-white text-xs font-semibold shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredVerses.map((verse) => {
              const isSaved = bookmarkedIds.includes(verse.id);
              return (
                <div
                  key={verse.id}
                  className="bg-[#faf6f0] rounded-3xl p-6 border border-amber-900/15 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    
                    {/* Card Top Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-amber-200/80 border border-amber-300/80 text-amber-950 text-xs font-serif font-bold">
                          Chapter {verse.chapter} • Verse {verse.verse}
                        </span>
                        {verse.featured && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-600 text-white text-[10px] font-semibold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleBookmark(verse.id)}
                        className={`p-2 rounded-xl transition-all ${
                          isSaved ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-rose-500'
                        }`}
                        title="Save Verse"
                      >
                        <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
                      </button>
                    </div>

                    {/* Sanskrit Text */}
                    <p className="font-serif text-lg font-bold text-amber-950 leading-relaxed pt-1">
                      {verse.sanskrit}
                    </p>

                    {/* Transliteration */}
                    <p className="text-xs text-amber-800/80 italic font-sans">
                      "{verse.transliteration}"
                    </p>

                    {/* Translation */}
                    <p className="text-slate-800 text-sm font-sans leading-relaxed pt-2 border-t border-amber-900/10">
                      "{verse.translation}"
                    </p>

                    {/* Explanation */}
                    <div className="p-3 rounded-xl bg-amber-900/5 text-xs text-slate-700 space-y-1">
                      <span className="font-bold text-amber-900 uppercase tracking-widest text-[10px] block">Meaning</span>
                      <p className="leading-normal">{verse.explanation}</p>
                    </div>

                    {/* Topic Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {verse.topics.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white border border-amber-900/10 text-[11px] text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Action CTA: Ask Gemini about this verse */}
                  <button
                    onClick={() => onAskAboutVerse(`Can you explain Bhagavad Gita Chapter ${verse.chapter}, Verse ${verse.verse} ("${verse.translation}") and how I can apply its meaning to my life?`)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-all mt-2 group"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-amber-200 group-hover:rotate-12 transition-transform" />
                    <span>Ask Gemini about this verse</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
