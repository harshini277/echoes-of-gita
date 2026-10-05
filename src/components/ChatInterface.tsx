'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, RefreshCw, Trash2, HelpCircle, Loader2, Compass, MessageSquare, AlertCircle } from 'lucide-react';
import { ResponseCard } from './ResponseCard';
import { ChatResponseBody } from '@/app/api/chat/route';

interface MessageItem {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  data?: ChatResponseBody;
}

interface ChatInterfaceProps {
  initialQuestion?: string;
  onExploreVerse: (chapter: number, verse: number) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  initialQuestion = '',
  onExploreVerse,
}) => {
  const [inputMessage, setInputMessage] = useState(initialQuestion);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    { title: "Dealing with Failure", text: "How should I deal with failure?" },
    { title: "Overcoming Fear", text: "What does the Gita say about fear?" },
    { title: "Mind Control", text: "How can I control my mind?" },
    { title: "Dilemma & Duty", text: "What is my duty when I am confused?" },
    { title: "Stress & Anxiety", text: "How do I handle stress and uncertainty?" },
    { title: "Attachment & Desires", text: "What does Krishna teach about attachment?" },
  ];

  useEffect(() => {
    if (initialQuestion && initialQuestion.trim().length > 0) {
      handleSendQuery(initialQuestion);
    }
  }, [initialQuestion]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendQuery = async (queryText: string) => {
    if (!queryText || queryText.trim().length === 0 || loading) return;

    const trimmed = queryText.trim();
    setErrorMsg(null);
    setInputMessage('');

    const userMsg: MessageItem = {
      id: Date.now().toString(),
      sender: 'user',
      text: trimmed,
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      // Build conversation context
      const history = messages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'model',
        content: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          conversationHistory: history,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response from backend');
      }

      const data: ChatResponseBody = await res.json();

      const aiMsg: MessageItem = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.insight || 'Insight retrieved.',
        data,
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err: any) {
      console.error('Chat submit error:', err);
      setErrorMsg("We're having trouble connecting to the wisdom engine right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setErrorMsg(null);
  };

  return (
    <section id="chat" className="py-12 md:py-20 bg-[#fbf9f4] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>AI Bhagavad Gita Companion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            Ask the Gita
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-sans">
            Describe a situation, feeling, or dilemma. Our AI companion grounds answers directly in Bhagavad Gita verses.
          </p>
        </div>

        {/* Starter Prompts (Shown if no messages yet) */}
        {messages.length === 0 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-widest justify-center">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Starter Questions</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {starterPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(prompt.text)}
                  className="p-4 rounded-2xl bg-[#faf6f0] hover:bg-amber-100/80 border border-amber-900/15 text-left transition-all hover:scale-[1.02] shadow-xs group space-y-1.5"
                >
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block group-hover:text-amber-900">
                    {prompt.title}
                  </span>
                  <p className="text-sm font-medium text-slate-800 leading-snug">
                    "{prompt.text}"
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Stream Messages */}
        {messages.length > 0 && (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button
                onClick={handleClearChat}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-rose-50 border border-amber-200 text-xs font-semibold text-slate-700 hover:text-rose-700 transition-all"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear Chat</span>
              </button>
            </div>

            {messages.map(msg => (
              <div key={msg.id} className="space-y-4">
                {msg.sender === 'user' ? (
                  <div className="flex justify-end">
                    <div className="max-w-lg bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-2xl rounded-tr-xs p-4 shadow-md text-sm sm:text-base font-medium">
                      <p className="text-amber-100 text-[11px] font-semibold uppercase tracking-wider mb-1">Your Question</p>
                      {msg.text}
                    </div>
                  </div>
                ) : (
                  msg.data && (
                    <ResponseCard
                      data={msg.data}
                      question={msg.text}
                      onExploreVerse={onExploreVerse}
                      onSelectFollowUp={(followUp) => handleSendQuery(followUp)}
                    />
                  )
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skeleton Loading State */}
        {loading && (
          <div className="p-6 rounded-3xl bg-[#faf6f0] border border-amber-900/15 shadow-md space-y-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-amber-700 animate-spin" />
              </div>
              <div className="space-y-1">
                <div className="h-4 w-48 bg-amber-200/60 rounded"></div>
                <div className="h-3 w-32 bg-amber-100 rounded"></div>
              </div>
            </div>
            <div className="h-20 bg-amber-100/50 rounded-xl"></div>
            <div className="h-32 bg-amber-100/70 rounded-xl"></div>
          </div>
        )}

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Chat Input Box */}
        <div className="bg-[#faf6f0] p-2 sm:p-3 rounded-2xl sm:rounded-full border border-amber-900/20 shadow-lg focus-within:border-amber-600 transition-all">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputMessage);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question or describe a situation (e.g. 'I am scared of failing my exams')..."
              className="w-full px-4 py-2 bg-transparent text-slate-900 text-sm sm:text-base placeholder-slate-400 focus:outline-none font-sans"
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading || !inputMessage.trim()}
              className={`p-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold shadow-md transition-all shrink-0 ${
                loading || !inputMessage.trim()
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-105 active:scale-95 shadow-amber-700/30'
              }`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </form>
        </div>

        {/* Subtle Non-Authoritative Disclaimer */}
        <p className="text-center text-[11px] text-slate-500 font-sans leading-normal max-w-lg mx-auto">
          Echoes of Gita AI is an educational study companion designed to facilitate reflection on Bhagavad Gita teachings. It does not replace professional medical, mental health, or legal advice.
        </p>

      </div>
    </section>
  );
};
