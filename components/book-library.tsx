import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen, Check, Plus, Trash2 } from "lucide-react";
import Modal from "./modal";
import type { LibraryBook } from "@/lib/types";

export default function BookLibrary({
  books,
  busy,
  onImport,
  onSelect,
  onLearn,
  onDelete,
}: {
  books: LibraryBook[];
  busy: boolean;
  onImport: () => void;
  onSelect: (id: number) => void;
  onLearn: () => void;
  onDelete: (id: number) => Promise<boolean>;
}) {
  const imported = books.filter((book) => !book.isDemo).length;
  const [pending, setPending] = useState<LibraryBook | null>(null);
  const [deleteError, setDeleteError] = useState("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (pending) cancelRef.current?.focus();
  }, [pending]);
  return (
    <>
      <div className="library-intro">
        <div>
          <div className="eyebrow">KÜTÜPHANE · DEINE BIBLIOTHEK</div>
          <h1>Deine Bücher. Dein Lernweg.</h1>
          <p>Wähle das Buch, aus dem du gerade Wörter lernen möchtest.</p>
        </div>
        <button className="primary" disabled={busy} onClick={onImport}>
          <Plus size={17} /> Buch importieren
        </button>
      </div>
      {books.length ? (
        <>
          <p className="library-count">
            {imported} {imported === 1 ? "eigenes Buch" : "eigene Bücher"} ·
            Dein Lernstand bleibt beim Wechsel erhalten.
          </p>
          <div className="library-grid">
            {books.map((book) => (
              <article
                key={book.id}
                className={"library-book" + (book.active ? " is-active" : "")}
                aria-label={book.title}
              >
                <div className="library-book-top">
                  <div className="library-book-icon">
                    <BookOpen size={25} />
                  </div>
                  {book.active ? (
                    <span className="library-active">
                      <Check size={13} /> Aktives Lernbuch
                    </span>
                  ) : book.isDemo ? (
                    <span className="library-demo">Demotext</span>
                  ) : null}
                </div>
                <h2>{book.title}</h2>
                <p className="library-book-meta">
                  {book.isDemo
                    ? "Eigens verfasster Demotext"
                    : `Importiert am ${new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Berlin" }).format(new Date(book.importedAt))}`}{" "}
                  · {book.sectionCount}{" "}
                  {book.sectionCount === 1 ? "Abschnitt" : "Abschnitte"}
                </p>
                <p className="library-book-note">
                  {book.active
                    ? "Aus diesem Buch stammen deine aktuellen Lernbeispiele."
                    : "Dein Buch bleibt gespeichert und ist jederzeit wieder auswählbar."}
                </p>
                <button
                  className={book.active ? "primary" : "secondary"}
                  disabled={busy}
                  onClick={() => (book.active ? onLearn() : onSelect(book.id))}
                >
                  {book.active ? "Weiterlernen" : "Dieses Buch auswählen"}{" "}
                  <ArrowRight size={16} />
                </button>
                <button
                  className="library-delete"
                  disabled={busy}
                  aria-label={`Buch „${book.title}“ löschen`}
                  onClick={() => {
                    setDeleteError("");
                    setPending(book);
                  }}
                >
                  <Trash2 size={15} /> Buch löschen
                </button>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="empty-card library-empty">
          <BookOpen size={34} />
          <h2>Hier beginnt deine Bibliothek.</h2>
          <p>
            Importiere dein erstes Buch. Weitere Bücher kannst du später hier
            hinzufügen und jederzeit wechseln.
          </p>
          <button className="primary" disabled={busy} onClick={onImport}>
            <Plus size={17} /> Erstes Buch importieren
          </button>
        </div>
      )}
      {pending && (
        <Modal
          title="Buch löschen?"
          onClose={() => {
            if (!busy) setPending(null);
          }}
        >
          <div className="book-delete-confirm">
            <p>
              Möchtest du <strong>„{pending.title}“</strong> aus deiner
              Bibliothek löschen?
            </p>
            <p>
              Das Buch und seine gespeicherten Textstellen werden entfernt.
              Deine Wortbewertungen und dein bisheriger Lernverlauf bleiben
              erhalten.
            </p>
            {pending.active && (
              <p>
                {books.length > 1
                  ? "Du löschst dein aktives Lernbuch. Anschließend wird automatisch ein anderes Buch ausgewählt."
                  : "Danach kannst du ein neues Buch importieren."}
              </p>
            )}
            <p>Du kannst das Buch später erneut importieren.</p>
            {deleteError && (
              <p className="error" role="alert">
                {deleteError}
              </p>
            )}
            <div className="book-delete-actions">
              <button
                className="secondary"
                disabled={busy}
                ref={cancelRef}
                onClick={() => setPending(null)}
              >
                Abbrechen
              </button>
              <button
                className="primary book-delete-submit"
                disabled={busy}
                onClick={async () => {
                  setDeleteError("");
                  if (await onDelete(pending.id)) setPending(null);
                  else
                    setDeleteError(
                      "Das Buch konnte nicht gelöscht werden. Bitte versuche es erneut.",
                    );
                }}
              >
                <Trash2 size={16} />{" "}
                {busy ? "Wird gelöscht …" : "Buch endgültig löschen"}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
