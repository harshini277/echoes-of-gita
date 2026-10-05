'use client';

import React, { useState } from 'react';
import { BookOpen, Copy, Check, Sparkles, HelpCircle, Lightbulb, Compass, Share2, Heart, ArrowRight } from 'lucide-react';
import { ChatResponseBody } from '@/app/api/chat/route';

interface ResponseCardProps {
  data: ChatResponseBody;
  question: string;
  onExploreVerse: (chapter: number, verse: number) => void;
  onSelectFollowUp: (followUp: string) => void;
}

export const ResponseCard: React.FC<ResponseCardProps> = ({
  data,
  question,
  onExploreVerse,
  onSelectFollowUp,
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopy = () => {
    const textToCopy = `Question: ${question}\n\nInsight from the Gita:\n${data.insight}\n\nVerse (Ch ${data.primaryVerse.chapter}, Verse ${data.primaryVerse.verse}):\n${data.primaryVerse.translation}\n\nWhat it means:\n${data.meaning}\n\nIn your situation:\n${data.modernApplication}\n\nReflection:\n${data.reflectionPrompt}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-[#faf6f0] rounded-3xl p-6 sm:p-8 border border-amber-900/15 shadow-xl space-y-7 transition-all animate-fadeIn">
      
      {/* Top Header & Copy Actions */}
      <div className="flex items-start justify-between gap-4 pb-4 border-b border-amber-900/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Wisdom Insight</span>
            {data.isFallback && (
              <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 text-[10px] lowercase tracking-normal">
                (Offline RAG Engine)
              </span>
            )}
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 mt-1">
            "{question}"
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSaved(!saved)}
            className={`p-2 rounded-xl border transition-all ${
              saved
                ? 'bg-rose-50 text-rose-600 border-rose-200'
                : 'bg-amber-50 text-slate-600 border-amber-200 hover:bg-amber-100'
            }`}
            title="Bookmark verse"
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-rose-500' : ''}`} />
          </button>
          
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-xs font-semibold text-amber-900 transition-all"
            title="Copy answer to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Insight Statement */}
      <div className="p-5 rounded-2xl bg-amber-900/5 border border-amber-900/10 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          <span>Core Insight</span>
        </div>
        <p className="text-slate-800 font-serif text-base sm:text-lg leading-relaxed">
          {data.insight}
        </p>
      </div>

      {/* Relevant Verse Reference Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/10 via-amber-800/5 to-amber-950/10 border-2 border-amber-600/30 space-y-4 relative overflow-hidden shadow-inner">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-sm sm:text-base">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <span>Bhagavad Gita • Chapter {data.primaryVerse.chapter}, Verse {data.primaryVerse.verse}</span>
          </div>
          
          <button
            onClick={() => onExploreVerse(data.primaryVerse.chapter, data.primaryVerse.verse)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-all"
          >
            <span>Explore Verse</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sanskrit Text */}
        <div className="space-y-1 bg-[#fbf9f4] p-4 rounded-xl border border-amber-900/10">
          <p className="font-serif text-base sm:text-lg text-amber-950 font-medium leading-relaxed tracking-wide">
            {data.primaryVerse.sanskrit}
          </p>
          {data.primaryVerse.transliteration && (
            <p className="text-xs text-amber-800/80 italic font-sans pt-1">
              "{data.primaryVerse.transliteration}"
            </p>
          )}
        </div>

        {/* English Translation */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold text-amber-900 uppercase tracking-widest block">Translation</span>
          <p className="text-slate-800 text-sm sm:text-base font-sans leading-relaxed font-medium">
            "{data.primaryVerse.translation}"
          </p>
        </div>
      </div>

      {/* Meaning Section */}
      <div className="space-y-2">
        <h4 className="font-serif font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          What it Means
        </h4>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-amber-500/40">
          {data.meaning}
        </p>
      </div>

      {/* Modern Situation Application */}
      <div className="space-y-2">
        <h4 className="font-serif font-bold text-base text-slate-900 uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-700"></span>
          In Your Situation
        </h4>
        <p className="text-slate-800 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-amber-600/60 bg-amber-50/50 p-3 rounded-r-xl">
          {data.modernApplication}
        </p>
      </div>

      {/* Reflection Prompt */}
      <div className="p-4 rounded-xl bg-amber-100/60 border border-amber-300/60 flex items-start gap-3">
        <Compass className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">Reflect</span>
          <p className="text-amber-950 font-serif font-medium text-sm sm:text-base italic">
            "{data.reflectionPrompt}"
          </p>
        </div>
      </div>

      {/* Secondary / Related Verses */}
      {data.secondaryVerses && data.secondaryVerses.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="font-serif font-semibold text-xs text-amber-900 uppercase tracking-widest">
            Related Verses to Explore
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.secondaryVerses.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => onExploreVerse(sec.chapter, sec.verse)}
                className="p-3 rounded-xl bg-[#fbf9f4] hover:bg-amber-100/60 border border-amber-900/10 text-left transition-all group space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span>Chapter {sec.chapter}, Verse {sec.verse}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 italic">
                  "{sec.translation}"
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggested Follow-up Prompts */}
      {data.suggestedFollowUps && data.suggestedFollowUps.length > 0 && (
        <div className="space-y-3 pt-3 border-t border-amber-900/10">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Continue the Conversation</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {data.suggestedFollowUps.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => onSelectFollowUp(prompt)}
                className="px-3.5 py-2 rounded-full bg-white hover:bg-amber-100 border border-amber-900/15 text-xs text-slate-800 font-medium transition-all shadow-2xs hover:shadow-xs hover:border-amber-400"
              >
                "{prompt}"
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
