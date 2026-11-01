import { sentences, tokens } from "./learning";

// These are layout heuristics, not a complete Turkish grammar checker.
function hasPredicate(text: string) {
  return tokens(text).some((word) =>
    /(?:dı|di|du|dü|[pçtkfhsş](?:tı|ti|tu|tü)|mış|miş|muş|müş|yor|acak|ecek|malı|meli|dır|dir|dur|dür|tır|tir|tur|tür|maz|mez)(?:m|n|k|ız|iz|uz|üz|nız|niz|nuz|nüz|lar|ler)?$/u.test(
      word,
    ),
  );
}
function hasListMarker(text: string) {
  return /^(?:\(?[a-zçğıöşü][.)]{1,2}|[•●▪◦*–—-])\s*\p{L}/iu.test(text.trim());
}
export function isContentsText(text: string) {
  return text
    .split("\n")
    .some((line) =>
      /^(?:içindekiler(?: tablosu)?|fihrist|contents|table of contents)[\s.:–—-]*$/u.test(
        line.trim().normalize("NFC").toLocaleLowerCase("tr-TR"),
      ),
    );
}
function isHeadingOrIndex(text: string) {
  const line = text.trim();
  if (!line) return false;
  if (/^[\d\s\-–—.]+$/u.test(line) || /^[IVXLCDM]+[.)]?$/u.test(line))
    return true;
  if (
    /[.·…]{2,}\s*\d+(?:\s*[–-]\s*\d+)?\s*$/u.test(line) ||
    /\t+\d+\s*$/u.test(line)
  )
    return true;
  const words = line.match(/[\p{L}][\p{L}\p{M}'’]*/gu) || [];
  const letters = line.replace(/[^\p{L}]/gu, "");
  const capitals = letters && letters === letters.toLocaleUpperCase("tr-TR");
  const numbered =
    /^(?:\d+\s+)?(?:[IVXLCDM]+|\d+(?:\.\d+)*)(?:\s*[.)\-–—:]\s*|\s+)\p{L}/u.test(
      line,
    );
  const predicate = hasPredicate(line);
  if (
    !predicate &&
    words.length <= 16 &&
    /\s+\d+(?:\s*[–-]\s*\d+)?$/u.test(line)
  )
    return true;
  if (
    words.length <= 24 &&
    !predicate &&
    (capitals || numbered || hasListMarker(line))
  )
    return true;
  // Mixed-case chapter titles without sentence punctuation.
  const titleCase =
    words.length > 1 &&
    words.every(
      (word) =>
        /^(?:ve|ile|için|bir|ya|da|veya)$/u.test(word) || /^\p{Lu}/u.test(word),
    );
  return !predicate && titleCase && !/[.!?][”’"'»)]*$/u.test(line);
}
function isCompleteExample(text: string) {
  const words = tokens(text);
  // Participial noun phrases remain fragments even if PDF extraction adds a dot.
  // Keep true nominal clauses such as "Onlar hicret edenler.".
  const nominalClause =
    /^(?:bu|şu|o|bunlar|şunlar|onlar|ben|sen|biz|siz)\b/iu.test(text.trim());
  const participialEnding = /(?:an|en)(?:lar|ler)(?:ın|in|un|ün)?$/u.test(
    words.at(-1) || "",
  );
  if (!nominalClause && participialEnding && !hasPredicate(text)) return false;
  return (
    words.length >= 2 &&
    /[.!?][”’"'»)]*$/u.test(text) &&
    !isHeadingOrIndex(text)
  );
}
/** Return verbatim source excerpts, excluding obvious titles, indexes and fragments. */
export function exampleSentences(section: string): string[] {
  if (isContentsText(section)) return [];
  const result: string[] = [];
  let paragraph: string[] = [];
  function flush() {
    if (paragraph.length) {
      result.push(...sentences(paragraph.join("\n")).filter(isCompleteExample));
      paragraph = [];
    }
  }
  const lines = section.split("\n");
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const next = lines[index + 1]?.trim() || "";
    const wrappedListSentence =
      hasListMarker(line) &&
      !/[.!?][”’"'»)]*$/u.test(line.trim()) &&
      /^\p{Ll}/u.test(next) &&
      !hasListMarker(next);
    if (!line.trim() || (isHeadingOrIndex(line) && !wrappedListSentence))
      flush();
    else paragraph.push(line);
  }
  flush();
  return result;
}
