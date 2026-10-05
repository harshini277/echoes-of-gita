'use client';

import React from 'react';
import { Compass, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';

interface LifeSituationsProps {
  onSelectSituation: (prompt: string) => void;
}

export const LifeSituations: React.FC<LifeSituationsProps> = ({ onSelectSituation }) => {
  const situations = [
    {
      emoji: '📚',
      title: 'Academic Pressure',
      subtitle: 'Exams, grades, and heavy workloads',
      prompt: 'I am feeling overwhelmed by academic pressure and scared of failing my exams. What does the Bhagavad Gita teach about effort and stress?'
    },
    {
      emoji: '😟',
      title: 'Stress & Anxiety',
      subtitle: 'Uncertainty about the future',
      prompt: 'I feel anxious and stressed about what lies ahead in the future. How can the teachings of the Gita help me find inner peace?'
    },
    {
      emoji: '💭',
      title: 'Overthinking',
      subtitle: 'Restless mind & racing thoughts',
      prompt: 'How can I stop overthinking and control my restless mind according to Krishna\'s teachings in Chapter 6?'
    },
    {
      emoji: '🔄',
      title: 'Handling Failure',
      subtitle: 'Setbacks, loss, and disappointment',
      prompt: 'I recently experienced a major failure and feel demotivated. What wisdom does the Gita provide on recovering from setbacks?'
    },
    {
      emoji: '⚖️',
      title: 'Difficult Decisions',
      subtitle: 'Passion vs. duty and responsibility',
      prompt: 'I don\'t know whether I should follow my personal passion or my family responsibilities. How does the Gita define true duty (Dharma)?'
    },
    {
      emoji: '🔥',
      title: 'Managing Anger',
      subtitle: 'Frustration and emotional outbursts',
      prompt: 'What does Krishna say about the root cause of anger and how to preserve clear reasoning when frustrated?'
    },
    {
      emoji: '😨',
      title: 'Fear & Hesitation',
      subtitle: 'Fear of judgement or taking risks',
      prompt: 'What does the Bhagavad Gita say about overcoming deep-seated fear and stepping forward with courage?'
    },
    {
      emoji: '💔',
      title: 'Relationship Conflicts',
      subtitle: 'Misunderstandings and emotional pain',
      prompt: 'How can I deal with relationship stress, hurt, and expectations using the Gita\'s principles of compassion and equanimity?'
    },
    {
      emoji: '🎯',
      title: 'Lack of Motivation',
      subtitle: 'Procrastination and feeling burnt out',
      prompt: 'I feel completely burnt out and lack motivation to fulfill my daily tasks. How can I rediscover purposeful action?'
    },
    {
      emoji: '🧭',
      title: 'Finding Direction',
      subtitle: 'Searching for meaning and calling',
      prompt: 'I feel lost and uncertain about my true purpose in life. What does the Gita teach about finding one\'s authentic path (Svadharma)?'
    }
  ];

  return (
    <section id="facing" className="py-14 md:py-22 bg-[#f7f3eb] border-y border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 border border-amber-300/80 text-amber-950 text-xs font-semibold">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Interactive Life Selector</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            What are you facing today?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Select a common challenge to immediately explore how the Bhagavad Gita addresses it with clarity and timeless wisdom.
          </p>
        </div>

        {/* Situations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {situations.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSituation(item.prompt)}
              className="p-5 rounded-2xl bg-[#faf6f0] hover:bg-amber-100/80 border border-amber-900/15 text-left transition-all hover:scale-[1.03] hover:shadow-lg shadow-xs group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-3xl block">{item.emoji}</span>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 pt-2 border-t border-amber-900/10 group-hover:text-amber-950">
                <span>Explore Wisdom</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

        {/* Responsible Disclaimer Box */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-amber-900/5 border border-amber-900/15 text-xs text-slate-700 space-y-2 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-900 uppercase tracking-wider block">Important Note</span>
            <p className="leading-relaxed font-sans">
              This application offers philosophical and educational perspectives from the Bhagavad Gita for self-reflection. It is not a substitute for professional clinical therapy, psychiatric treatment, or legal counsel. If you or someone you know is experiencing severe emotional distress, please reach out to qualified healthcare professionals or helpline resources.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
