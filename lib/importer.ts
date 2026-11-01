import JSZip from "jszip";
export async function extractText(file: File) {
  const ext = file.name.split(".").pop()?.toLowerCase();
  const bytes = Buffer.from(await file.arrayBuffer());
  if (ext === "txt" || ext === "md")
    return new TextDecoder("utf-8", { fatal: true })
      .decode(bytes)
      .replace(/^\uFEFF/, "");
  if (ext === "pdf") {
    const { PDFParse } = await import("pdf-parse");
    const parser = new PDFParse({ data: bytes });
    try {
      const info = await parser.getInfo();
      if (info.total > 1000)
        throw new Error(
          "Bitte PDFs mit mehr als 1.000 Seiten in kleinere Teile aufteilen.",
        );
      const result = await parser.getText({
        pageJoiner: "\n\n",
        disableNormalization: true,
      });
      return result.text;
    } finally {
      await parser.destroy();
    }
  }
  if (ext === "epub") {
    const zip = await JSZip.loadAsync(bytes);
    let size = 0;
    async function read(name: string) {
      const f = zip.file(name);
      if (!f) throw new Error("Ungültige EPUB-Struktur.");
      const raw = await f.async("string");
      size += raw.length;
      if (size > 8_000_000) throw new Error("Das entpackte EPUB ist zu groß.");
      return raw;
    }
    const container = await read("META-INF/container.xml");
    const opf = container.match(/full-path=["']([^"']+)["']/)?.[1];
    if (!opf) throw new Error("EPUB-Inhaltsverzeichnis fehlt.");
    const manifest = await read(opf);
    const base = opf.includes("/")
      ? opf.slice(0, opf.lastIndexOf("/") + 1)
      : "";
    const items = new Map(
      [...manifest.matchAll(/<item\b([^>]+)>/g)].map((m) => [
        m[1].match(/\bid=["']([^"']+)/)?.[1],
        m[1].match(/\bhref=["']([^"']+)/)?.[1],
      ]),
    );
    const refs = [...manifest.matchAll(/<itemref\b[^>]*idref=["']([^"']+)/g)];
    if (refs.length > 1000) throw new Error("Zu viele EPUB-Kapitel.");
    const texts = [];
    for (const ref of refs) {
      const href = items.get(ref[1]);
      if (!href) continue;
      const name = decodeURIComponent(base + href.split("#")[0]);
      const html = await read(name);
      texts.push(
        html
          .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
          .replace(/<\/(?:p|div|h[1-6])>/gi, "\n\n")
          .replace(/<[^>]+>/g, " ")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))),
      );
    }
    return texts.join("\n\n");
  }
  throw new Error("Bitte eine TXT-, PDF- oder EPUB-Datei auswählen.");
}
