export function excludedPageNumbers(value: unknown): Set<number> {
  if (typeof value !== "string" || value.length > 2000)
    throw new Error(
      "Bitte PDF-Seiten als Zahlen oder Bereiche eingeben, z. B. 1-8, 25.",
    );
  const pages = new Set<number>();
  if (!value.trim()) return pages;
  for (const part of value.split(/[,;]/u)) {
    const match = part
      .trim()
      .match(/^([1-9]\d{0,3})(?:\s*[-–]\s*([1-9]\d{0,3}))?$/u);
    if (!match) throw new Error("Ungültige PDF-Seiten. Beispiel: 1-8, 25.");
    const first = Number(match[1]),
      last = Number(match[2] || match[1]);
    if (first > last || last > 1000)
      throw new Error(
        "PDF-Seiten müssen zwischen 1 und 1000 liegen; Bereiche bitte aufsteigend eingeben.",
      );
    for (let page = first; page <= last; page++) pages.add(page);
  }
  return pages;
}
export function overlapsExcludedPages(
  pages: Set<number>,
  start: unknown,
  end: unknown,
) {
  if (!pages.size) return false;
  // Unknown source positions cannot be confirmed to be outside a blocked range.
  if (start == null) return true;
  const first = Number(start),
    last = end == null ? first : Number(end);
  return [...pages].some((page) => first <= page && page <= last);
}
