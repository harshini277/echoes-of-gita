'use client';

import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'chat' | 'chapters') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121826] text-slate-300 py-10 border-t border-amber-900/30 font-sans mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-serif font-bold text-xs">
                ॐ
              </div>
              <span className="font-serif font-bold text-lg text-amber-100 tracking-wide">
                ECHOES OF GITA
              </span>
            </div>
            <p className="text-xs text-amber-200/80 font-serif italic">
              Wisdom, just a tap away.
            </p>
          </div>

          {/* 2 Navigation Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-300">
            <button
              onClick={() => onNavigate('chat')}
              className="hover:text-amber-400 transition-colors"
            >
              Ask Gita
            </button>
            <button
              onClick={() => onNavigate('chapters')}
              className="hover:text-amber-400 transition-colors"
            >
              18 Chapters
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Echoes of Gita. Grounded Bhagavad Gita Wisdom Engine.</p>
          <p className="text-[11px] text-amber-300/80 italic font-serif">
            "Equanimity of mind is called Yoga." (BG 2.48)
          </p>
        </div>

      </div>
    </footer>
  );
};
