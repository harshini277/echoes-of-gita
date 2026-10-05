import { GITA_VERSES, GitaVerse } from '@/data/gitaData';

export interface RAGResult {
  primaryVerse: GitaVerse;
  secondaryVerses: GitaVerse[];
  allMatchedVerses: GitaVerse[];
}

/**
 * Perform a keyword and semantic topic match to retrieve the most relevant Gita verses for a user query.
 */
export function retrieveRelevantVerses(query: string, limit: number = 3): RAGResult {
  const normalizedQuery = query.toLowerCase();
  const tokens = normalizedQuery
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(t => t.length > 2);

  const scoredVerses = GITA_VERSES.map(verse => {
    let score = 0;

    // Check exact topic match
    verse.topics.forEach(topic => {
      if (normalizedQuery.includes(topic.toLowerCase())) {
        score += 10;
      }
    });

    // Check keywords match
    verse.keywords.forEach(kw => {
      if (normalizedQuery.includes(kw.toLowerCase())) {
        score += 6;
      }
      tokens.forEach(token => {
        if (kw.toLowerCase().includes(token) || token.includes(kw.toLowerCase())) {
          score += 3;
        }
      });
    });

    // Check translation & explanation match
    tokens.forEach(token => {
      if (verse.translation.toLowerCase().includes(token)) score += 2;
      if (verse.explanation.toLowerCase().includes(token)) score += 1.5;
    });

    // Specific situation triggers
    if (normalizedQuery.includes('exam') || normalizedQuery.includes('study') || normalizedQuery.includes('academic')) {
      if (verse.id === 'BG-2.47' || verse.id === 'BG-6.26' || verse.id === 'BG-3.35') score += 12;
    }
    if (normalizedQuery.includes('fail') || normalizedQuery.includes('failure') || normalizedQuery.includes('lose')) {
      if (verse.id === 'BG-2.47' || verse.id === 'BG-2.48') score += 15;
    }
    if (normalizedQuery.includes('fear') || normalizedQuery.includes('scared') || normalizedQuery.includes('anxio')) {
      if (verse.id === 'BG-2.56' || verse.id === 'BG-18.66' || verse.id === 'BG-2.14') score += 12;
    }
    if (normalizedQuery.includes('mind') || normalizedQuery.includes('overthink') || normalizedQuery.includes('thought')) {
      if (verse.id === 'BG-6.5' || verse.id === 'BG-6.6' || verse.id === 'BG-6.26') score += 15;
    }
    if (normalizedQuery.includes('anger') || normalizedQuery.includes('furious') || normalizedQuery.includes('mad')) {
      if (verse.id === 'BG-2.62' || verse.id === 'BG-2.63' || verse.id === 'BG-12.13') score += 15;
    }
    if (normalizedQuery.includes('duty') || normalizedQuery.includes('karma') || normalizedQuery.includes('confus')) {
      if (verse.id === 'BG-2.47' || verse.id === 'BG-3.19' || verse.id === 'BG-3.35') score += 12;
    }

    return { verse, score };
  });

  // Sort descending by score
  scoredVerses.sort((a, b) => b.score - a.score);

  // If no high score, fallback to default high quality featured verses (BG-2.47, BG-6.5, BG-2.48)
  const topVerses = scoredVerses.filter(item => item.score > 0).map(item => item.verse);
  
  if (topVerses.length === 0) {
    topVerses.push(
      GITA_VERSES.find(v => v.id === 'BG-2.47') || GITA_VERSES[0],
      GITA_VERSES.find(v => v.id === 'BG-6.5') || GITA_VERSES[1],
      GITA_VERSES.find(v => v.id === 'BG-2.48') || GITA_VERSES[2]
    );
  }

  const primaryVerse = topVerses[0];
  const secondaryVerses = topVerses.slice(1, limit);

  return {
    primaryVerse,
    secondaryVerses,
    allMatchedVerses: topVerses.slice(0, limit)
  };
}

/**
 * Format verses into clean context for Gemini system prompt.
 */
export function formatVersesForRAGContext(verses: GitaVerse[]): string {
  return verses
    .map(
      (v, idx) => `
[GROUNDED VERSE ${idx + 1}]
Reference: Bhagavad Gita Chapter ${v.chapter}, Verse ${v.verse} (${v.id})
Sanskrit: ${v.sanskrit}
Transliteration: ${v.transliteration}
English Translation: ${v.translation}
Summary/Core Insight: ${v.explanation}
Keywords: ${v.keywords.join(', ')}
`
    )
    .join('\n---\n');
}
