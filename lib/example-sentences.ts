import { isRunningHeader, maskRunningHeaders } from "./running-headers";
import { repairTurkishText, hasLegacyTurkishGlyphs } from "./text-repair";
import { sentences, tokens } from "./learning";

// Conservative source selection: uncertainty should omit an example, not turn
// a heading/list/table cell into a quote. This is not a full grammar parser.
function hasPredicate(text: string) {
  const words = tokens(text);
  const last = words.at(-1) || "";
  if (
    /(?:dı|di|du|dü|[pçtkfhsş](?:tı|ti|tu|tü)|mış|miş|muş|müş|yor|acak|ecek|malı|meli|dır|dir|dur|dür|tır|tir|tur|tür|maz|mez)(?:m|n|k|ız|iz|uz|üz|nız|niz|nuz|nüz|lar|ler)?$/u.test(
      last,
    )
  )
    return true;
  const singular = last.replace(/(?:lar|ler)$/u, "");
  if (
    /(?:[aeıiuü]r)(?:[ıiuü]m|s[ıiuü]n|[ıiuü]z|s[ıiuü]n[ıiuü]z)?$/u.test(
      singular,
    )
  )
    return true;
  if (["var", "yok"].includes(last)) return true;
  if (/^(?:bu|şu|o|bunlar|şunlar|onlar|ben|sen|biz|siz)\b/iu.test(text.trim()))
    return true;
  // A short imperative can be a complete prose sentence too.
  return (
    /[!?][”’"'»)]*$/u.test(text.trim()) &&
    words.some((word) =>
      /^(?:koru|koruyun|düşün|düşünün|unutma|unutmayın|sakın|bak|bakın|dinle|dinleyin)$/u.test(
        word,
      ),
    )
  );
}
function contentStart(text: string) {
  return text.trim().replace(/^[„“"'«]+\s*/u, "");
}
export function isListLine(text: string) {
  const line = contentStart(text);
  // A speech dash followed by an explicit reporting verb is dialogue, not a list.
  if (
    /^[–—-]\s+\p{L}/u.test(line) &&
    /(?:^|\s)(?:dedi|diyor|buyurdu|sordu|söyledi)[,;:.!?]?(?:\s|$)/u.test(line)
  )
    return false;
  return (
    /^(?:\d+\s+)?(?:\(?[a-zçğıöşü][.)]{1,2}|\(?\d+(?:\.\d+)*[.)\-–:]|[IVXLCDM]+[.)\-–:]|[›»>→➜➤‣∙·●○◦◆◇▪▫*+•–—-]+(?:\s*[.)])?)\s*\S/iu.test(
      line,
    ) || /^[^\p{L}\p{N}\s(]/u.test(line)
  );
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
function isTableLine(text: string) {
  if (
    /[|¦│┃]/u.test(text) ||
    /^\s*[+─━┌┐└┘├┤┬┴┼-]{3,}/u.test(text) ||
    /^\s*(?:tablo|çizelge|table)\s*\d*\s*[:.–-]/iu.test(text)
  )
    return true;
  const cells = text
    .split(/\t+| {2,}/u)
    .map((cell) => cell.trim())
    .filter(Boolean);
  if (cells.length < 2) return false;
  // PDF justification also uses wide spaces/tabs. It is not by itself a table.
  const numericCell = cells.some((cell) =>
    /^\d+(?:[.,:/–-]\d+)*[.)]?$/u.test(cell),
  );
  const columnLabel = /^(?:olay|tarih|yıl|yer|sayı|açıklama)$/iu.test(cells[0]);
  return numericCell || columnLabel;
}
function isHeadingOrIndex(text: string) {
  const line = contentStart(text);
  if (!line) return false;
  if (isListLine(line) || isTableLine(line)) return true;
  if (/^[\d\s\-–—.]+$/u.test(line) || /^[IVXLCDM]+[.)]?$/u.test(line))
    return true;
  if (/[.·…]{2,}\s*\d+(?:\s*[–-]\s*\d+)?\s*$/u.test(line)) return true;
  const words = tokens(line);
  if (
    !hasPredicate(line) &&
    words.length <= 24 &&
    /\s+\d+(?:\s*[–-]\s*\d+)?$/u.test(line)
  )
    return true;
  const letters = line.replace(/[^\p{L}]/gu, "");
  return (
    !hasPredicate(line) &&
    !!letters &&
    letters === letters.toLocaleUpperCase("tr-TR")
  );
}
function isCompleteExample(text: string) {
  return (
    tokens(text).length >= 2 &&
    /[.!?][”’"'»)]*$/u.test(text) &&
    !isHeadingOrIndex(text) &&
    hasPredicate(text)
  );
}
/** Keep only verbatim prose; reject list/table blocks before sentence splitting. */
export function exampleSentences(
  section: string,
  legacy = hasLegacyTurkishGlyphs(section),
  headers = new Set<string>(),
): string[] {
  if (isContentsText(repairTurkishText(section, legacy))) return [];
  const result: string[] = [];
  for (const block of section.split(/\n\s*\n/u)) {
    const lines = block.split("\n");
    let inTable = false;
    let paragraph: string[] = [];
    let inList = false;
    function flush() {
      const raw = paragraph.join("\n");
      const masked = maskRunningHeaders(raw, headers, legacy);
      let cursor = 0;
      for (const sentence of sentences(masked)) {
        const start = masked.indexOf(sentence, cursor);
        cursor = start + sentence.length;
        if (
          start >= 0 &&
          isCompleteExample(repairTurkishText(sentence, legacy))
        )
          result.push(raw.slice(start, cursor));
      }
      paragraph = [];
    }
    for (const line of lines) {
      const analysis = repairTurkishText(line, legacy);
      if (isRunningHeader(line, headers, legacy)) {
        paragraph.push(line);
        continue;
      }
      if (isTableLine(analysis)) {
        flush();
        inTable = true;
        continue;
      }
      // Do not discard preceding prose merely because a table follows it.
      if (inTable) continue;
      if (isListLine(analysis)) {
        flush();
        // A chapter heading may immediately precede a wrapped prose paragraph.
        // List items, in contrast, also exclude their continuation lines.
        inList = !(
          !hasPredicate(analysis) &&
          (/^(?:\d+\s+)?[IVXLCDM]+[.\-–—:]/u.test(contentStart(analysis)) ||
            (() => {
              const title = contentStart(analysis)
                .replace(/^(?:\d+\s+)?(?:\(?[a-zçğıöşü][.)]{1,2})\s*/iu, "")
                .replace(/[^\p{L}]/gu, "");
              return !!title && title === title.toLocaleUpperCase("tr-TR");
            })())
        );
        continue;
      }
      if (inList) {
        // Only an unmistakable fresh prose line can end a list without a blank line.
        if (
          !/^\p{Lu}/u.test(line.trim()) ||
          !isCompleteExample(analysis.trim())
        )
          continue;
        inList = false;
      }
      if (isHeadingOrIndex(analysis)) flush();
      else paragraph.push(line);
    }
    flush();
  }
  return result;
}
