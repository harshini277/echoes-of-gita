import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { retrieveRelevantVerses, formatVersesForRAGContext } from '@/lib/ragEngine';
import { GitaVerse } from '@/data/gitaData';

export interface ChatResponseBody {
  questionAnalysis: string;
  insight: string;
  primaryVerse: {
    id: string;
    chapter: number;
    verse: number;
    sanskrit: string;
    transliteration: string;
    translation: string;
    contextNote: string;
  };
  meaning: string;
  modernApplication: string;
  reflectionPrompt: string;
  secondaryVerses: {
    id: string;
    chapter: number;
    verse: number;
    sanskrit?: string;
    translation: string;
  }[];
  suggestedFollowUps: string[];
  isFallback?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, conversationHistory = [] } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Please enter a valid question or situation.' }, { status: 400 });
    }

    // 1. Retrieve RAG grounded verses from structured dataset
    const ragResult = retrieveRelevantVerses(message);
    const groundedContextText = formatVersesForRAGContext(ragResult.allMatchedVerses);
    const primary = ragResult.primaryVerse;

    const apiKey = process.env.GEMINI_API_KEY;
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

    // 2. Fallback mode if API key is missing or set to placeholder
    if (!apiKey || apiKey === 'your_api_key_here' || apiKey.includes('your_')) {
      console.warn('[Echoes of Gita] No valid GEMINI_API_KEY found. Running in Smart Fallback Demo Engine mode.');
      const fallbackResponse = generateSmartFallback(message, primary, ragResult.secondaryVerses);
      return NextResponse.json(fallbackResponse);
    }

    // 3. Call Gemini API securely via @google/genai SDK
    try {
      const ai = new GoogleGenAI({ apiKey });

      const safePrimarySanskrit = JSON.stringify(primary.sanskrit);
      const safePrimaryTrans = JSON.stringify(primary.transliteration);
      const safePrimaryTransEng = JSON.stringify(primary.translation);

      const systemInstruction = `
You are "Echoes of Gita AI", a thoughtful, knowledgeable, empathetic, and academic study companion for the Bhagavad Gita.
Your mission is to help users explore timeless teachings from the Bhagavad Gita and relate them to modern human challenges (stress, fear, failure, career choices, overthinking, relationships).

STRICT IDENTITY RULES:
1. NEVER claim to be Krishna, God, a deity, a spiritual authority, a therapist, or a doctor.
2. Always use humble, educational framing such as:
   - "According to the Bhagavad Gita..."
   - "In Chapter ${primary.chapter}, Verse ${primary.verse}, the text suggests..."
   - "A modern philosophical perspective is..."
3. Base your response primarily on the GROUNDED GITA VERSES provided below. Do NOT fabricate verse numbers or quotes.
4. Format your response strictly as valid JSON matching the specified schema.

GROUNDED GITA VERSES RETRIEVED FOR THIS USER QUESTION:
${groundedContextText}

RECENT CONVERSATION HISTORY:
${JSON.stringify(conversationHistory.slice(-4))}

JSON SCHEMA EXPECTED:
{
  "questionAnalysis": "1-2 empathetic sentences acknowledging the user's situation.",
  "insight": "Core Bhagavad Gita philosophical concept addressing this problem (2-3 sentences).",
  "primaryVerse": {
    "id": "${primary.id}",
    "chapter": ${primary.chapter},
    "verse": ${primary.verse},
    "sanskrit": ${safePrimarySanskrit},
    "transliteration": ${safePrimaryTrans},
    "translation": ${safePrimaryTransEng},
    "contextNote": "A sentence connecting why this specific verse was selected."
  },
  "meaning": "Simple, clear textual breakdown of the teaching.",
  "modernApplication": "Direct, actionable connection to the user's specific modern life dilemma.",
  "reflectionPrompt": "A practical reflection question (e.g. 'What is within your control right now?').",
  "secondaryVerses": [
    {
      "id": "BG-2.48",
      "chapter": 2,
      "verse": 48,
      "translation": "Brief translation of secondary verse"
    }
  ],
  "suggestedFollowUps": [
    "Suggested follow up question 1",
    "Suggested follow up question 2",
    "Suggested follow up question 3",
    "Suggested follow up question 4"
  ]
}
`;

      const response = await ai.models.generateContent({
        model: modelName,
        contents: [
          { role: 'user', parts: [{ text: `User Question: "${message}"` }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.3,
          responseMimeType: 'application/json',
        }
      });

      const responseText = response.text || '';
      
      try {
        // Strip markdown code block backticks if returned
        const cleanedText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanedText) as ChatResponseBody;
        return NextResponse.json(parsed);
      } catch (parseErr) {
        console.error('Failed to parse Gemini JSON output:', parseErr, responseText);
        const fallbackResponse = generateSmartFallback(message, primary, ragResult.secondaryVerses);
        return NextResponse.json(fallbackResponse);
      }
    } catch (geminiErr: any) {
      console.error('Gemini API Error:', geminiErr?.message || geminiErr);
      const fallbackResponse = generateSmartFallback(message, primary, ragResult.secondaryVerses);
      return NextResponse.json(fallbackResponse);
    }
  } catch (err: any) {
    console.error('Server error in /api/chat:', err);
    return NextResponse.json(
      { error: 'We encountered an issue connecting to the wisdom engine. Please try again.' },
      { status: 500 }
    );
  }
}

/**
 * Generate a smart grounded fallback response when API key is unconfigured or rate-limited
 */
function generateSmartFallback(message: string, primary: GitaVerse, secondaryList: GitaVerse[]): ChatResponseBody {
  return {
    questionAnalysis: `Your query touches on a deep human experience regarding "${message.slice(0, 45)}${message.length > 45 ? '...' : ''}". The Bhagavad Gita offers timeless guidance on navigating internal conflict and action.`,
    insight: `According to the Bhagavad Gita, much of our anxiety stems from confusing our effort with the eventual outcome. The text teaches equanimity (samatvam)—directing 100% of our focus to dedicated action while releasing obsession over results.`,
    primaryVerse: {
      id: primary.id,
      chapter: primary.chapter,
      verse: primary.verse,
      sanskrit: primary.sanskrit,
      transliteration: primary.transliteration,
      translation: primary.translation,
      contextNote: `Chapter ${primary.chapter}, Verse ${primary.verse} directly highlights the core principle needed for your situation.`
    },
    meaning: primary.explanation,
    modernApplication: `Applied to your current situation: Instead of allowing thoughts of potential failure or uncertainty to paralyze you, focus on the immediate next step within your direct control today. Let your effort be your sole metric of commitment.`,
    reflectionPrompt: `What single constructive step can you take today that is 100% within your control?`,
    secondaryVerses: secondaryList.map(v => ({
      id: v.id,
      chapter: v.chapter,
      verse: v.verse,
      sanskrit: v.sanskrit,
      translation: v.translation
    })),
    suggestedFollowUps: [
      "What does Krishna say about controlling the mind?",
      "How can I handle fear of failure in exams or career?",
      "Explain the concept of Karma Yoga in simpler terms.",
      "Show me another verse related to peace of mind."
    ],
    isFallback: true
  };
}
