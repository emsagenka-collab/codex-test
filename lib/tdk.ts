export type TdkResult = {
  status: "listed" | "not-listed" | "unavailable";
  word: string;
  spellings: string[];
  checkedAt: string;
  source: string;
  message: string;
};
const cache = new Map<string, { expires: number; result: TdkResult }>();
export async function lookupTdk(
  word: string,
  fetcher: typeof fetch = fetch,
): Promise<TdkResult> {
  const term = word.normalize("NFC").trim();
  if (!term || term.length > 80 || !/^\p{L}[\p{L}\p{M} '\u2019-]*$/u.test(term))
    throw new Error("Bitte ein türkisches Wort eingeben.");
  const key = term.toLocaleLowerCase("tr-TR");
  const cached = cache.get(key);
  if (fetcher === fetch && cached && cached.expires > Date.now())
    return cached.result;
  const checkedAt = new Date().toISOString(),
    source = "https://sozluk.gov.tr/";
  let result: TdkResult;
  try {
    const res = await fetcher(
      "https://sozluk.gov.tr/gts?ara=" + encodeURIComponent(term),
      {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(6000),
        cache: "no-store",
      },
    );
    if (!res.ok) throw new Error("TDK nicht erreichbar");
    const raw: unknown = await res.json();
    if (Array.isArray(raw) && raw.length > 0) {
      const spellings = [
        ...new Set(
          raw
            .filter(
              (x) => x && typeof x === "object" && typeof x.madde === "string",
            )
            .map((x) => String(x.madde))
            .filter((s) => s.length <= 100),
        ),
      ].slice(0, 8);
      if (!spellings.length) throw new Error("Unbekannte Antwort");
      result = {
        status: "listed",
        word: term,
        spellings,
        checkedAt,
        source,
        message:
          "Aktuelle Schreibform im TDK-Wörterbuch abgerufen. Dies prüft keinen Satzbau und keine gebeugten Wortformen.",
      };
    } else if (
      raw &&
      typeof raw === "object" &&
      !Array.isArray(raw) &&
      "error" in raw &&
      typeof raw.error === "string" &&
      /sonuç bulunamadı/i.test(raw.error)
    ) {
      result = {
        status: "not-listed",
        word: term,
        spellings: [],
        checkedAt,
        source,
        message:
          "Kein Wörterbucheintrag gefunden. Das beweist keinen Schreibfehler: Beugungen, Namen oder historische Formen können fehlen.",
      };
    } else throw new Error("Unbekannte Antwort");
  } catch {
    result = {
      status: "unavailable",
      word: term,
      spellings: [],
      checkedAt,
      source,
      message:
        "Das TDK-Wörterbuch ist gerade nicht erreichbar. Die lokale Regelprüfung bleibt verfügbar; eine aktuelle Wörterbuchbestätigung liegt nicht vor.",
    };
  }
  if (fetcher === fetch) {
    if (cache.size >= 300) cache.delete(cache.keys().next().value!);
    cache.set(key, {
      expires:
        Date.now() +
        (result.status === "unavailable" ? 30000 : 24 * 60 * 60 * 1000),
      result,
    });
  }
  return result;
}
