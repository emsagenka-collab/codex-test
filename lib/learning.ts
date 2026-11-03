export function dayKey(now = new Date(), timezone = "Europe/Berlin"): string {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export function addDays(day: string, days: number) {
  const d = new Date(day + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
export function normalize(value: string) {
  return value
    .normalize("NFC")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("â", "a")
    .replaceAll("î", "i")
    .replaceAll("û", "u");
}
export function tokens(text: string) {
  return [...text.matchAll(/[\p{L}]+/gu)].map((m) => normalize(m[0]));
}
// Only common Turkish inflections are accepted; substring matches never establish an occurrence.
const suffix =
  /^(?:lar|ler|ın|in|un|ün|nın|nin|nun|nün|ı|i|u|ü|yı|yi|yu|yü|a|e|ya|ye|da|de|ta|te|dan|den|tan|ten|la|le|yla|yle|dır|dir|dur|dür|tır|tir|tur|tür|sı|si|su|sü|sını|sini|sunu|sünü|sına|sine|suna|süne|sında|sinde|sunda|sünde|sından|sinden|sundan|sünden|sının|sinin|sunun|sünün|ıyla|iyle|uyla|üyle|sıyla|siyle|suyla|süyle|ını|ini|unu|ünü|ına|ine|una|üne|ında|inde|unda|ünde|ından|inden|undan|ünden|ları|leri|ların|lerin|larının|lerinin|larını|lerini|larına|lerine|larında|lerinde|larından|lerinden|lara|lere|larda|lerde|lardan|lerden|ım|im|um|üm|ımız|imiz|umuz|ümüz)$/;

// Explicit historical spellings and established vowel-loss stems. Neither these
// aliases nor matching modernize the stored quotation or use substring guesses.
const historicalForms: Record<string, string[]> = {
  antlaşma: ["andlaşma"],
  tövbe: ["tevbe"],
  tevhit: ["tevhid"],
  ashap: ["ashab"],
  harp: ["harb"],
  irşat: ["irşad"],
  mürşit: ["mürşid"],
  itikat: ["itikad"],
  şehadet: ["şahadet"],
  akait: ["akaid"],
  züht: ["zühd"],
};
const vowelLoss: Record<string, string> = {
  akıl: "akl",
  fikir: "fikr",
  hüküm: "hükm",
  ilim: "ilm",
  izin: "izn",
  emir: "emr",
  sabır: "sabr",
  şükür: "şükr",
  ömür: "ömr",
  vakit: "vakt",
  nakil: "nakl",
  fetih: "feth",
  hısım: "hısm",
  rızık: "rızk",
  lütuf: "lütf",
};
const softened: Record<string, string> = { k: "ğ", t: "d", p: "b", ç: "c" };
/** Compile once per lemma; the returned predicate accepts normalized tokens. */
export function wordMatcher(word: string) {
  const key = normalize(word);
  const forms = [key, ...(historicalForms[key] || [])].map((form) => ({
    form,
    stem:
      vowelLoss[form] ||
      (softened[form.at(-1) || ""]
        ? form.slice(0, -1) + softened[form.at(-1)!]
        : ""),
  }));
  return (token: string) =>
    forms.some(
      ({ form, stem }) =>
        token === form ||
        (token.startsWith(form) && suffix.test(token.slice(form.length))) ||
        (!!stem &&
          token.startsWith(stem) &&
          /^[aeıioöuü]/u.test(token.slice(stem.length)) &&
          suffix.test(token.slice(stem.length))),
    );
}
export function matches(token: string, word: string) {
  return wordMatcher(word)(normalize(token));
}
export function containsWord(sentence: string, word: string) {
  return tokens(sentence).some(wordMatcher(word));
}
export function splitSections(text: string) {
  // Preserve short source paragraphs too; sentence eligibility must not change
  // the word count of the original text.
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .flatMap((p) => {
      const parts = sentenceParts(p.trim());
      const groups: string[] = [];
      let current = "";
      for (const s of parts) {
        if (current.length + s.length > 2400 && current) {
          groups.push(current.trim());
          current = "";
        }
        current += s;
      }
      if (current.trim()) groups.push(current.trim());
      return groups;
    })
    .filter((p) => p.length > 0);
}
export function sentences(section: string) {
  return sentenceParts(section)
    .map((x) => x.trim())
    .filter(Boolean);
}
function sentenceParts(text: string): string[] {
  // Mask abbreviation/number dots at equal length so returned spans remain
  // verbatim, including PDF line breaks and page decorations.
  const protectedText = text
    .replace(
      /\b(?:Hz|Dr|Prof|Doç|Av|Sn|vb|vs|bk|örn|s\.a\.s|a\.s|r\.a|b)\./giu,
      (abbreviation) => abbreviation.replaceAll(".", "\uff0e"),
    )
    .replace(
      /\b\p{Lu}\.(?=\s+\p{Lu})|(?<=\d)\.(?=\d|\s+\p{Ll})|\b[IVXLCDM]+\.(?=\s+\p{L})/gu,
      (numberOrInitial) => numberOrInitial.replaceAll(".", "\uff0e"),
    );
  return [...protectedText.matchAll(/[^.!?]+(?:[.!?]+[”’"'»)]*|$)/gu)].map(
    (match) => text.slice(match.index!, match.index! + match[0].length),
  );
}
export function schedule(rating: string, reviewCount: number, today: string) {
  const intervals: Record<string, number> = {
    understood: Math.min(60, 4 * 2 ** Math.min(reviewCount, 4)),
    unsure: 2,
    hard: 1,
    later: 1,
    easy: Math.min(90, 7 * 2 ** Math.min(reviewCount, 4)),
    good: Math.min(60, 3 * 2 ** Math.min(reviewCount, 4)),
    known: 90,
  };
  if (!(rating in intervals)) throw new Error("Ungültige Bewertung.");
  return {
    status:
      rating === "hard"
        ? "difficult"
        : rating === "unsure"
          ? "learning"
          : rating === "later"
            ? "deferred"
            : "learned",
    nextReview: addDays(today, intervals[rating]),
  };
}
