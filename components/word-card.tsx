"use client";
import { useEffect, useState } from "react";
import {
  Volume2,
  Check,
  CircleHelp,
  RotateCcw,
  Bookmark,
  ChevronDown,
  FileText,
} from "lucide-react";
import type { Word } from "@/lib/types";
import ExampleCarousel from "./example-carousel";
import { formatDate, difficulty } from "./shared";
export default function WordCard({
  word: w,
  index,
  busy,
  today,
  onRate,
}: {
  word: Word;
  index?: number;
  busy: boolean;
  today: string;
  onRate: (rating: string) => void;
}) {
  const [speaking, setSpeaking] = useState(false);
  useEffect(
    () => () => {
      window.speechSynthesis?.cancel();
    },
    [],
  );
  function speak() {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(w.word);
    utterance.lang = "tr-TR";
    utterance.rate = 0.8;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }
  const ratings = [
    { id: "understood", label: "Verstanden", Icon: Check },
    { id: "unsure", label: "Noch unsicher", Icon: CircleHelp },
    { id: "hard", label: "Schwierig", Icon: RotateCcw },
    { id: "later", label: "Später wiederholen", Icon: Bookmark },
  ];
  return (
    <article className="word-card">
      <div className="card-topline">
        <span className="eyebrow">
          {index ? `${String(index).padStart(2, "0")} / ` : ""}KELİME HAZİNESİ{" "}
          <span className="thin-line" />
        </span>
        <span className="difficulty">
          <i />
          <i />
          <i className={w.difficulty === 3 ? "" : "faint"} />
          {difficulty[w.difficulty]}
        </span>
      </div>
      <div className="word-title">
        <h2 lang="tr">{w.word}</h2>
        <button
          className={"sound-button " + (speaking ? "speaking" : "")}
          aria-label={`${w.word} auf Türkisch vorlesen`}
          onClick={speak}
        >
          <Volume2 size={20} />
        </button>
      </div>
      <div className="meaning">{w.meaning}</div>
      <p className="definition">{w.explanation}</p>
      {w.examples.length ? (
        <ExampleCarousel
          examples={w.examples}
          word={w.word}
          meaning={w.meaning}
          explanation={w.explanation}
        />
      ) : (
        <p className="muted">
          Für dieses Wort wurde noch kein vollständiger Beispielsatz in der
          aktuell geöffneten Quelle gefunden.
        </p>
      )}
      <div className="expand-sections">
        <details>
          <summary>
            <span>
              <FileText size={16} /> Wortwissen & Herkunft
            </span>
            <ChevronDown size={16} />
          </summary>
          <div className="detail-content">
            <p>{w.note}</p>
            <p>
              <strong>Heute auch:</strong> <span lang="tr">{w.modern}</span>
            </p>
            <p>
              <strong>Verwandte Wörter:</strong>{" "}
              <span lang="tr">{w.related}</span>
            </p>
            <p>
              <strong>Grundform:</strong> <span lang="tr">{w.word}</span> ·{" "}
              <span title="Gezählt werden alle Wortvorkommen, auch mehrere im selben Satz und in Überschriften. Als Beispiele erscheinen nur unterschiedliche Sätze aus dem Fließtext.">
                Im aktuellen Buch {w.frequency}× erkannt
              </span>{" "}
              · {w.examples.length}{" "}
              {w.examples.length === 1 ? "Beispielsatz" : "Beispielsätze"}
            </p>
          </div>
        </details>
      </div>
      <div className="card-footer">
        <span className="rating-label">Wie gut sitzt das Wort?</span>
        <div className="ratings">
          {ratings.map(({ id, label, Icon }) => (
            <button
              key={id}
              title={id === "later" ? "Später wiederholen" : label}
              disabled={busy}
              className={
                w.lastReviewed === today && w.rating === id ? "selected" : ""
              }
              onClick={() => onRate(id)}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
        {w.lastReviewed === today && (
          <div className="saved-note">
            <Check size={13} /> Gespeichert · nächste Wiederholung{" "}
            {w.nextReview ? formatDate(w.nextReview) : ""}
          </div>
        )}
      </div>
    </article>
  );
}
