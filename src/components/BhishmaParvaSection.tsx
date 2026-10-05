'use client';

import React from 'react';
import { ScrollText, Compass, Shield, Flame, BookOpen, Sun } from 'lucide-react';

export const BhishmaParvaSection: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'The Battlefield of Kurukshetra',
      description: 'Set between two vast armies poised for conflict, Kurukshetra symbolizes the external and internal battlegrounds where duty and moral choices collide.'
    },
    {
      icon: Compass,
      title: 'Arjuna\'s Moral Dilemma',
      description: 'Facing revered teachers and relatives, Arjuna drops his bow in grief, torn between emotional attachment and his solemn responsibility as a warrior.'
    },
    {
      icon: Sun,
      title: 'Krishna as Charioteer & Teacher',
      description: 'Krishna assumes the role of charioteer (Parthasarathy), guiding Arjuna from emotional paralysis to profound clarity of mind and resolute action.'
    },
    {
      icon: Flame,
      title: 'Universal Modern Relevance',
      description: 'Though spoken on a battlefield, the Gita\'s dialogue addresses universal human struggles: fear of failure, overthinking, career choices, and purpose.'
    }
  ];

  return (
    <section id="bhishma" className="py-14 md:py-22 bg-[#fbf9f4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-semibold">
            <ScrollText className="w-4 h-4 text-amber-700" />
            <span>Mahabharata Context</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            Where the Gita Begins: The Bhishma Parva
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            The Bhagavad Gita is not an isolated treatise; it is the philosophical core embedded within Chapters 23–40 of the Bhishma Parva, the sixth book of the Mahabharata.
          </p>
        </div>

        {/* Narrative Feature Card */}
        <div className="bg-[#faf6f0] rounded-3xl p-6 sm:p-10 border border-amber-900/15 shadow-xl space-y-6 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                Historical & Philosophical Setting
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                From Crisis on the Chariot to Timeless Wisdom
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                Just as the great war of Kurukshetra is about to commence, Arjuna experiences intense existential panic. Seeing loved ones lined up on both sides, he questions the purpose of his actions. Krishna does not offer shallow reassurance; instead, he delivers a profound exposition on consciousness, duty (Dharma), action (Karma), knowledge (Jnana), and love (Bhakti).
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-900/5 border border-amber-900/10 text-xs sm:text-sm text-amber-950 font-serif italic">
                "The conversation begins when Arjuna stops offering excuses and asks Krishna as a sincere disciple: 'Tell me clearly what is best for me.'"
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50 text-center space-y-3 shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-amber-950/40 flex items-center justify-center border border-amber-300/40">
                  <ScrollText className="w-7 h-7 text-amber-200" />
                </div>
                <h4 className="font-serif font-bold text-lg">Bhishma Parva</h4>
                <p className="text-xs text-amber-100/90 leading-relaxed font-sans">
                  Book 6 of the Mahabharata contains 117 chapters. Chapters 23 through 40 constitute the 700 sacred verses of the Bhagavad Gita.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf6f0] p-6 rounded-3xl border border-amber-900/15 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
