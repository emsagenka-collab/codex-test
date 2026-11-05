export const ORTHOGRAPHY_STANDARD = {
  name: "Türkisch · TDK-orientiert",
  version: "1.0",
  source: "https://tdk.gov.tr/icerik/yazim-kurallari/",
  dictionary: "https://sozluk.gov.tr/",
  coverage:
    "Ausgewählte eindeutige Schreibungen. Keine vollständige Rechtschreib- oder Grammatikprüfung; historische Zitate bleiben unverändert.",
};
export type SpellingIssue = {
  start: number;
  end: number;
  original: string;
  replacement: string;
  rule: string;
  explanation: string;
  source: string;
};
export type OrthographyResult = { issues: SpellingIssue[]; suggestion: string };
type Rule = {
  id: string;
  pattern: RegExp;
  replacement: string;
  explanation: string;
  source: string;
};
const compoundExplanation =
  "Nach der türkischen Standardschreibung wird dieser Ausdruck zusammengeschrieben.";
const separateExplanation =
  "„Şey“ wird in diesen Verbindungen als eigenes Wort geschrieben.";
const rules: Rule[] = [];
function add(
  id: string,
  forms: string[],
  replacement: string,
  explanation: string,
  source = ORTHOGRAPHY_STANDARD.source,
) {
  const pattern = new RegExp(
    "(?<![\\p{L}\\p{M}\\d])(?:" +
      forms
        .flatMap((s) => [
          s,
          s.toLocaleUpperCase("tr-TR"),
          s[0].toLocaleUpperCase("tr-TR") + s.slice(1),
        ])
        .map((s) =>
          s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replaceAll(" ", "[ \\t]+"),
        )
        .join("|") +
      ")(?![\\p{L}\\p{M}\\d])",
    "giu",
  );
  rules.push({ id, pattern, replacement, explanation, source });
}
// Explicit forms avoid guessing suffixes, names, historical spellings or de/da/ki.
for (const suffix of ["", "i", "e", "in", "den", "de", "le"])
  add(
    "separate-sey",
    ["hiç birşey" + suffix],
    "hiçbir şey" + suffix,
    separateExplanation,
  );
for (const prefix of ["her", "bir", "hiçbir"])
  for (const suffix of ["", "i", "e", "in", "den", "de", "le"]) {
    add(
      "separate-sey",
      [prefix + "şey" + suffix],
      prefix + " şey" + suffix,
      separateExplanation,
    );
  }
for (const [from, to] of [
  ["bir kaç", "birkaç"],
  ["bir çok", "birçok"],
  ["hiç bir", "hiçbir"],
] as const)
  add("compound-quantifier", [from], to, compoundExplanation);
add(
  "separate-pek-cok",
  ["pekçok"],
  "pek çok",
  "„Pek çok“ wird getrennt geschrieben.",
);
for (const [from, to] of [
  ["yanlız", "yalnız"],
  ["yalnış", "yanlış"],
  ["herkez", "herkes"],
  ["orjinal", "orijinal"],
  ["süpriz", "sürpriz"],
  ["şöför", "şoför"],
  ["traş", "tıraş"],
  ["eksoz", "egzoz"],
] as const) {
  add(
    "dictionary-spelling",
    [from],
    to,
    `Die heutige Standardform lautet „${to}“.`,
    ORTHOGRAPHY_STANDARD.dictionary,
  );
}
function matchCase(original: string, replacement: string) {
  if (original === original.toLocaleUpperCase("tr-TR"))
    return replacement.toLocaleUpperCase("tr-TR");
  const first = original[0];
  if (
    first === first.toLocaleUpperCase("tr-TR") &&
    first !== first.toLocaleLowerCase("tr-TR")
  )
    return replacement[0].toLocaleUpperCase("tr-TR") + replacement.slice(1);
  return replacement;
}
export function checkTurkishOrthography(text: string): OrthographyResult {
  const issues: SpellingIssue[] = [];
  for (const rule of rules) {
    rule.pattern.lastIndex = 0;
    for (const match of text.matchAll(rule.pattern)) {
      const start = match.index!,
        end = start + match[0].length;
      if (issues.some((i) => start < i.end && end > i.start)) continue;
      issues.push({
        start,
        end,
        original: match[0],
        replacement: matchCase(match[0], rule.replacement),
        rule: rule.id,
        explanation: rule.explanation,
        source: rule.source,
      });
    }
  }
  issues.sort((a, b) => a.start - b.start);
  let suggestion = text;
  for (const issue of [...issues].reverse())
    suggestion =
      suggestion.slice(0, issue.start) +
      issue.replacement +
      suggestion.slice(issue.end);
  return { issues, suggestion };
}
