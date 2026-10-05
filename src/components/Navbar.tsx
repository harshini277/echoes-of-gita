'use client';

import React from 'react';
import { MessageSquare, Layers } from 'lucide-react';

interface NavbarProps {
  activeTab: 'chat' | 'chapters';
  setActiveTab: (tab: 'chat' | 'chapters') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-amber-900/10 py-3.5 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab('chat')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-sm shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#faf6f0] rounded-full flex items-center justify-center border border-amber-200">
              <span className="text-amber-700 font-serif font-bold text-base leading-none">ॐ</span>
            </div>
          </div>
          <div>
            <span className="font-serif font-bold text-lg text-slate-900 tracking-wide block leading-none">
              ECHOES OF GITA
            </span>
            <span className="text-[10px] text-amber-800 tracking-wider font-medium uppercase block mt-0.5">
              Wisdom, Just a Tap Away
            </span>
          </div>
        </button>

        {/* 2 Main Navigation Tabs */}
        <nav className="flex items-center gap-1.5 bg-amber-900/5 p-1 rounded-full border border-amber-900/10">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'chat'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-700/25'
                : 'text-slate-700 hover:text-amber-900 hover:bg-amber-100/60'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Gita</span>
          </button>

          <button
            onClick={() => setActiveTab('chapters')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'chapters'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-700/25'
                : 'text-slate-700 hover:text-amber-900 hover:bg-amber-100/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>18 Chapters</span>
          </button>
        </nav>

      </div>
    </header>
  );
};
