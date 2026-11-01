import { sentences, tokens } from "./learning";

// These are layout heuristics, not a complete Turkish grammar checker.
function hasPredicate(text: string) {
  return tokens(text).some((word) =>
    /(?:dı|di|du|dü|[pçtkfhsş](?:tı|ti|tu|tü)|mış|miş|muş|müş|yor|acak|ecek|malı|meli|dır|dir|dur|dür|tır|tir|tur|tür|maz|mez)(?:m|n|k|ız|iz|uz|üz|nız|niz|nuz|nüz|lar|ler)?$/u.test(
      word,
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
  if (words.length <= 20 && !predicate && (capitals || numbered)) return true;
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
  return (
    tokens(text).length >= 2 &&
    /[.!?][”’"'»)]*$/u.test(text) &&
    !isHeadingOrIndex(text)
  );
}
/** Return verbatim source excerpts, excluding obvious titles, indexes and fragments. */
export function exampleSentences(section: string): string[] {
  const result: string[] = [];
  let paragraph: string[] = [];
  function flush() {
    if (paragraph.length) {
      result.push(...sentences(paragraph.join("\n")).filter(isCompleteExample));
      paragraph = [];
    }
  }
  for (const line of section.split("\n")) {
    if (!line.trim() || isHeadingOrIndex(line)) flush();
    else paragraph.push(line);
  }
  flush();
  return result;
}
