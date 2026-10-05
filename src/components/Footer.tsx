'use client';

import React from 'react';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121826] text-slate-300 py-12 border-t border-amber-900/30 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-serif font-bold text-sm">
                ॐ
              </div>
              <span className="font-serif font-bold text-xl text-amber-100 tracking-wide">
                ECHOES OF GITA
              </span>
            </div>
            <p className="text-xs text-amber-200/80 font-serif italic">
              Wisdom, just a tap away.
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              An interactive AI companion designed to connect timeless teachings from the Bhagavad Gita to modern life questions, academic stress, decision-making, and self-mastery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif font-bold text-sm text-amber-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('chat')} className="hover:text-amber-400 transition-colors">
                  Ask the Gita AI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facing')} className="hover:text-amber-400 transition-colors">
                  Life Situations Selector
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('verses')} className="hover:text-amber-400 transition-colors">
                  Explore Verses Library
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chapters')} className="hover:text-amber-400 transition-colors">
                  18 Chapters Framework
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bhishma')} className="hover:text-amber-400 transition-colors">
                  Bhishma Parva Context
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  Academic Methodology & Sources
                </button>
              </li>
            </ul>
          </div>

          {/* Textual Note */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-serif font-bold text-sm text-amber-200 uppercase tracking-wider">
              Textual Reference
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The Bhagavad Gita is a 700-verse dialogue contained within Chapters 23–40 of the Bhishma Parva of the Mahabharata.
            </p>
            <div className="pt-2 text-[11px] text-amber-400/90 italic font-serif">
              "Equanimity of mind is called Yoga." (BG 2.48)
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Echoes of Gita — College Demonstration Project.</p>
          <p className="flex items-center gap-1">
            <span>Powered by Google Gemini AI & Structured RAG Verse Engine</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
