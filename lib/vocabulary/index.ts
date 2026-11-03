import type { Entry } from "../types";
import { b1Rows } from "./b1";
import { b2Rows } from "./b2";
import { c1Rows } from "./c1";

// Compact, authored word tables. Every line explicitly supplies a definition;
// no automatic translation, invented quotation, or live service is involved.
function entries(level: 1 | 2 | 3, table: string): Entry[] {
  return table.split("\n").map((line, index) => {
    const fields = line.split("|").map((field) => field.trim());
    if (fields.length !== 5 || fields.some((field) => !field))
      throw new Error(
        `Ungültiger Wörterbucheintrag: Stufe ${level}, Zeile ${index + 1}.`,
      );
    const [word, meaning, explanation, modern, related] = fields;
    return {
      word,
      difficulty: level,
      meaning,
      explanation,
      modern,
      related,
      note:
        level === 1
          ? "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz."
          : level === 2
            ? "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz."
            : "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
      demo: "",
      translation: "",
      context: "",
    };
  });
}
export const expandedVocabulary: Entry[] = [
  ...entries(1, b1Rows),
  ...entries(2, b2Rows),
  ...entries(3, c1Rows),
];
