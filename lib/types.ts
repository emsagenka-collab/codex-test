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
export type Word = Entry & {
  id: number;
  sentence: string;
  section: string;
  sectionNumber: number;
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
  stats: { total: number; week: number; streak: number; studiedToday: number };
  settings: Settings;
  onboarded: boolean;
  aiAvailable: boolean;
};
