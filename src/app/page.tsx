'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ChatInterface } from '@/components/ChatInterface';
import { ChapterExplorer } from '@/components/ChapterExplorer';
import { Footer } from '@/components/Footer';
import { Sparkles, MessageSquare, ScrollText, ArrowRight, Compass } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chat' | 'chapters'>('chat');
  const [chatQuestion, setChatQuestion] = useState('');

  const quickPrompts = [
    { title: "Academic Stress", text: "I am scared of failing my exams. What does the Gita say?" },
    { title: "Overcoming Fear", text: "What does the Gita say about fear?" },
    { title: "Controlling Mind", text: "How can I stop overthinking and control my mind?" },
    { title: "Handling Failure", text: "How do I deal with failure and recover from setbacks?" },
    { title: "Duty vs Passion", text: "I don't know whether I should follow my passion or responsibilities." },
    { title: "Managing Anger", text: "What does Krishna teach about controlling anger?" },
  ];

  const handleLaunchQuestion = (prompt: string) => {
    setChatQuestion(prompt);
    setActiveTab('chat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-slate-900 selection:bg-amber-200 selection:text-amber-900 font-sans">
      
      {/* Navbar with 2 Tabs */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-grow">
        {activeTab === 'chat' ? (
          <div className="animate-fadeIn">
            
            {/* Intro Hero Header */}
            <section className="pt-8 pb-4 bg-gradient-to-b from-[#fbf9f4] via-[#f7f2e6] to-[#fbf9f4] text-center border-b border-amber-900/10">
              <div className="max-w-4xl mx-auto px-4 space-y-4">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-semibold">
                  <ScrollText className="w-3.5 h-3.5 text-amber-700" />
                  <span>Bhishma Parva • Mahabharata Context</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  ECHOES OF <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 bg-clip-text text-transparent">GITA</span>
                </h1>

                <p className="font-serif text-lg sm:text-xl font-medium text-amber-800">
                  Wisdom, just a tap away.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
                  Explore timeless teachings from the Bhagavad Gita and discover how they relate to the real questions, decisions, and stress of modern daily life.
                </p>

                {/* Quick Topic Chips */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
                  {quickPrompts.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleLaunchQuestion(item.text)}
                      className="px-3 py-1.5 rounded-full bg-white hover:bg-amber-100/80 border border-amber-900/15 text-xs text-slate-800 font-medium transition-all shadow-2xs hover:shadow-xs hover:border-amber-400"
                    >
                      💡 {item.title}
                    </button>
                  ))}
                </div>

              </div>
            </section>

            {/* AI Chat Interface */}
            <ChatInterface
              initialQuestion={chatQuestion}
              onExploreVerse={(chapter, verse) => {
                setActiveTab('chapters');
              }}
            />

          </div>
        ) : (
          <div className="animate-fadeIn">
            {/* 18 Chapters View */}
            <ChapterExplorer
              onAskAboutVerse={handleLaunchQuestion}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab === 'chapters' ? 'chapters' : 'chat')} />

    </div>
  );
}
