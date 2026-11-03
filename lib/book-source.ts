import { detectRunningHeaders, stripRunningHeaders } from "./running-headers";
import { exampleSentences } from "./example-sentences";
import { wordMatcher, normalize, tokens } from "./learning";
import { bookWordForms, repairTurkishText } from "./text-repair";

export type SourceSection = { id: number; sectionNumber: number; text: string };
export type SourceExample = {
  id: string;
  section: SourceSection;
  raw: string;
  sentence: string;
  start: number;
};
export function indexBookSource(sections: SourceSection[], legacy: boolean) {
  const documentForms = bookWordForms(
    sections.map((section) => section.text).join("\n\n"),
    legacy,
  );
  const headers = detectRunningHeaders(
    sections.map((section) => section.text).join("\n"),
    legacy,
  );
  const tokenCounts = new Map<string, number>();
  const excerpts: { example: SourceExample; words: string[] }[] = [];
  for (const section of sections) {
    const repaired = repairTurkishText(section.text, legacy, documentForms);
    for (const token of tokens(repaired))
      tokenCounts.set(token, (tokenCounts.get(token) || 0) + 1);
    let cursor = 0;
    for (const raw of exampleSentences(
      section.text,
      legacy,
      headers,
      documentForms,
    )) {
      const start = section.text.indexOf(raw, cursor);
      if (start < 0) continue;
      cursor = start + raw.length;
      const sentence = repairTurkishText(
        stripRunningHeaders(raw, headers, legacy),
        legacy,
        documentForms,
      )
        // A retained compound hyphen stays a hyphen across a line wrap.
        .replace(/(?<=\p{L})[ \t]*-[ \t]*\r?\n[ \t]*(?=\p{L})/gu, "-")
        .replace(/\s+/gu, " ")
        .trim();
      excerpts.push({
        example: {
          id: `section-${section.id}-${start}`,
          section,
          raw,
          sentence,
          start,
        },
        words: [...new Set(tokens(sentence))],
      });
    }
  }
  const cache = new Map<
    string,
    { frequency: number; examples: SourceExample[] }
  >();
  return {
    forWord(word: string) {
      const key = normalize(word);
      if (!cache.has(key)) {
        const matches = wordMatcher(key);
        let frequency = 0;
        for (const [token, count] of tokenCounts)
          if (matches(token)) frequency += count;
        cache.set(key, {
          frequency,
          examples: excerpts
            .filter(({ words }) => words.some(matches))
            .map(({ example }) => example),
        });
      }
      return cache.get(key)!;
    },
  };
}
