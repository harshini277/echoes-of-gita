export interface GitaChapter {
  id: number;
  sanskritName: string;
  englishName: string;
  meaning: string;
  verseCount: number;
  summary: string;
  mainThemes: string[];
}

export const GITA_CHAPTERS: GitaChapter[] = [
  {
    id: 1,
    sanskritName: "Arjuna Vishada Yoga",
    englishName: "The Despair of Arjuna",
    meaning: "Observing the Armies on the Battlefield of Kurukshetra",
    verseCount: 47,
    summary: "Set on the sacred battlefield of Kurukshetra, Arjuna experiences paralyzing sorrow and doubt upon seeing friends, revered teachers, and kinsmen prepared to fight.",
    mainThemes: ["Duty vs. Emotion", "Dilemma", "Moral Conflict", "Despair"]
  },
  {
    id: 2,
    sanskritName: "Sankhya Yoga",
    englishName: "The Yoga of Knowledge",
    meaning: "Foundational Wisdom & Nature of the Self",
    verseCount: 72,
    summary: "Krishna begins his divine teaching, explaining the eternal, imperishable nature of the soul (Atman), the necessity of selfless duty (Karma Yoga), and the qualities of a person of steady wisdom (Sthitaprajna).",
    mainThemes: ["Eternity of the Soul", "Karma Yoga", "Equanimity", "Duty (Dharma)"]
  },
  {
    id: 3,
    sanskritName: "Karma Yoga",
    englishName: "The Yoga of Action",
    meaning: "Path of Selfless Action",
    verseCount: 43,
    summary: "Krishna explains why action is unavoidable in life and teaches how to perform work as a selfless offering without egoistic attachment to the fruits of results.",
    mainThemes: ["Selfless Action", "Duty without Attachment", "Loksangraha (Universal Welfare)", "Overcoming Desire"]
  },
  {
    id: 4,
    sanskritName: "Jnana Karma Sanyasa Yoga",
    englishName: "The Yoga of Wisdom & Renunciation of Action",
    meaning: "Divine Knowledge & Sacrifice",
    verseCount: 42,
    summary: "Krishna reveals the lineage of spiritual wisdom, the purpose of divine descent (Avatar), and how knowledge burns away the bondage of karma.",
    mainThemes: ["Sacred Knowledge", "Divine Descent", "Sacrifice (Yajna)", "Wisdom over Ignorance"]
  },
  {
    id: 5,
    sanskritName: "Karma Sanyasa Yoga",
    englishName: "The Yoga of Renunciation",
    meaning: "Action vs. Renunciation",
    verseCount: 29,
    summary: "Krishna clarifies that selfless action (Karma Yoga) and path of knowledge (Sanyasa) lead to the same supreme goal of inner peace and freedom.",
    mainThemes: ["Inner Peace", "True Renunciation", "Freedom from Ego", "Equanimity"]
  },
  {
    id: 6,
    sanskritName: "Dhyana Yoga (Abhyasa Yoga)",
    englishName: "The Yoga of Meditation",
    meaning: "Mastery of the Mind and Self-Discipline",
    verseCount: 47,
    summary: " Krishna outlines practical steps for meditation, mind control, self-mastery, and the balance required to achieve meditative absorption.",
    mainThemes: ["Mind Control", "Meditation", "Self-Discipline", "Persistence"]
  },
  {
    id: 7,
    sanskritName: "Jnana Vijnana Yoga",
    englishName: "The Yoga of Knowledge & Realization",
    meaning: "Ultimate Reality & Devotion",
    verseCount: 30,
    summary: "Krishna explains the material and spiritual energies of existence, revealing how the divine permeates all creation.",
    mainThemes: ["Material & Spiritual Nature", "Devotion", "Wisdom", "Types of Seekers"]
  },
  {
    id: 8,
    sanskritName: "Akshara Brahma Yoga",
    englishName: "The Yoga of the Eternal Supreme",
    meaning: "Imperishable Absolute Reality",
    verseCount: 28,
    summary: "Focuses on the nature of the ultimate reality, the art of living with single-pointed mindfulness, and the journey beyond mortality.",
    mainThemes: ["Mindfulness", "Eternal Truth", "Cycles of Creation", "Focus at Departure"]
  },
  {
    id: 9,
    sanskritName: "Raja Vidya Raja Guhya Yoga",
    englishName: "The Yoga of Sovereign Science & Secret",
    meaning: "The Royal Knowledge and Deep Mystery",
    verseCount: 34,
    summary: "Krishna reveals the profound truth of divine grace, showing how pure heartfelt devotion transcends rigid ritualism.",
    mainThemes: ["Divine Grace", "Heartfelt Devotion", "Universal Protection", "Inclusivity"]
  },
  {
    id: 10,
    sanskritName: "Vibhuti Yoga",
    englishName: "The Yoga of Divine Manifestations",
    meaning: "Divine Glory in Creation",
    verseCount: 42,
    summary: "Krishna describes how his divine essence shines through the greatest, most sublime aspects of nature, mind, and existence.",
    mainThemes: ["Divine Splendor", "Interconnectedness", "Beauty in Nature", "Cosmic Presence"]
  },
  {
    id: 11,
    sanskritName: "Vishwarupa Darsana Yoga",
    englishName: "The Yoga of the Vision of the Cosmic Form",
    meaning: "The Universal Form Revealed",
    verseCount: 55,
    summary: "Arjuna is granted divine vision to behold the breathtaking, awe-inspiring Vishwarupa—the entire cosmos existing within the divine manifestation.",
    mainThemes: ["Cosmic Vision", "Awe & Humility", "Time as the Transformer", "Surrender"]
  },
  {
    id: 12,
    sanskritName: "Bhakti Yoga",
    englishName: "The Yoga of Devotion",
    meaning: "The Path of Love & Dedication",
    verseCount: 20,
    summary: "Krishna delineates the qualities of a true devotee—compassion, humility, lack of malice, fortitude, and emotional balance.",
    mainThemes: ["Compassion", "Emotional Balance", "Unconditional Love", "Harmonious Living"]
  },
  {
    id: 13,
    sanskritName: "Kshetra Kshetrajna Vibhaga Yoga",
    englishName: "The Yoga of the Field and Its Knower",
    meaning: "Body, Soul & Consciousness",
    verseCount: 35,
    summary: "Explains the distinction between the physical body/mind ('the Field') and the eternal witnessing consciousness ('the Knower of the Field').",
    mainThemes: ["Consciousness", "Self-Awareness", "Observer vs. Observed", "Discernment"]
  },
  {
    id: 14,
    sanskritName: "Gunatraya Vibhaga Yoga",
    englishName: "The Yoga of the Three Gunas",
    meaning: "Qualities of Nature: Sattva, Rajas, Tamas",
    verseCount: 27,
    summary: "Describes the three subtle forces of nature—Sattva (harmony/clarity), Rajas (passion/restlessness), and Tamas (inertia/darkness)—and how to transcend them.",
    mainThemes: ["Three Gunas", "Mental Clarity", "Overcoming Inertia", "Inner Balance"]
  },
  {
    id: 15,
    sanskritName: "Purushottama Yoga",
    englishName: "The Yoga of the Supreme Person",
    meaning: "The Cosmic Tree & Supreme Reality",
    verseCount: 20,
    summary: "Metaphor of the inverted Ashvattha tree representing the cosmos, guiding how to cut attachment with the axe of wisdom.",
    mainThemes: ["Cosmic Metaphor", "Wisdom of Detachment", "Supreme Soul", "Illumination"]
  },
  {
    id: 16,
    sanskritName: "Daivasura Sampad Vibhaga Yoga",
    englishName: "The Yoga of Divine and Demonic Natures",
    meaning: "Virtues vs. Destructive Tendencies",
    verseCount: 24,
    summary: "Contrasts noble virtues (fearlessness, purity, charity, restraint) with destructive traits (arrogance, anger, deceit, greed).",
    mainThemes: ["Moral Values", "Character Building", "Virtue vs. Vice", "Self-Reflection"]
  },
  {
    id: 17,
    sanskritName: "Shraddhatraya Vibhaga Yoga",
    englishName: "The Yoga of the Threefold Faith",
    meaning: "Faith, Food, Habit, and Sacrifice",
    verseCount: 28,
    summary: "Analyzes how faith, food choices, charity, and self-discipline are influenced by the three Gunas (Sattva, Rajas, Tamas).",
    mainThemes: ["Mindful Habits", "Integrity", "Sacred Intent", "Threefold Faith"]
  },
  {
    id: 18,
    sanskritName: "Moksha Sanyasa Yoga",
    englishName: "The Yoga of Liberation through Renunciation",
    meaning: "Final Summary of Supreme Wisdom",
    verseCount: 78,
    summary: "The grand synthesis of the Bhagavad Gita, reiterating duty according to nature, surrender of fruits of action, courage, and ultimate spiritual liberation.",
    mainThemes: ["Synthesis of Wisdom", "Ultimate Surrender", "Freedom", "Living with Purpose"]
  }
];
