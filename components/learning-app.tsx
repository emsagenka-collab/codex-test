"use client";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Sun,
  RotateCcw,
  Library,
  ChartNoAxesCombined,
  Settings as SettingsIcon,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  Upload,
  Flame,
  Search,
  Plus,
  Leaf,
  Bookmark,
  Volume2,
  CircleHelp,
  CheckCheck,
  Sparkles,
  Download,
  FileText,
  LoaderCircle,
} from "lucide-react";
import WordCard from "./word-card";
import Modal from "./modal";
import { ImportForm, SettingsForm } from "./forms";
import { Highlight, formatDate, difficulty } from "./shared";
import type { State, Word, Settings } from "@/lib/types";
type Tab = "today" | "review" | "words" | "progress";
const tabs = [
  { id: "today" as Tab, label: "Heute", sub: "Bugün", icon: Sun },
  { id: "review" as Tab, label: "Wiederholen", sub: "Tekrar", icon: RotateCcw },
  {
    id: "words" as Tab,
    label: "Mein Wortschatz",
    sub: "Kelimelerim",
    icon: Library,
  },
  {
    id: "progress" as Tab,
    label: "Fortschritt",
    sub: "Gelişim",
    icon: ChartNoAxesCombined,
  },
];

const statusLabel: Record<string, string> = {
  new: "Neu",
  learned: "Gelernt",
  learning: "Noch unsicher",
  difficult: "Schwierig",
  deferred: "Zurückgestellt",
};
export default function LearningApp() {
  const [data, setData] = useState<State | null>(null),
    [tab, setTab] = useState<Tab>("today"),
    [error, setError] = useState(""),
    [toast, setToast] = useState(""),
    [modal, setModal] = useState<"import" | "settings" | null>(null),
    [busy, setBusy] = useState(false),
    [search, setSearch] = useState(""),
    [filter, setFilter] = useState("all"),
    [reviewId, setReviewId] = useState<number | null>(null),
    [flipped, setFlipped] = useState(false),
    [reviewed, setReviewed] = useState<number[]>([]),
    [detail, setDetail] = useState<Word | null>(null);

  async function refresh() {
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setData(json);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Verbindung fehlgeschlagen.");
    }
  }
  useEffect(() => {
    void refresh();
    const timer = setInterval(() => {
      if (document.visibilityState === "visible") void refresh();
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!data) return;
    document.documentElement.dataset.theme = data.settings.theme;
    document.documentElement.dataset.size = data.settings.textSize;
  }, [data]);
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 4500);
    return () => clearTimeout(timer);
  }, [toast]);
  async function act(action: string, body: unknown = {}, message = "") {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/" + action, {
        method: "POST",
        headers:
          body instanceof FormData
            ? undefined
            : { "Content-Type": "application/json" },
        body: body instanceof FormData ? body : JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setData(json.state);
      if (message) setToast(message);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Bitte erneut versuchen.");
      return false;
    } finally {
      setBusy(false);
    }
  }
  async function rate(word: Word, rating: string, review = false) {
    if (
      await act(
        "rate",
        { id: word.id, rating },
        rating === "known"
          ? "Als bekannt markiert."
          : "Gespeichert. Dein nächster Lernschritt ist geplant.",
      )
    ) {
      if (review) {
        setReviewed((r) => [...r, word.id]);
        setReviewId(null);
        setFlipped(false);
      }
    }
  }
  function navigate(next: Tab) {
    setTab(next);
    setDetail(null);
    setReviewed([]);
    setReviewId(null);
    setFlipped(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  const due = data?.due.length || 0;
  const reviewPool = (data?.due || []).filter((w) => !reviewed.includes(w.id));
  const optionalPool = (data?.vocabulary || []).filter(
    (w) => w.status !== "new" && !reviewed.includes(w.id),
  );
  const reviewWord = reviewId
    ? data?.vocabulary.find((w) => w.id === reviewId)
    : reviewPool[0];
  const weekly = Math.min(data?.stats.week || 0, 14);
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a
          className="brand"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("today");
          }}
        >
          <span className="brand-symbol">
            <BookOpen size={25} />
          </span>
          <span>
            kelime<span className="brand-dot">.</span>
            <small>HER GÜN BİRAZ DAHA</small>
          </span>
        </a>
        <div className="nav-label">DEIN LERNRAUM</div>
        <nav>
          {tabs.map((t) => (
            <button
              key={t.id}
              className={tab === t.id ? "nav-item active" : "nav-item"}
              onClick={() => navigate(t.id)}
            >
              <t.icon size={20} />
              <span>
                {t.label}
                <small>{t.sub}</small>
              </span>
              {t.id === "review" && due > 0 && (
                <span className="count-badge">{due}</span>
              )}
              {tab === t.id && <span className="active-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="quiet-note">
            <Leaf size={22} />
            <p>
              Kleine Schritte.
              <br />
              <strong>Bleibendes Wissen.</strong>
            </p>
            <span>Jeden Tag zwei neue Perspektiven.</span>
          </div>
          <button className="settings-nav" onClick={() => setModal("settings")}>
            <SettingsIcon size={18} /> Einstellungen
          </button>
          <div className="profile">
            <div className="avatar">ÖFT</div>
            <div>
              Dein Lernweg<small>In deinem Tempo.</small>
            </div>
            <span className="online-dot" />
          </div>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div className="mobile-brand">
            <BookOpen size={21} /> kelime.
          </div>
          <span className="breadcrumb">
            Deine kleine Lernbibliothek <span>/</span>{" "}
            {tabs.find((t) => t.id === tab)?.label}
          </span>
          <div className="top-actions">
            <span className="private-label">
              <span className="online-dot" /> Lokal & privat
            </span>
            <button
              className="icon-button"
              aria-label="Einstellungen öffnen"
              onClick={() => setModal("settings")}
            >
              <SettingsIcon size={19} />
            </button>
          </div>
        </header>
        <main>
          {error && (
            <div className="error" role="alert">
              <span>{error}</span>
              <button
                className="icon-button"
                aria-label="Fehlermeldung schließen"
                onClick={() => setError("")}
              >
                <X size={16} />
              </button>
            </div>
          )}
          {!data ? (
            <div className="loading">
              <LoaderCircle className="spin" />
              <h2>Deine Lernbibliothek wird geöffnet …</h2>
              {error && (
                <button className="primary" onClick={() => void refresh()}>
                  Erneut versuchen
                </button>
              )}
            </div>
          ) : (
            <>
              {tab === "today" && (
                <>
                  <div className="greeting">
                    <div>
                      <div className="eyebrow">
                        {new Intl.DateTimeFormat("de-DE", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          timeZone: "UTC",
                        }).format(new Date(data.today + "T12:00:00Z"))}
                      </div>
                      <h1>
                        Ein guter Tag für neue Wörter<span>.</span>
                      </h1>
                      <p>
                        Zwei Wörter. Ein bisschen Kontext. Wissen, das bleibt.
                      </p>
                    </div>
                    <div className="streak">
                      <Flame size={18} />
                      <strong>{data.stats.streak}</strong>{" "}
                      {data.stats.streak === 1 ? "Tag" : "Tage"} in Folge
                    </div>
                  </div>
                  {!data.onboarded ? (
                    <section className="welcome">
                      <div className="welcome-art">
                        <BookOpen size={42} strokeWidth={1} />
                        <span>بِسْمِ اللَّهِ</span>
                      </div>
                      <div className="eyebrow">
                        DEINE REISE BEGINNT MIT EINEM WORT
                      </div>
                      <h2>Ein Buch. Viele neue Perspektiven.</h2>
                      <p>
                        Entdecke anspruchsvolle türkische Wörter aus deinem
                        eigenen Siyer-i Nebi-Text. Jeden Tag nur zwei – mit Raum
                        zum Verstehen.
                      </p>
                      <div className="welcome-steps">
                        <span>
                          <b>01</b> Text importieren
                        </span>
                        <span>
                          <b>02</b> Im Kontext verstehen
                        </span>
                        <span>
                          <b>03</b> Langfristig behalten
                        </span>
                      </div>
                      <button
                        className="primary"
                        onClick={() => setModal("import")}
                      >
                        <Upload size={17} /> Eigenes Buch importieren{" "}
                        <ArrowRight size={17} />
                      </button>
                      <button
                        className="text-button"
                        disabled={busy}
                        onClick={() =>
                          void act(
                            "demo",
                            {},
                            "Die Demo ist bereit. Alle Beispielsätze sind eigens verfasst.",
                          )
                        }
                      >
                        {busy ? (
                          <LoaderCircle className="spin" size={15} />
                        ) : null}{" "}
                        Erst mit der Demo entdecken <ArrowUpRight size={15} />
                      </button>
                      <small className="privacy-note">
                        Dein Text bleibt lokal. Kein Konto. Kein automatischer
                        Buchdownload.
                      </small>
                    </section>
                  ) : (
                    <>
                      <section className="daily-section">
                        <div className="section-heading">
                          <div className="heading-icon">
                            <Sun size={23} />
                          </div>
                          <div>
                            <div className="eyebrow">
                              KLEINE SCHRITTE, JEDEN TAG
                            </div>
                            <h2>
                              Bugünün iki kelimesi{" "}
                              <span>Die zwei Wörter des Tages</span>
                            </h2>
                          </div>
                          <span className="lesson-count">
                            {
                              data.daily.filter(
                                (w) => w.lastReviewed === data.today,
                              ).length
                            }{" "}
                            / 2 entdeckt
                          </span>
                        </div>
                        {data.book?.isDemo === 1 && (
                          <div className="demo-banner">
                            <BookOpen size={16} />
                            <span>
                              Du entdeckst die Demo. Die Texte sind eigens
                              verfasst und keine Buchzitate.
                            </span>
                            <button onClick={() => setModal("import")}>
                              Eigenen Text importieren{" "}
                              <ArrowUpRight size={14} />
                            </button>
                          </div>
                        )}
                        {data.daily.map((w, i) => (
                          <WordCard
                            key={w.id}
                            word={w}
                            index={i + 1}
                            busy={busy}
                            today={data.today}
                            onRate={(rating) => void rate(w, rating)}
                          />
                        ))}
                        {!data.daily.length && (
                          <div className="empty-card">
                            <Leaf size={30} />
                            <h3>Raum für neue Wörter</h3>
                            <p>
                              Für zwei neue Tageswörter fehlen noch passende,
                              ungesehene Wörter. Importiere einen weiteren Text.
                              Einzelne Restwörter bleiben für das nächste Paar
                              erhalten.
                            </p>
                            <button
                              className="primary"
                              onClick={() => setModal("import")}
                            >
                              <Plus size={16} /> Weiteren Text importieren
                            </button>
                          </div>
                        )}
                      </section>
                      <div className="review-callout">
                        <div className="round-icon">
                          <RotateCcw size={21} />
                        </div>
                        <div>
                          <h3>
                            {due > 0
                              ? `${due} Wörter warten auf ein Wiedersehen`
                              : "Wiedersehen macht Wissen."}
                          </h3>
                          <p>
                            {due > 0
                              ? "Ein kurzer Rückblick, damit die Wörter bei dir bleiben."
                              : "Deine Wiederholungen erscheinen hier, sobald sie fällig sind."}
                          </p>
                        </div>
                        <button
                          className="secondary"
                          onClick={() => navigate("review")}
                        >
                          Wiederholen <ArrowRight size={16} />
                        </button>
                      </div>
                      <section className="week-panel">
                        <div>
                          <span className="eyebrow">
                            DEIN FORTSCHRITT, GANZ ENTSPANNT
                          </span>
                          <h3>Jedes Wort zählt.</h3>
                          <p>
                            Diese Woche <strong>{weekly} von 14</strong> Wörtern
                            begegnet
                          </p>
                          <div className="progress-track">
                            <span
                              style={{ width: `${(weekly / 14) * 100}%` }}
                            />
                          </div>
                        </div>
                        <div className="week-total">
                          <span>{data.stats.total}</span>
                          <p>Wörter insgesamt gelernt</p>
                          <button
                            className="text-button"
                            onClick={() => navigate("progress")}
                          >
                            Deinen Lernweg ansehen <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </section>
                      <div className="source-footer">
                        <BookOpen size={17} />
                        <span>
                          Deine Quelle: <strong>{data.book?.title}</strong>
                        </span>
                        <button onClick={() => setModal("import")}>
                          Buch verwalten <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
              {tab === "review" && (
                <>
                  <PageHeading
                    eyebrow="TEKRAR · WIEDERHOLEN"
                    title="Was bleibt, wächst."
                    description="Gib deinen Wörtern einen zweiten Moment. Ohne Eile."
                  />
                  <div className="review-meta">
                    <span>{due} fällig</span>
                    <span>{reviewed.length} in dieser Runde wiederholt</span>
                  </div>
                  {reviewWord ? (
                    <div className="flashcard">
                      <div className="eyebrow">ERINNERST DU DICH?</div>
                      <span className="difficulty">
                        {difficulty[reviewWord.difficulty]}
                      </span>
                      <h2 lang="tr">{reviewWord.word}</h2>
                      {!flipped ? (
                        <>
                          <p>
                            Nimm dir einen Moment. Was bedeutet dieses Wort?
                          </p>
                          <button
                            className="primary"
                            onClick={() => setFlipped(true)}
                          >
                            Bedeutung aufdecken <ChevronDown size={16} />
                          </button>
                        </>
                      ) : (
                        <>
                          <h3>{reviewWord.meaning}</h3>
                          <p>{reviewWord.explanation}</p>
                          <blockquote lang="tr">
                            <Highlight
                              text={reviewWord.sentence}
                              word={reviewWord.word}
                            />
                          </blockquote>
                          {reviewWord.sentenceTranslation ? (
                            <p>{reviewWord.sentenceTranslation}</p>
                          ) : (
                            <p className="muted">
                              Für diesen Originalsatz ist keine geprüfte
                              Übersetzung hinterlegt.
                            </p>
                          )}
                          <details>
                            <summary>
                              Quelle und Kontext <ChevronDown size={15} />
                            </summary>
                            <p>
                              {reviewWord.contextExplanation ||
                                "Der Originalabschnitt steht unten. Ohne KI-Anbindung werden keine historischen Einzelheiten ergänzt."}
                            </p>
                            <p lang="tr">{reviewWord.section}</p>
                            <small>
                              {reviewWord.source} · Abschnitt{" "}
                              {reviewWord.sectionNumber}
                            </small>
                          </details>
                          <div className="review-ratings">
                            {[
                              ["easy", "Sehr leicht"],
                              ["good", "Gewusst"],
                              ["unsure", "Unsicher"],
                              ["hard", "Nicht gewusst"],
                            ].map(([id, label]) => (
                              <button
                                className="secondary"
                                key={id}
                                disabled={busy}
                                onClick={() => void rate(reviewWord, id, true)}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="empty-card">
                      <CheckCheck size={36} />
                      <h2>
                        {reviewed.length
                          ? "Gut gemacht. Für jetzt ist alles frisch."
                          : "Alles in deinem Tempo."}
                      </h2>
                      <p>
                        Heute stehen keine weiteren Wiederholungen an. Du kannst
                        freiwillig ein bereits gesehenes Wort üben.
                      </p>
                      {optionalPool.length > 0 ? (
                        <button
                          className="primary"
                          onClick={() => {
                            setReviewId(optionalPool[0].id);
                            setFlipped(false);
                          }}
                        >
                          Ein Wort freiwillig üben <ArrowRight size={16} />
                        </button>
                      ) : (
                        <button
                          className="primary"
                          onClick={() => navigate("today")}
                        >
                          Zu deinen Tageswörtern <ArrowRight size={16} />
                        </button>
                      )}
                    </div>
                  )}
                </>
              )}
              {tab === "words" && (
                <>
                  <PageHeading
                    eyebrow="KELİME HAZİNEM · MEIN WORTSCHATZ"
                    title="Wörter, die dich begleiten."
                    description="Deine Sammlung wächst. Zwei Wörter nach dem anderen."
                  />
                  <div className="collection-toolbar">
                    <label className="search-box">
                      <Search size={19} />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Wort oder Bedeutung suchen …"
                        aria-label="Wörter durchsuchen"
                      />
                    </label>
                    <span>{data.vocabulary.length} Wörter</span>
                  </div>
                  <div className="filter-row">
                    {[
                      ["all", "Alle"],
                      ["new", "Neu"],
                      ["learned", "Gelernt"],
                      ["difficult", "Schwierig"],
                      ["due", "Zu wiederholen"],
                      ["historic", "Historisch / literarisch"],
                    ].map(([id, label]) => (
                      <button
                        key={id}
                        className={filter === id ? "filter active" : "filter"}
                        onClick={() => setFilter(id)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                  <div className="word-list">
                    {data.vocabulary
                      .filter((w) =>
                        (w.word + " " + w.meaning)
                          .toLocaleLowerCase("tr")
                          .includes(search.toLocaleLowerCase("tr")),
                      )
                      .filter(
                        (w) =>
                          filter === "all" ||
                          filter === w.status ||
                          (filter === "due" &&
                            !!w.nextReview &&
                            w.nextReview <= data.today) ||
                          (filter === "historic" &&
                            /histor|literar|religiös|gehoben|arabisch/i.test(
                              w.note,
                            )),
                      )
                      .map((w) => (
                        <button
                          className="word-row"
                          key={w.id}
                          onClick={() => setDetail(w)}
                        >
                          <span className="word-initial">
                            {w.word.charAt(0)}
                          </span>
                          <div>
                            <strong lang="tr">{w.word}</strong>
                            <span>{w.meaning}</span>
                            <small>
                              Entdeckt{" "}
                              {w.firstSeen ? formatDate(w.firstSeen) : "–"}
                              {w.lastReviewed
                                ? ` · Wiederholt ${formatDate(w.lastReviewed)}`
                                : ""}
                            </small>
                          </div>
                          <div className="word-row-status">
                            <span className={"status-label " + w.status}>
                              {statusLabel[w.status]}
                            </span>
                            <small>{difficulty[w.difficulty]}</small>
                          </div>
                          <ArrowUpRight size={17} />
                        </button>
                      ))}
                  </div>
                  {data.vocabulary
                    .filter((w) =>
                      (w.word + " " + w.meaning)
                        .toLocaleLowerCase("tr")
                        .includes(search.toLocaleLowerCase("tr")),
                    )
                    .filter(
                      (w) =>
                        filter === "all" ||
                        filter === w.status ||
                        (filter === "due" &&
                          !!w.nextReview &&
                          w.nextReview <= data.today) ||
                        (filter === "historic" &&
                          /histor|literar|religiös|gehoben|arabisch/i.test(
                            w.note,
                          )),
                    ).length === 0 && (
                    <div className="empty-card">
                      <Search size={28} />
                      <h3>Noch keine Wörter in dieser Ansicht</h3>
                      <p>
                        Ändere deine Suche oder entdecke deine ersten zwei
                        Tageswörter.
                      </p>
                    </div>
                  )}
                </>
              )}
              {tab === "progress" && (
                <>
                  <PageHeading
                    eyebrow="GELİŞİM · DEIN FORTSCHRITT"
                    title="Ein Wort nach dem anderen."
                    description="Kein Wettlauf. Nur du, dein Buch und das, was hängen bleibt."
                  />
                  <div className="stat-grid">
                    <div>
                      <Leaf size={21} />
                      <strong>{data.stats.total}</strong>
                      <span>Wörter gelernt</span>
                    </div>
                    <div>
                      <Flame size={21} />
                      <strong>{data.stats.streak}</strong>
                      <span>Tage in Folge aktiv</span>
                    </div>
                    <div>
                      <RotateCcw size={21} />
                      <strong>
                        {data.vocabulary.reduce((n, w) => n + w.reviewCount, 0)}
                      </strong>
                      <span>Lernbewertungen</span>
                    </div>
                  </div>
                  <section className="panel">
                    <div className="eyebrow">DIESE WOCHE</div>
                    <h2>Kleine Schritte summieren sich.</h2>
                    <p>{weekly} von 14 verschiedenen Wörtern bewertet</p>
                    <div className="progress-track">
                      <span style={{ width: `${(weekly / 14) * 100}%` }} />
                    </div>
                    <p className="muted">
                      Ziel: zwei Wörter pro Tag. Wiederholungen stärken, was du
                      schon kennst.
                    </p>
                  </section>
                  <section className="panel">
                    <h3>So wächst dein Wortschatz</h3>
                    <div className="distribution">
                      {[
                        ["learned", "Gelernt"],
                        ["learning", "Noch unsicher"],
                        ["difficult", "Schwierig"],
                        ["new", "Neu"],
                        ["deferred", "Später wiederholen"],
                      ].map(([id, label]) => (
                        <div key={id}>
                          <span>
                            <i className={"status-dot " + id} />
                            {label}
                          </span>
                          <strong>
                            {
                              data.vocabulary.filter((w) => w.status === id)
                                .length
                            }
                          </strong>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section className="panel">
                    <h3>Deine Daten gehören dir.</h3>
                    <p>
                      Texte und Lernstand werden in der lokalen Datenbank dieser
                      App gespeichert. Lade eine Kopie herunter, bevor du die
                      Umgebung löschst.
                    </p>
                    <a
                      className="secondary inline-flex"
                      href="/api/export"
                      download
                    >
                      <Download size={16} /> Daten exportieren
                    </a>
                  </section>
                </>
              )}
              <footer className="page-footer">
                <span className="mini-brand">
                  <Leaf size={13} /> kelime.
                </span>
                <span>
                  Az ama öz.{" "}
                  <span className="footer-translation">
                    Wenig, aber mit Bedeutung.
                  </span>
                </span>
                <span className="creator-credit">
                  Ersteller: <strong>Ömer Faruk Takkaç</strong>
                </span>
              </footer>
            </>
          )}
        </main>
      </div>
      <nav className="bottom-nav" aria-label="Mobile Navigation">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={tab === t.id ? "active" : ""}
            onClick={() => navigate(t.id)}
          >
            <t.icon size={21} />
            <span>{t.id === "words" ? "Wörter" : t.label}</span>
            {t.id === "review" && due > 0 && <i>{due}</i>}
          </button>
        ))}
      </nav>
      {toast && (
        <div className="toast" role="status">
          <Check size={17} />
          {toast}
        </div>
      )}
      {modal && (
        <Modal
          title={
            modal === "settings"
              ? "Dein Lernraum, deine Regeln."
              : "Dein Buch. Deine Wörter."
          }
          onClose={() => {
            if (!busy) setModal(null);
          }}
        >
          {error && (
            <div className="error" role="alert">
              {error}
            </div>
          )}
          {modal === "import" ? (
            <ImportForm
              data={data}
              busy={busy}
              onSubmit={async (form) => {
                if (
                  await act(
                    "import",
                    form,
                    "Dein Text wurde analysiert. Die nächsten Wörter warten auf dich.",
                  )
                )
                  setModal(null);
              }}
              onDemo={async () => {
                if (await act("demo")) setModal(null);
              }}
            />
          ) : (
            data && (
              <SettingsForm
                settings={data.settings}
                busy={busy}
                aiAvailable={data.aiAvailable}
                onSave={async (s) => {
                  if (
                    await act(
                      "settings",
                      s,
                      "Deine Einstellungen sind gespeichert.",
                    )
                  )
                    setModal(null);
                }}
                onImport={() => setModal("import")}
                onReset={async () => {
                  if (
                    window.confirm(
                      "Alle importierten Bücher und deinen gesamten Lernfortschritt unwiderruflich löschen?",
                    )
                  ) {
                    if (
                      await act(
                        "reset",
                        { confirm: "DELETE" },
                        "Lokale Lerndaten gelöscht.",
                      )
                    ) {
                      setModal(null);
                      setTab("today");
                    }
                  }
                }}
              />
            )
          )}
        </Modal>
      )}
      {detail && (
        <Modal
          title="Ein Wort aus deiner Sammlung"
          onClose={() => setDetail(null)}
        >
          <WordCard
            word={data?.vocabulary.find((w) => w.id === detail.id) || detail}
            today={data?.today || ""}
            busy={busy}
            onRate={(rating) => void rate(detail, rating)}
          />
          <button
            className="text-button"
            disabled={busy}
            onClick={() => void rate(detail, "known")}
          >
            Dieses Wort kenne ich bereits <CheckCheck size={16} />
          </button>
        </Modal>
      )}
    </div>
  );
}
function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
