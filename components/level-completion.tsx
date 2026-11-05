"use client";
import { ArrowUpRight, BookOpen, RotateCcw, Sparkles } from "lucide-react";
import type { State } from "@/lib/types";

export default function LevelCompletion({
  progress,
  busy,
  canReview,
  onAdvance,
  onImport,
  onReview,
}: {
  progress: State["levelProgress"];
  busy: boolean;
  canReview: boolean;
  onAdvance: () => void;
  onImport: () => void;
  onReview: () => void;
}) {
  if (progress.remaining > 0 || (!progress.completed && progress.total > 0))
    return null;
  return (
    <section
      className="level-completion"
      aria-labelledby="level-completion-title"
    >
      <div className="level-completion-heading">
        <span className="level-completion-icon">
          <Sparkles size={24} />
        </span>
        <div>
          <div className="eyebrow">DEIN NÄCHSTER SCHRITT</div>
          <h3 id="level-completion-title">
            {progress.completed
              ? `Herzlichen Glückwunsch – deine ${progress.level}-Auswahl ist geschafft!`
              : `Für ${progress.level} sind hier noch keine Lernwörter verfügbar.`}
          </h3>
        </div>
      </div>
      <p>
        {progress.completed
          ? `Du hast alle ${progress.total} verfügbaren ${progress.level}-Lernwörter mit passenden Beispielsätzen in diesem Buch bearbeitet. Du bist drangeblieben – darauf kannst du stolz sein. Mit jedem Wort wächst dein Können. Wie möchtest du weiterlernen?`
          : "Im aktuellen Buch wurden mit dem vorhandenen Wörterbuch noch keine passenden Beispielsätze für diese Stufe gefunden. Wähle deinen nächsten Schritt."}
      </p>
      <div className="level-choices">
        <button
          type="button"
          disabled={busy || !progress.nextLevel}
          onClick={onAdvance}
        >
          <ArrowUpRight size={19} />
          <strong>
            {progress.nextLevel
              ? `Auf ${progress.nextLevel} wechseln`
              : "Höchste Stufe erreicht"}
          </strong>
          <span>
            {progress.nextLevel
              ? "Neue Herausforderungen in deinem Tempo."
              : "C1 ist die höchste verfügbare Stufe."}
          </span>
        </button>
        <button type="button" disabled={busy} onClick={onImport}>
          <BookOpen size={19} />
          <strong>Mit anderem Buch weiterlernen</strong>
          <span>Ein Buch importieren und bei {progress.level} bleiben.</span>
        </button>
        <button type="button" disabled={busy || !canReview} onClick={onReview}>
          <RotateCcw size={19} />
          <strong>Weiter wiederholen</strong>
          <span>
            {canReview
              ? "Bekannte Wörter festigen und sicherer werden."
              : "Noch keine bearbeiteten Wörter zum Wiederholen."}
          </span>
        </button>
      </div>
    </section>
  );
}
