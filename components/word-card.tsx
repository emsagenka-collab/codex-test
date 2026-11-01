"use client";
import { useEffect, useState } from "react";
import {
  Volume2,
  Check,
  CircleHelp,
  RotateCcw,
  Bookmark,
  BookOpen,
  Leaf,
  ChevronDown,
  FileText,
} from "lucide-react";
import type { Word } from "@/lib/types";
import { Highlight, formatDate, difficulty } from "./shared";
import OrthographyPanel from "./orthography-panel";
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
          {index ? `0${index} / ` : ""}KELİME <span className="thin-line" />
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
      <div className="example">
        <div className="example-label">
          <BookOpen size={14} />
          {w.demoBook ? "AUS DEM DEMOTEXT" : "AUS DEINEM BUCH"}
          <span>Abschnitt {w.sectionNumber}</span>
        </div>
        <blockquote lang="tr">
          „<Highlight text={w.sentence} word={w.word} />“
        </blockquote>
        {w.sentenceTranslation ? (
          <p className="sentence-translation">
            {!w.demoBook && <span className="ai-label">KI-Übersetzung · </span>}
            {w.sentenceTranslation}
          </p>
        ) : (
          <p className="sentence-translation untranslated">
            Für diesen Originalsatz liegt keine geprüfte deutsche Übersetzung
            vor. Das Wort bedeutet hier: {w.meaning}.
          </p>
        )}
        {w.originalSentence && (
          <details className="source-repair">
            <summary>
              PDF-Schriftzeichen berichtigt <ChevronDown size={14} />
            </summary>
            <p>
              Die Zeichen ğ, ı und ş wurden aus einer älteren Schriftkodierung
              wiederhergestellt. Der Inhalt wurde nicht ergänzt. Unveränderte
              Textextraktion:
            </p>
            <blockquote lang="tr">{w.originalSentence}</blockquote>
          </details>
        )}
        <div className="in-context">
          <span>IM SATZ</span>
          <p>
            {w.demoBook || w.sentenceTranslation
              ? w.explanation
              : `„${w.word}“ erscheint hier in der Bedeutung „${w.meaning}“. Die genaue Nuance hängt vom Originalabschnitt ab.`}
          </p>
        </div>
      </div>
      <OrthographyPanel sentence={w.sentence} word={w.word} />
      <div className="expand-sections">
        <details>
          <summary>
            <span>
              <Leaf size={16} /> Was passiert in diesem Abschnitt?
            </span>
            <ChevronDown size={16} />
          </summary>
          <div className="detail-content">
            <p>
              {!w.demoBook && w.contextExplanation && (
                <span className="ai-label">KI-Kontextanalyse · </span>
              )}
              {w.contextExplanation ||
                "Für diesen importierten Abschnitt liegt noch keine deutsche Kontextanalyse vor. Lies den Originalabschnitt unten. Ohne weitere Belege ergänzt die App keine historischen Personen, Daten oder Ereignisse."}
            </p>
            <details>
              <summary>
                Originalabschnitt lesen <ChevronDown size={14} />
              </summary>
              <p lang="tr">{w.section}</p>
              {w.originalSection && (
                <details className="source-repair">
                  <summary>
                    Unveränderte Textextraktion anzeigen{" "}
                    <ChevronDown size={14} />
                  </summary>
                  <p lang="tr">{w.originalSection}</p>
                </details>
              )}
            </details>
            <small>
              {w.source} · Abschnitt {w.sectionNumber}
              {w.demoBook
                ? " · Eigenständig verfasster Lerntext, kein Buchzitat"
                : ""}
            </small>
          </div>
        </details>
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
              <strong>Grundform:</strong> <span lang="tr">{w.word}</span> · Im
              Text {w.frequency}× erkannt
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
