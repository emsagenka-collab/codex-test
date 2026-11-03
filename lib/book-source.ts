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
  // Index quotes once, instead of rescanning every word of every quote for
  // every dictionary entry. Keep source order and distinct raw occurrences.
  const examplesByToken = new Map<string, SourceExample[]>();
  const sourceOrder = new Map<SourceExample, number>();
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
        .replace(
          /(?<=\p{L})[ \t]*([-\u2010])[ \t]*\r?\n[ \t]*(?=\p{L})/gu,
          "$1",
        )
        .replace(/\s+/gu, " ")
        .trim();
      const example: SourceExample = {
        id: `section-${section.id}-${start}`,
        section,
        raw,
        sentence,
        start,
      };
      sourceOrder.set(example, sourceOrder.size);
      for (const token of new Set(tokens(sentence))) {
        if (!examplesByToken.has(token)) examplesByToken.set(token, []);
        examplesByToken.get(token)!.push(example);
      }
    }
  }
  // Cleaned display quotes can contain repaired words that were split by a
  // running page header in the raw section. Retain their example lookup too.
  const indexedTokens = new Set([
    ...tokenCounts.keys(),
    ...examplesByToken.keys(),
  ]);
  // Every accepted inflection starts with a compiled base/stem prefix. Avoid
  // scanning the whole book vocabulary for each of thousands of dictionary rows.
  const tokensByPrefix = new Map<string, string[]>();
  for (const token of indexedTokens) {
    for (const prefix of new Set([token.slice(0, 1), token.slice(0, 2)])) {
      if (!tokensByPrefix.has(prefix)) tokensByPrefix.set(prefix, []);
      tokensByPrefix.get(prefix)!.push(token);
    }
  }
  const cache = new Map<
    string,
    { frequency: number; examples: SourceExample[] }
  >();
  return {
    repairText: (text: string) =>
      repairTurkishText(text, legacy, documentForms),
    forWord(word: string) {
      const key = normalize(word);
      if (!cache.has(key)) {
        const matches = wordMatcher(key);
        let frequency = 0;
        const examples = new Set<SourceExample>();
        const candidates = new Set(
          matches.prefixes.flatMap(
            (prefix) => tokensByPrefix.get(prefix) || [],
          ),
        );
        for (const token of candidates) {
          if (!matches(token)) continue;
          frequency += tokenCounts.get(token) || 0;
          for (const example of examplesByToken.get(token) || [])
            examples.add(example);
        }
        cache.set(key, {
          frequency,
          examples: [...examples].sort(
            (a, b) => sourceOrder.get(a)! - sourceOrder.get(b)!,
          ),
        });
      }
      return cache.get(key)!;
    },
  };
}
