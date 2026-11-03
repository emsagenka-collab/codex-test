import { learningLexicon } from "./lexicon";
import { isKnownTurkishWordForm } from "./turkish-word-forms";

// Deliberately bounded: never infer arbitrary word boundaries from word length.
// These are attested whole forms, not every possible stem/suffix concatenation.
const knownForms = new Set(
  [
    ...learningLexicon.map((entry) => entry.word),
    "peygamber",
    "peygamberimiz",
    "peygamberimizin",
    "peygamberimize",
    "peygamberimizden",
    "peygamberimizi",
    "peygamberimizle",
    "peygamberler",
    "peygamberlerin",
    "peygamberlik",
    "tefekküre",
    "tefekkürü",
    "tefekkürün",
    "tefekkürle",
    "tefekkürden",
    "emaneti",
    "emanetin",
    "emanete",
    "emanetten",
    "emanetler",
    "emanetleri",
    "metaneti",
    "metanetini",
    "metanetlerini",
    "merhameti",
    "merhametle",
    "merhametli",
    "şefkati",
    "şefkatle",
    "şefkatli",
    "hicreti",
    "hicretin",
    "hicrete",
    "müjdeyi",
    "müjdeye",
    "müjdenin",
    "sadakati",
    "sadakatle",
    "istişareye",
    "istişareyi",
    "istişarenin",
    "sükûnetini",
    "sükûnetle",
    "fedakârlığı",
    "fedakârlıklar",
    "mukavemeti",
    "müsamaha",
    "ibaret",
    "akrabalık",
    "akrabalığın",
    "akrabalıkları",
    "anlayış",
    "anlayışı",
    "komşularla",
    "bildiriyor",
    "anlatıyor",
    "korumayı",
    "haklarını",
    "olduğunu",
    "söylemeyi",
    "geçinmeyi",
    "anlamını",
    "düşünüyordu",
    "nişanını",
    "verdiklerini",
    "bilesiniz",
    "dinliyordu",
    "buyur",
    "demektedir",
    "yağmuru",
    "memurum",
    "yapmıyorum",
    "edebileceklerini",
    "karısını",
    "gitmemişti",
    "komşularından",
    "mükafata",
    "müjdeleyin",
    "torunum",
    "sevgisiyle",
    "zararına",
    "parçalanan",
    "tahsis",
  ].map(normalizeForm),
);
function normalizeForm(word: string) {
  return word.normalize("NFC").toLocaleLowerCase("tr-TR").replace(/['’]/gu, "");
}
const standalone = new Set([
  "bu",
  "gün",
  "bir",
  "şey",
  "her",
  "çok",
  "az",
  "ne",
  "de",
  "da",
  "ki",
  "ile",
  "ve",
  "o",
  "ben",
  "sen",
  "biz",
  "siz",
  "var",
  "yok",
  "can",
  "ev",
  "el",
  "iş",
  "yol",
  "su",
  "an",
  "ana",
  "ata",
  "dil",
  "din",
  "hak",
  "halk",
  "iç",
  "dış",
  "öz",
  "üst",
  "alt",
  "yer",
  "yüz",
  "bin",
  "on",
  "son",
  "ilk",
  "kar",
  "kuş",
  "gül",
  ...learningLexicon.map((e) => normalizeForm(e.word)),
]);
export type WordBreakRepair = {
  start: number;
  end: number;
  original: string;
  replacement: string;
};
export type PdfWordBreakResult = { text: string; repairs: WordBreakRepair[] };
export type DocumentWordForms = ReadonlySet<string> & {
  readonly compounds?: ReadonlySet<string>;
};
const breakMarker = /[-\u00ad\u2010]/u;
function validGap(gap: string) {
  return /^(?:[ \t]+|[ \t]*\r?\n[ \t]*|[ \t]*[-\u2010](?:[ \t]*\r?\n[ \t]*|[ \t]+)|[ \t]*\u00ad[ \t]*(?:\r?\n[ \t]*)?)$/u.test(
    gap,
  );
}
/** Whole forms observed unbroken elsewhere in this document, scoped per book. */
export function observedWordForms(text: string): DocumentWordForms {
  // Inline hyphenated expressions attest a genuine compound, not a line wrap.
  const compounds = new Set(
    [...text.matchAll(/\p{L}+(?:['’]\p{L}+)?[-\u2010\u2011]\p{L}+/gu)].map(
      (match) => normalizeForm(match[0]).replace(/[-\u2010\u2011]/gu, "-"),
    ),
  );
  const forms = Object.assign(new Set<string>(), { compounds });
  const tokens = [...text.matchAll(/\p{L}+(?:['’]\p{L}+)*/gu)];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const before = text.slice(
      i ? tokens[i - 1].index! + tokens[i - 1][0].length : 0,
      token.index!,
    );
    const after = text.slice(
      token.index! + token[0].length,
      i + 1 < tokens.length ? tokens[i + 1].index! : text.length,
    );
    if (
      token[0].length < 3 ||
      /^[ \t]*[-\u00ad\u2010\u2011][ \t]*(?:\r?\n[ \t]*)?$/u.test(before) ||
      /^[ \t]*[-\u00ad\u2010\u2011]/u.test(after)
    )
      continue;
    forms.add(normalizeForm(token[0]));
    // "Mekke’ye" also attests the whole proper name "Mekke".
    const proper = token[0].match(/^(\p{Lu}\p{L}{2,})['’]/u)?.[1];
    if (proper) forms.add(normalizeForm(proper));
  }
  return forms;
}

/** Unverified line-end splits must not be displayed as damaged learning quotes.
 * A compound observed inline in the book, or a relation such as Türk-Alman,
 * retains its meaningful hyphen. Original source text is never edited. */
export function hasUnresolvedWordBreak(
  text: string,
  documentForms: DocumentWordForms = new Set(),
) {
  for (const match of text.matchAll(
    /(\p{L}+(?:['’]\p{L}+)*)[ \t]*([-\u00ad\u2010])[ \t]*\r?\n[ \t]*(\p{L}+(?:['’]\p{L}+)*)/gu,
  )) {
    if (match[2] !== "\u00ad") {
      const compound = normalizeForm(match[1] + "-" + match[3]);
      if (documentForms.compounds?.has(compound)) continue;
      if (/^\p{Lu}/u.test(match[1]) && /^\p{Lu}/u.test(match[3])) continue;
    }
    return true;
  }
  return false;
}
export function repairPdfWordBreaks(
  text: string,
  documentForms: DocumentWordForms = new Set(),
): PdfWordBreakResult {
  const tokens = [...text.matchAll(/\p{L}+(?:['’]\p{L}+)*/gu)];
  const forms = tokens.map((token) => normalizeForm(token[0]));
  const repairs: WordBreakRepair[] = [];
  for (let i = 0; i < tokens.length; i++) {
    let candidate = tokens[i][0];
    let candidateForm = forms[i];
    let explicitBreak = false;
    let onlyExplicitBreaks = true;
    const parts = [forms[i]];
    let best: { last: number; replacement: string } | null = null;
    for (
      let j = i + 1;
      j < tokens.length &&
      (j < i + 4 || onlyExplicitBreaks) &&
      candidate.length < 80;
      j++
    ) {
      const previous = tokens[j - 1];
      const gap = text.slice(
        previous.index! + previous[0].length,
        tokens[j].index!,
      );
      if (!validGap(gap)) break;
      if (j >= i + 4 && !breakMarker.test(gap)) break;
      explicitBreak ||= breakMarker.test(gap);
      onlyExplicitBreaks &&= breakMarker.test(gap);
      candidate += tokens[j][0];
      candidateForm += forms[j];
      parts.push(forms[j]);
      if (documentForms.compounds?.has(parts.join("-"))) break;
      // Both independently meaningful words may legitimately be separate.
      if (
        j === i + 1 &&
        !breakMarker.test(gap) &&
        standalone.has(forms[i]) &&
        standalone.has(forms[j])
      )
        continue;
      if (
        knownForms.has(candidateForm) ||
        (explicitBreak && documentForms.has(candidateForm)) ||
        (onlyExplicitBreaks && isKnownTurkishWordForm(candidateForm))
      ) {
        // Do not consume the start of a hyphenated word as the end of a
        // neighboring word: "gün dem-\nirci" must not become "gündem-\nirci".
        const next = tokens[j + 1];
        const followingGap = next
          ? text.slice(tokens[j].index! + tokens[j][0].length, next.index!)
          : "";
        if (!(breakMarker.test(followingGap) && validGap(followingGap)))
          best = { last: j, replacement: candidate };
      }
    }
    if (best) {
      const start = tokens[i].index!,
        last = tokens[best.last],
        end = last.index! + last[0].length;
      repairs.push({
        start,
        end,
        original: text.slice(start, end),
        replacement: best.replacement,
      });
      i = best.last;
    }
  }
  let repaired = text;
  for (const item of [...repairs].reverse())
    repaired =
      repaired.slice(0, item.start) +
      item.replacement +
      repaired.slice(item.end);
  return { text: repaired, repairs };
}
