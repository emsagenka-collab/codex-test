/** Older Turkish PDFs sometimes expose font character codes instead of Unicode.
 * Repairs are deterministic display/analysis transforms. Raw source stays intact.
 * Never infer missing words, punctuation, or historical content.
 */
export function hasLegacyTurkishGlyphs(text: string): boolean {
  return /\p{L}[€¤›]\p{L}|(?:komﬂu|ﬂöyle|ﬂefkat|ﬁimdi|ﬁerh|komflu|flöyle|fierh)/u.test(
    text,
  );
}
export function repairTurkishText(
  text: string,
  legacy = hasLegacyTurkishGlyphs(text),
): string {
  if (!legacy) return text;
  const glyphs: Record<string, string> = {
    "€": "ğ",
    "¤": "ğ",
    "›": "ı",
    "‹": "İ",
    ﬂ: "ş",
    ﬁ: "Ş",
  };
  return text.replace(/[\p{L}€¤›‹ﬂﬁ]+/gu, (token) => {
    // Preserve actual guillemet quotation marks and standalone money symbols.
    if (!/\p{L}/u.test(token) || (token.startsWith("‹") && token.endsWith("›")))
      return token;
    // A currency symbol outside a word is not a font error.
    let repaired = token.replace(/[€¤›‹ﬂﬁ]/gu, (glyph, offset: number) => {
      if (
        (glyph === "€" || glyph === "¤") &&
        (offset === 0 || offset === token.length - 1)
      )
        return glyph;
      return glyphs[glyph];
    });
    // PDF.js previously normalized the legacy ligatures to ASCII fl/fi.
    // Restore only established Turkish stems, never every occurrence of "fl".
    const stems = [
      "şöyle",
      "komşu",
      "düşün",
      "paylaş",
      "şefkat",
      "şimdi",
      "kişi",
      "kardeş",
      "arkadaş",
      "görüş",
      "karşı",
      "çalış",
      "konuş",
      "başla",
      "müşrik",
      "şahit",
      "şükür",
      "şart",
      "şehir",
    ];
    for (const stem of stems) {
      const broken = stem.replaceAll("ş", "fl");
      repaired = repaired.replaceAll(broken, stem);
      repaired = repaired.replaceAll(
        broken[0].toLocaleUpperCase("tr-TR") + broken.slice(1),
        stem[0].toLocaleUpperCase("tr-TR") + stem.slice(1),
      );
    }
    return repaired.replace(/^fi(?=erh|ehir|imdi|efkat)/u, "Ş");
  });
}
