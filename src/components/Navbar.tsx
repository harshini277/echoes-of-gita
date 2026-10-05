'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Compass, BookOpen, Layers, Info, Menu, X, PlayCircle, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'chat', label: 'Ask the Gita', icon: MessageSquare },
    { id: 'facing', label: 'Life Situations', icon: Compass },
    { id: 'verses', label: 'Explore Verses', icon: BookOpen },
    { id: 'chapters', label: '18 Chapters', icon: Layers },
    { id: 'bhishma', label: 'Bhishma Parva', icon: Compass },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    // Scroll to top or specific section
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#fbf9f4]/90 backdrop-blur-md shadow-sm border-b border-amber-900/10 py-3' 
        : 'bg-[#fbf9f4] border-b border-amber-900/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#faf6f0] rounded-full flex items-center justify-center border border-amber-200">
                <span className="text-amber-700 font-serif font-bold text-lg leading-none">ॐ</span>
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-slate-900 tracking-wider block leading-tight">
                ECHOES OF GITA
              </span>
              <span className="text-[10px] sm:text-xs text-amber-700/80 tracking-widest font-medium uppercase block">
                Wisdom, Just a Tap Away
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-amber-900/5 p-1.5 rounded-full border border-amber-900/10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30 font-semibold'
                      : 'text-slate-700 hover:text-amber-800 hover:bg-amber-100/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Demo Launcher */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 hover:from-amber-800 hover:to-amber-950 shadow-md shadow-amber-900/20 hover:scale-105 transition-all border border-amber-500/30"
              title="Launch step-by-step presentation flow for evaluators"
            >
              <PlayCircle className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              Faculty Demo Mode
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="sm:hidden px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-700 text-amber-50"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-amber-100/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f4] border-b border-amber-900/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-amber-600 text-white font-semibold'
                    : 'text-slate-700 hover:bg-amber-100/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-800 text-white shadow-md"
            >
              <PlayCircle className="w-4 h-4 text-amber-300" />
              Launch Faculty Demo Mode
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
