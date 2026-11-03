import { NextRequest, NextResponse } from "next/server";
import {
  state,
  rate,
  saveSettings,
  importBook,
  loadDemo,
  reset,
  exportData,
} from "@/lib/db";
import { extractDocument } from "@/lib/importer";
import { lookupTdk } from "@/lib/tdk";
import { analyzeWithAI } from "@/lib/ai";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ action: string[] }> },
) {
  try {
    const { action } = await params;
    if (action[0] === "health")
      return NextResponse.json(
        { app: "kelime", ready: true },
        { headers: { "Cache-Control": "no-store" } },
      );
    if (action[0] === "tdk") {
      const word = request.nextUrl.searchParams.get("word") || "";
      if (
        !word ||
        word.length > 80 ||
        !/^\p{L}[\p{L}\p{M} '\u2019-]*$/u.test(word)
      )
        return NextResponse.json(
          { error: "Bitte ein türkisches Wort eingeben." },
          { status: 400 },
        );
      return NextResponse.json(await lookupTdk(word), {
        headers: { "Cache-Control": "no-store" },
      });
    }
    if (action[0] === "state")
      return NextResponse.json(state(), {
        headers: { "Cache-Control": "no-store" },
      });
    if (action[0] === "export")
      return NextResponse.json(exportData(), {
        headers: {
          "Content-Disposition": 'attachment; filename="kelime-backup.json"',
          "Cache-Control": "no-store",
        },
      });
    return NextResponse.json({ error: "Nicht gefunden." }, { status: 404 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Die lokalen Daten konnten nicht geladen werden." },
      { status: 500 },
    );
  }
}
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ action: string[] }> },
) {
  const origin = request.headers.get("origin");
  if (
    origin &&
    origin !== new URL(request.url).origin &&
    new URL(origin).host !== request.headers.get("host")
  )
    return NextResponse.json(
      { error: "Nicht erlaubter Zugriff." },
      { status: 403 },
    );
  try {
    const { action } = await params;
    let result: unknown = {};
    switch (action[0]) {
      case "rate": {
        const body = await request.json();
        rate(Number(body.id), String(body.rating));
        break;
      }
      case "settings": {
        const { excludedPages, ...config } = await request.json();
        // Ignore the retired page-exclusion setting from older clients.
        void excludedPages;
        saveSettings(config);
        break;
      }
      case "demo":
        loadDemo();
        break;
      case "reset": {
        const body = await request.json();
        if (body.confirm !== "DELETE") throw new Error("Bestätigung fehlt.");
        reset();
        break;
      }
      case "import": {
        if (
          Number(request.headers.get("content-length") || 0) >
          16 * 1024 * 1024
        )
          throw new Error("Die Datei darf maximal 15 MB groß sein.");
        const form = await request.formData();
        const file = form.get("file");
        if (!(file instanceof File))
          throw new Error("Bitte eine Datei auswählen.");
        if (file.size > 15 * 1024 * 1024)
          throw new Error("Die Datei darf maximal 15 MB groß sein.");
        const document = await extractDocument(file);
        const text = document.text.normalize("NFC");
        const pages = document.pages.map((page) => ({
          ...page,
          text: page.text.normalize("NFC"),
        }));
        if (text.length > 3_000_000)
          throw new Error(
            "Bitte das Buch in kleinere Teile aufteilen (maximal 3 Millionen Zeichen).",
          );
        const useAI = form.get("useAI") === "true";
        const extra = useAI ? await analyzeWithAI(text) : [];
        result = importBook(
          file.name.replace(/\.[^.]+$/, ""),
          text,
          false,
          extra,
          pages,
        );
        const level = form.get("level");
        if (typeof level === "string" && ["B1", "B2", "C1"].includes(level))
          saveSettings({ level });
        break;
      }
      default:
        return NextResponse.json({ error: "Nicht gefunden." }, { status: 404 });
    }
    return NextResponse.json({ ok: true, result, state: state() });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Ein Fehler ist aufgetreten." },
      { status: 400 },
    );
  }
}
