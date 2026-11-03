import type { OrthographyResult } from "./orthography";
export type Entry = {
  word: string;
  meaning: string;
  explanation: string;
  modern: string;
  difficulty: number;
  note: string;
  related: string;
  demo: string;
  translation: string;
  context: string;
};
export type SourcePage = {
  pageNumber: number;
  text: string;
};
export type ExtractedDocument = {
  text: string;
  pages: SourcePage[];
};
export type WordExample = {
  id: string;
  sentence: string;
  sectionNumber: number;
  pageNumber: number | null;
  pageEnd: number | null;
  source: string;
  demoBook: boolean;
  sentenceTranslation: string;
};
export type Word = Entry & {
  examples: WordExample[];
  id: number;
  sentence: string;
  orthography: OrthographyResult;
  wordOrthography: OrthographyResult;
  originalSentence: string | null;
  originalSection: string | null;
  section: string;
  sectionNumber: number;
  pageNumber: number | null;
  pageEnd: number | null;
  source: string;
  demoBook: boolean;
  sentenceTranslation: string;
  contextExplanation: string;
  frequency: number;
  status: string;
  firstSeen: string | null;
  lastReviewed: string | null;
  nextReview: string | null;
  reviewCount: number;
  rating: string | null;
};
export type Settings = {
  dailyWordCount: number;
  level: string;
  theme: string;
  textSize: string;
  reminder: string;
  timezone: string;
};
export type State = {
  today: string;
  daily: Word[];
  vocabulary: Word[];
  due: Word[];
  book: {
    id: number;
    title: string;
    importedAt: string;
    isDemo: number;
    sectionCount: number;
    matchedCount: number;
  } | null;
  levelProgress: {
    level: string;
    total: number;
    remaining: number;
    processed: number;
    completed: boolean;
    nextLevel: string | null;
  };
  levelCounts: { B1: number; B2: number; C1: number };
  dictionaryCounts: { B1: number; B2: number; C1: number };
  stats: { total: number; week: number; streak: number; studiedToday: number };
  settings: Settings;
  onboarded: boolean;
  aiAvailable: boolean;
};
