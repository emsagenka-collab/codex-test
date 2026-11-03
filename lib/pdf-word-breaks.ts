import { learningLexicon } from "./lexicon";

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
function validGap(gap: string) {
  return /^(?:[ \t]+|[ \t]*\r?\n[ \t]*|[ \t]*-(?:[ \t]*\r?\n[ \t]*|[ \t]+)|[ \t]*\u00ad[ \t]*(?:\r?\n[ \t]*)?)$/u.test(
    gap,
  );
}
/** Whole forms observed unbroken elsewhere in this document, scoped per book. */
export function observedWordForms(text: string): ReadonlySet<string> {
  return new Set(
    [...text.matchAll(/\p{L}+(?:['’]\p{L}+)*/gu)]
      .filter(
        (match) =>
          match[0].length >= 3 &&
          !/[-\u00ad][ \t]*$/u.test(
            text.slice(Math.max(0, match.index! - 4), match.index!),
          ) &&
          !/^[ \t]*[-\u00ad]/u.test(
            text.slice(
              match.index! + match[0].length,
              match.index! + match[0].length + 4,
            ),
          ),
      )
      .map((match) => normalizeForm(match[0])),
  );
}
export function repairPdfWordBreaks(
  text: string,
  documentForms: ReadonlySet<string> = new Set(),
): PdfWordBreakResult {
  const tokens = [...text.matchAll(/\p{L}+(?:['’]\p{L}+)*/gu)];
  const forms = tokens.map((token) => normalizeForm(token[0]));
  const repairs: WordBreakRepair[] = [];
  for (let i = 0; i < tokens.length; i++) {
    let candidate = tokens[i][0];
    let candidateForm = forms[i];
    let explicitBreak = false;
    let best: { last: number; replacement: string } | null = null;
    for (let j = i + 1; j < tokens.length && j < i + 4; j++) {
      const previous = tokens[j - 1];
      const gap = text.slice(
        previous.index! + previous[0].length,
        tokens[j].index!,
      );
      if (!validGap(gap)) break;
      explicitBreak ||= /[-\u00ad]/u.test(gap);
      candidate += tokens[j][0];
      candidateForm += forms[j];
      // Both independently meaningful words may legitimately be separate.
      if (
        j === i + 1 &&
        !/[-\u00ad]/u.test(gap) &&
        standalone.has(forms[i]) &&
        standalone.has(forms[j])
      )
        continue;
      if (
        knownForms.has(candidateForm) ||
        (explicitBreak && documentForms.has(candidateForm))
      )
        best = { last: j, replacement: candidate };
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
