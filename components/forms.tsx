"use client";
import { useRef, useState } from "react";
import {
  Upload,
  BookOpen,
  Sparkles,
  LoaderCircle,
  ArrowUpRight,
  Check,
  Download,
} from "lucide-react";
import type { State, Settings } from "@/lib/types";
import { MAX_BOOK_MEGABYTES } from "@/lib/import-limits";
export function ImportForm({
  data,
  busy,
  onSubmit,
  onDemo,
}: {
  data: State | null;
  busy: boolean;
  onSubmit: (form: FormData) => Promise<void>;
  onDemo: () => Promise<void>;
}) {
  const [file, setFile] = useState<File | null>(null),
    [useAI, setUseAI] = useState(false),
    [drag, setDrag] = useState(false),
    [level, setLevel] = useState(data?.settings.level || "B2");
  const input = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!file) return;
        const form = new FormData();
        form.append("file", file);
        form.append("useAI", String(useAI));
        form.append("level", level);
        void onSubmit(form);
      }}
    >
      <p className="modal-description">
        Importiere dein eigenes Buch. Wir suchen anspruchsvolle Wörter und
        behalten den Originalsatz als Beleg.
      </p>
      <div
        className={"dropzone " + (drag ? "drag" : "")}
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          setFile(e.dataTransfer.files[0] || null);
        }}
      >
        <Upload size={28} />
        <strong>
          {file ? file.name : "Dein Buch findet hier seinen Platz."}
        </strong>
        <p>
          {file
            ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
            : "Datei hier ablegen oder von deinem Gerät auswählen"}
        </p>
        <button
          type="button"
          className="secondary"
          disabled={busy}
          onClick={() => input.current?.click()}
        >
          {file ? "Andere Datei auswählen" : "Datei auswählen"}
        </button>
        <input
          ref={input}
          className="visually-hidden"
          type="file"
          accept=".txt,.md,.pdf,.epub"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          aria-label="Buchdatei auswählen"
        />
        <small>
          TXT (UTF-8), PDF mit Textebene oder EPUB · bis {MAX_BOOK_MEGABYTES} MB
          · ohne DRM
        </small>
      </div>
      <label className="setting-field level-field">
        Dein Türkisch-Niveau
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="B1">B1 · Mittel</option>
          <option value="B2">B2 · Anspruchsvoll</option>
          <option value="C1">C1 · Sehr anspruchsvoll</option>
        </select>
      </label>
      <div className="import-info">
        <BookOpen size={18} />
        <p>
          Das erweiterte Offline-Wörterbuch erkennt auch gehobene, historische
          und religiöse Begriffe mit ihren häufigen Beugungen. Deutsche
          Worterklärungen und Originalbeispiele aus deinem Buch funktionieren
          ohne KI-Zugang.
        </p>
      </div>
      {data?.aiAvailable && (
        <label className="checkbox">
          <input
            type="checkbox"
            checked={useAI}
            onChange={(e) => setUseAI(e.target.checked)}
          />
          <span>
            KI-Analyse verwenden. Dafür werden bis zu 65.000 Zeichen meines
            Textes an OpenAI gesendet.
          </span>
        </label>
      )}
      {data?.book && (
        <p className="muted">
          Deine bisherigen Wörter und Bewertungen bleiben erhalten. Für das neue
          Buch startet eine eigene Tagesauswahl auf deinem Niveau. Für
          PDF-Seitenangaben bei älteren Importen bitte das Buch erneut
          importieren.
        </p>
      )}
      <button className="primary wide" disabled={!file || busy} type="submit">
        {busy ? (
          <>
            <LoaderCircle size={17} className="spin" /> Text wird analysiert …
          </>
        ) : (
          <>
            <Sparkles size={17} /> Text analysieren & Wörter entdecken
          </>
        )}
      </button>
      <button
        className="text-button centered"
        type="button"
        disabled={busy}
        onClick={() => void onDemo()}
      >
        Mit eigens verfasstem Demotext ausprobieren <ArrowUpRight size={15} />
      </button>
      <p className="privacy-note">
        Keine Texte werden aus dem Internet heruntergeladen. Importiere nur
        Inhalte, die du verwenden darfst.
      </p>
    </form>
  );
}
export function SettingsForm({
  settings,
  dictionaryCounts,
  busy,
  onSave,
  onImport,
  onReset,
  aiAvailable,
}: {
  settings: Settings;
  dictionaryCounts: State["dictionaryCounts"];
  busy: boolean;
  onSave: (s: Settings) => Promise<void>;
  onImport: () => void;
  onReset: () => Promise<void>;
  aiAvailable: boolean;
}) {
  const [draft, setDraft] = useState(settings);
  function update(key: keyof Settings, value: string) {
    setDraft((d) => ({ ...d, [key]: value }));
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void onSave(draft);
      }}
      className="settings-form"
    >
      <div className="setting-field">
        <label>Sprache der Erklärungen</label>
        <span>Deutsch</span>
      </div>
      <label className="setting-field">
        Tägliche neue Wörter
        <input
          type="number"
          min={1}
          max={100}
          step={1}
          required
          value={Number.isNaN(draft.dailyWordCount) ? "" : draft.dailyWordCount}
          onChange={(e) =>
            setDraft((d) => ({ ...d, dailyWordCount: e.target.valueAsNumber }))
          }
        />
      </label>
      <label className="setting-field">
        Dein Türkisch-Niveau
        <select
          value={draft.level}
          onChange={(e) => update("level", e.target.value)}
        >
          <option value="B1">B1 · Mittel</option>
          <option value="B2">B2 · Anspruchsvoll</option>
          <option value="C1">C1 · Sehr anspruchsvoll</option>
        </select>
      </label>
      <p className="muted" aria-label="Offline-Wörterbuch nach Niveau">
        Offline-Wörterbuch: B1: {dictionaryCounts.B1} · B2:{" "}
        {dictionaryCounts.B2} · C1: {dictionaryCounts.C1}.
      </p>
      <label className="setting-field">
        Darstellung
        <select
          value={draft.theme}
          onChange={(e) => update("theme", e.target.value)}
        >
          <option value="light">Helles Papier</option>
          <option value="dark">Dunkle Bibliothek</option>
          <option value="system">Wie dein Gerät</option>
        </select>
      </label>
      <label className="setting-field">
        Textgröße
        <select
          value={draft.textSize}
          onChange={(e) => update("textSize", e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="large">Groß</option>
        </select>
      </label>
      <label className="setting-field">
        Deine Lernzeit
        <input
          type="time"
          required
          value={draft.reminder}
          onChange={(e) => update("reminder", e.target.value)}
        />
      </label>
      <p className="muted">
        Deine vorgemerkte Lernzeit: {draft.reminder} Uhr. Automatische
        Benachrichtigungen sind nicht aktiviert.
      </p>
      <label className="setting-field">
        Zeitzone für Tageswörter
        <select
          value={draft.timezone}
          onChange={(e) => update("timezone", e.target.value)}
        >
          <option>Europe/Berlin</option>
          <option>Europe/Istanbul</option>
          <option>Europe/Vienna</option>
          <option>Europe/Zurich</option>
          <option>UTC</option>
        </select>
      </label>
      <p className="muted">
        Schreibstandard: Türkisch, nach ausgewählten TDK-Regeln. Die lokale
        Prüfung läuft im Hintergrund. Originalzitate bleiben erhalten.
      </p>
      <p className="muted">
        Ein Niveauwechsel startet sofort eine Auswahl der neuen Stufe. Deine
        bisherigen Bewertungen bleiben erhalten. Bereits bekannte Wörter kannst
        du in der Wortübersicht als bekannt markieren.
      </p>
      <button type="submit" disabled={busy} className="primary wide">
        {busy ? (
          <LoaderCircle className="spin" size={17} />
        ) : (
          <Check size={17} />
        )}{" "}
        Einstellungen speichern
      </button>
      <div className="settings-extra">
        <button type="button" className="secondary" onClick={onImport}>
          <Upload size={16} /> Buch importieren
        </button>
        <a href="/api/export" className="secondary" download>
          <Download size={16} /> Daten exportieren
        </a>
      </div>
      <p className="muted">
        KI-Anbindung:{" "}
        {aiAvailable
          ? "eingerichtet · beim Import optional aktivierbar"
          : "nicht eingerichtet · die App funktioniert auch offline mit ihrem Wörterbuch"}
        .
      </p>
      <button
        type="button"
        className="danger-button"
        disabled={busy}
        onClick={() => void onReset()}
      >
        Alle lokalen Lerndaten löschen
      </button>
    </form>
  );
}
