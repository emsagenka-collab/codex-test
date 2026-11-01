"use client";
import { useState } from "react";
import { Check, ChevronDown, ExternalLink, LoaderCircle } from "lucide-react";
import {
  checkTurkishOrthography,
  ORTHOGRAPHY_STANDARD,
} from "@/lib/orthography";
import type { TdkResult } from "@/lib/tdk";
export default function OrthographyPanel({
  sentence,
  word,
}: {
  sentence: string;
  word: string;
}) {
  const check = checkTurkishOrthography(sentence);
  const wordCheck = checkTurkishOrthography(word);
  const [result, setResult] = useState<TdkResult | null>(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  async function lookup() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch(
        "/api/tdk?word=" + encodeURIComponent(word),
        { cache: "no-store" },
      );
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.error || "Abfrage fehlgeschlagen.");
      setResult(body);
    } catch {
      setError(
        "Die Wörterbuchabfrage ist fehlgeschlagen. Die lokale Prüfung funktioniert weiterhin.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <details className="orthography-panel">
      <summary>
        <span>
          <Check size={15} /> Türkische Schreibprüfung
          {check.issues.length > 0 ? ` · ${check.issues.length} Hinweise` : ""}
        </span>
        <ChevronDown size={15} />
      </summary>
      <div className="orthography-content">
        <p>
          <strong>{ORTHOGRAPHY_STANDARD.name}</strong> · Die lokale Prüfung
          läuft automatisch. Das Buchzitat und historische Schreibweisen werden
          nicht überschrieben.
        </p>
        {wordCheck.issues.length > 0 && (
          <p>
            Hinweis zur Wortform:{" "}
            <span lang="tr">
              {word} → {wordCheck.suggestion}
            </span>
          </p>
        )}
        {check.issues.length > 0 ? (
          <>
            <h4>Empfohlene heutige Schreibung</h4>
            <blockquote lang="tr">{check.suggestion}</blockquote>
            <ul>
              {check.issues.map((issue) => (
                <li key={issue.start}>
                  <span lang="tr">
                    {issue.original} → <strong>{issue.replacement}</strong>
                  </span>
                  <p>
                    {issue.explanation}{" "}
                    <a href={issue.source} target="_blank" rel="noreferrer">
                      TDK-Grundlage <ExternalLink size={11} />
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>
            In den unterstützten Regeln keine Auffälligkeit gefunden. Das ist
            keine Bestätigung, dass der gesamte Satz fehlerfrei ist.
          </p>
        )}
        <p>
          {ORTHOGRAPHY_STANDARD.coverage} Für die Wahl von de/da, ki und
          Fragepartikeln ist der Satzkontext entscheidend; dafür gibt es keine
          pauschale automatische Ersetzung.
        </p>
        <a
          className="text-button"
          href={ORTHOGRAPHY_STANDARD.source}
          target="_blank"
          rel="noreferrer"
        >
          Offizielle TDK-Schreibregeln <ExternalLink size={12} />
        </a>
        <div className="tdk-lookup">
          <p>
            Für eine aktuelle Wörterbuchabfrage wird ausschließlich „{word}“ an
            die TDK gesendet. Antworten werden höchstens 24 Stunden
            zwischengespeichert.
          </p>
          <button
            type="button"
            className="secondary"
            disabled={busy}
            onClick={() => void lookup()}
          >
            {busy ? (
              <LoaderCircle className="spin" size={14} />
            ) : (
              <ExternalLink size={14} />
            )}{" "}
            Aktuelle TDK-Schreibform abfragen
          </button>
          {result && (
            <div className={"tdk-result " + result.status} role="status">
              {result.status === "listed" && (
                <p lang="tr">
                  <strong>{result.spellings.join(" · ")}</strong>
                </p>
              )}
              <p>{result.message}</p>
              <small>
                Abfrage: {new Date(result.checkedAt).toLocaleString("de-DE")} ·{" "}
                <a href={result.source} target="_blank" rel="noreferrer">
                  TDK-Wörterbuch
                </a>
              </small>
            </div>
          )}
          {error && <p role="alert">{error}</p>}
        </div>
      </div>
    </details>
  );
}
