'use client';

import React, { useState } from 'react';
import { PlayCircle, CheckCircle, ChevronRight, X, Sparkles, Layers, BookOpen, MessageSquare } from 'lucide-react';

interface DemoModeBarProps {
  isOpen: boolean;
  onClose: () => void;
  onRunStep: (stepId: number) => void;
}

export const DemoModeBar: React.FC<DemoModeBarProps> = ({ isOpen, onClose, onRunStep }) => {
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const demoSteps = [
    {
      id: 1,
      title: 'Hero Overview & Context',
      desc: 'Introduce Echoes of Gita, tagline, and Bhishma Parva Mahabharata context.',
      actionLabel: 'Go to Hero Banner',
    },
    {
      id: 2,
      title: 'Ask the Gita: Academic Stress',
      desc: 'Simulate student asking: "I am scared of failing my exams. What does the Gita say?"',
      actionLabel: 'Send Exam Stress Question',
    },
    {
      id: 3,
      title: 'Grounded Verse & Modern Application',
      desc: 'Review RAG grounded verse (BG 2.47), Sanskrit, translation, and practical student guidance.',
      actionLabel: 'Highlight Response UI',
    },
    {
      id: 4,
      title: 'Life Situation Selector',
      desc: 'Demonstrate "What are you facing today?" cards (Overthinking, Anger, Career choices).',
      actionLabel: 'Open Life Situations',
    },
    {
      id: 5,
      title: 'Verse Explorer & Topic Filters',
      desc: 'Filter 700 verses by Chapter or Topic (Duty, Fear, Mind, Detachment).',
      actionLabel: 'Open Verse Explorer',
    },
    {
      id: 6,
      title: '18 Chapters Overview',
      desc: 'Inspect complete 18 chapters structure, Sanskrit names, and core themes.',
      actionLabel: 'Open 18 Chapters',
    },
    {
      id: 7,
      title: 'Verse for the Moment',
      desc: 'Demonstrate random verse generator with smooth animation.',
      actionLabel: 'Draw Random Verse',
    }
  ];

  const handleExecuteStep = (stepId: number) => {
    setCurrentStep(stepId);
    onRunStep(stepId);
  };

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[450px] z-50 animate-slideUp">
      <div className="bg-[#faf6f0] rounded-3xl p-5 border-2 border-amber-600/40 shadow-2xl space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-900/10 pb-3">
          <div className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-amber-700 animate-pulse" />
            <span className="font-serif font-bold text-sm text-slate-900">
              Live Faculty Presentation Assistant
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-amber-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Step Display */}
        <div className="p-3 rounded-2xl bg-amber-100/70 border border-amber-300/60 space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
            <span>Step {currentStep} of {demoSteps.length}</span>
            <span className="text-[11px] font-medium text-amber-800">Presentation Script</span>
          </div>
          <h4 className="font-serif font-bold text-sm text-slate-900">
            {demoSteps[currentStep - 1].title}
          </h4>
          <p className="text-xs text-slate-700 leading-snug">
            {demoSteps[currentStep - 1].desc}
          </p>
        </div>

        {/* Action Button for Step */}
        <button
          onClick={() => handleExecuteStep(currentStep)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white text-xs font-semibold shadow-md transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Execute Step {currentStep}: {demoSteps[currentStep - 1].actionLabel}</span>
        </button>

        {/* Navigation Step Dots */}
        <div className="flex items-center justify-between pt-1">
          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
            className="text-xs font-semibold text-amber-900 disabled:opacity-30 hover:underline"
          >
            ← Previous Step
          </button>

          <div className="flex gap-1">
            {demoSteps.map(s => (
              <button
                key={s.id}
                onClick={() => handleExecuteStep(s.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  s.id === currentStep ? 'bg-amber-700 w-5' : 'bg-amber-200 hover:bg-amber-400'
                }`}
                title={s.title}
              />
            ))}
          </div>

          <button
            disabled={currentStep === demoSteps.length}
            onClick={() => setCurrentStep(prev => Math.min(demoSteps.length, prev + 1))}
            className="text-xs font-semibold text-amber-900 disabled:opacity-30 hover:underline flex items-center gap-1"
          >
            <span>Next Step</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
