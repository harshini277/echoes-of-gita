'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ChatInterface } from '@/components/ChatInterface';
import { LifeSituations } from '@/components/LifeSituations';
import { ExploreVerses } from '@/components/ExploreVerses';
import { RandomVerse } from '@/components/RandomVerse';
import { ChapterExplorer } from '@/components/ChapterExplorer';
import { BhishmaParvaSection } from '@/components/BhishmaParvaSection';
import { AboutSection } from '@/components/AboutSection';
import { DemoModeBar } from '@/components/DemoModeBar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [chatQuestion, setChatQuestion] = useState('');
  const [demoOpen, setDemoOpen] = useState(false);
  const [verseFilter, setVerseFilter] = useState<{ chapter: number; verse?: number } | undefined>(undefined);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLaunchQuestion = (prompt: string) => {
    setChatQuestion(prompt);
    scrollToSection('chat');
  };

  const handleExploreVerse = (chapter: number, verse: number) => {
    setVerseFilter({ chapter, verse });
    scrollToSection('verses');
  };

  const handleSelectChapter = (chapterId: number) => {
    setVerseFilter({ chapter: chapterId });
    scrollToSection('verses');
  };

  const handleDemoStep = (stepId: number) => {
    switch (stepId) {
      case 1:
        scrollToSection('home');
        break;
      case 2:
        handleLaunchQuestion("I am scared of failing my exams. What does the Gita say?");
        break;
      case 3:
        scrollToSection('chat');
        break;
      case 4:
        scrollToSection('facing');
        break;
      case 5:
        scrollToSection('verses');
        break;
      case 6:
        scrollToSection('chapters');
        break;
      case 7:
        scrollToSection('verses');
        break;
      default:
        scrollToSection('home');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      
      {/* Top Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDemo={() => setDemoOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div id="home">
          <HeroSection
            onAskGita={() => scrollToSection('chat')}
            onExploreVerses={() => scrollToSection('verses')}
            onExploreFacing={() => scrollToSection('facing')}
          />
        </div>

        {/* AI Chat Companion Section */}
        <ChatInterface
          initialQuestion={chatQuestion}
          onExploreVerse={handleExploreVerse}
        />

        {/* Life Situations Selector */}
        <LifeSituations
          onSelectSituation={handleLaunchQuestion}
        />

        {/* Random Verse for the Moment */}
        <RandomVerse
          onAskAboutVerse={handleLaunchQuestion}
        />

        {/* Explore Verses Library */}
        <ExploreVerses
          onAskAboutVerse={handleLaunchQuestion}
          selectedVerseFilter={verseFilter}
        />

        {/* 18 Chapters Framework */}
        <ChapterExplorer
          onSelectChapter={handleSelectChapter}
        />

        {/* Bhishma Parva Context */}
        <BhishmaParvaSection />

        {/* About & Academic Methodology */}
        <AboutSection />
      </main>

      {/* Floating Demo Mode Widget */}
      <DemoModeBar
        isOpen={demoOpen}
        onClose={() => setDemoOpen(false)}
        onRunStep={handleDemoStep}
      />

      {/* Site Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
