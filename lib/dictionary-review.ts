import type { Entry } from "./types";
import { dictionaryReview } from "./vocabulary/review-data";

export type DictionaryChanges = Partial<
  Pick<
    Entry,
    | "word"
    | "meaning"
    | "explanation"
    | "modern"
    | "related"
    | "difficulty"
    | "note"
  >
>;
export type DictionaryCorrection = {
  word: string;
  previous: string;
  changes: DictionaryChanges;
  reason: string;
};

// A local change detector, not a security hash. Matching the old teaching fields
// keeps independently edited or AI-authored definitions out of this migration.
function fingerprint(text: string) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++)
    hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return `${text.length}:${(hash >>> 0).toString(16)}`;
}
export function definitionFingerprint(entry: Entry) {
  return fingerprint(
    JSON.stringify([
      entry.word,
      entry.meaning,
      entry.explanation,
      entry.modern,
      entry.related,
      entry.difficulty,
      entry.note,
    ]),
  );
}
const byWord = new Map<string, DictionaryCorrection>();
for (const correction of dictionaryReview) {
  byWord.set(correction.word, correction);
  if (correction.changes.word) byWord.set(correction.changes.word, correction);
}
export const dictionaryReviewVersion =
  "review-" + fingerprint(JSON.stringify(dictionaryReview));

export function applyDictionaryReview(entry: Entry): Entry {
  const correction = byWord.get(entry.word);
  return correction ? { ...entry, ...correction.changes } : entry;
}
export function reviewStoredDefinition(entry: Entry): Entry {
  const correction = byWord.get(entry.word);
  return correction && definitionFingerprint(entry) === correction.previous
    ? { ...entry, ...correction.changes }
    : entry;
}
