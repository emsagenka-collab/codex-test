"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import type { WordExample } from "@/lib/types";
import { Highlight } from "./shared";

export default function ExampleCarousel({
  examples,
  word,
  meaning,
  explanation,
}: {
  examples: WordExample[];
  word: string;
  meaning: string;
  explanation: string;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [motion, setMotion] = useState<{
    from: WordExample;
    toId: string;
    direction: "next" | "previous";
  } | null>(null);
  const [height, setHeight] = useState<number>();
  const panel = useRef<HTMLDivElement>(null);
  const selectedIndex = Math.max(
    0,
    examples.findIndex((example) => example.id === selectedId),
  );
  const current = examples[selectedIndex];
  const activeMotion = motion?.toId === current?.id ? motion : null;

  useEffect(() => {
    if (!motion) return;
    // Also settle if motion is disabled mid-transition or an animation is cancelled.
    const timer = setTimeout(() => setMotion(null), 400);
    return () => clearTimeout(timer);
  }, [motion]);

  useLayoutEffect(() => {
    const element = panel.current;
    if (!element) return;
    const measure = () => setHeight(element.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [current?.id, current?.sentence, current?.sentenceTranslation]);

  if (!current) return null;
  function move(direction: -1 | 1) {
    if (activeMotion || !current) return;
    const next = examples[selectedIndex + direction];
    if (!next) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setMotion(
      reduceMotion
        ? null
        : {
            from: current,
            toId: next.id,
            direction: direction === 1 ? "next" : "previous",
          },
    );
    setSelectedId(next.id);
  }
  function sentence(example: WordExample) {
    return (
      <>
        <blockquote lang="tr">
          „<Highlight text={example.sentence} word={word} />“
        </blockquote>
        {example.sentenceTranslation && (
          <p className="sentence-translation">
            {!example.demoBook && (
              <span className="ai-label">KI-Übersetzung · </span>
            )}
            {example.sentenceTranslation}
          </p>
        )}
      </>
    );
  }
  return (
    <div
      className="example"
      role="region"
      aria-label={`Beispielsätze für ${word}`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="example-label">
        <div className="example-origin" title={current.source}>
          <BookOpen size={14} />
          {current.demoBook ? "AUS DEM DEMOTEXT" : "AUS DEINEM BUCH"}
        </div>
        <div className="example-actions">
          <span className="source-location">
            <span>Abschnitt {current.sectionNumber}</span>
            {current.pageNumber != null && (
              <span title="Seitenposition in der PDF-Datei; die gedruckte Buchseite kann abweichen.">
                PDF-Seite {current.pageNumber}
                {current.pageEnd != null &&
                current.pageEnd !== current.pageNumber
                  ? `–${current.pageEnd}`
                  : ""}
              </span>
            )}
          </span>
          <div
            className="example-pager"
            role="group"
            aria-label="Satzbeispiele wechseln"
          >
            <span
              className="example-count"
              aria-label={`Beispiel ${selectedIndex + 1} von ${examples.length}`}
            >
              {selectedIndex + 1} / {examples.length}
            </span>
            <button
              type="button"
              className="example-arrow"
              aria-label="Vorheriger Beispielsatz"
              title="Vorheriger Beispielsatz"
              disabled={!!activeMotion || selectedIndex === 0}
              onClick={() => move(-1)}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="example-arrow"
              aria-label="Nächster Beispielsatz"
              title="Nächster Beispielsatz"
              disabled={!!activeMotion || selectedIndex === examples.length - 1}
              onClick={() => move(1)}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`example-viewport${activeMotion ? ` example-moving-${activeMotion.direction}` : ""}`}
        style={{ height }}
        aria-live="polite"
        aria-atomic="true"
        aria-busy={!!activeMotion}
      >
        {activeMotion && (
          <div className="example-slide example-outgoing" aria-hidden="true">
            {sentence(activeMotion.from)}
          </div>
        )}
        <div
          key={current.id}
          ref={panel}
          className="example-slide example-current"
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) setMotion(null);
          }}
        >
          {sentence(current)}
        </div>
      </div>
      <div className="in-context">
        <span>IM SATZ</span>
        <p>
          {current.demoBook || current.sentenceTranslation
            ? explanation
            : `„${word}“ erscheint hier in der Bedeutung „${meaning}“. Die genaue Nuance hängt vom Originalabschnitt ab.`}
        </p>
      </div>
    </div>
  );
}
