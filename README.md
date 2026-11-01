# Kelime Hazinesi · Her gün biraz daha.

Eine ruhige, mobile Lernbibliothek für anspruchsvolle türkische Wörter. Next.js 16, React 19, TypeScript, lokal gespeicherte Schriftarten und SQLite. Kein Konto, kein automatischer Download von Buchtexten, kein externer Dienst für den Grundbetrieb.

## Lokal starten

Voraussetzung: **Node.js 24 LTS** (SQLite ist in Node enthalten) und npm.

```sh
npm ci
npm run dev
```

Im Browser `http://localhost:3000` öffnen. „Mit der Demo entdecken“ öffnet 24 kuratierte Begriffe mit eigens verfassten türkischen Lerntexten und deutschen Übersetzungen. **Die Demo ist kein Auszug aus Siyer-i Nebi.** Alternativ direkt deinen eigenen Buchtext importieren und dein Niveau auswählen.

Produktionsbetrieb:

```sh
npm run build
npm start
```

Die App ist für eine einzelne Person auf einer lokalen/vertrauten Maschine ausgelegt. Kein Mehrbenutzerbetrieb oder Login. Nicht ohne vorgeschalteten Zugriffsschutz öffentlich bereitstellen. Der Webserver bindet für Cloud-Entwicklung an `0.0.0.0`.

## Was funktioniert

- 1–100 einstellbare neue Tageswörter (standardmäßig 2) je Kalendertag der eingestellten Zeitzone (standardmäßig Berlin). Die Auswahl bleibt bei Neuladen und Niveauänderung bestehen. Änderungen der Wörterzahl gelten sofort; bereits bewertete Tageswörter bleiben auch bei einem niedrigeren Ziel erhalten. Verpasste Tage werden nicht nachgeholt.
- Auswahl nach Häufigkeit und Nähe zum gewählten Niveau. Das Offline-Wörterbuch enthält 24 bewusst ausgewählte, gehobene Begriffe statt Eigennamen oder Funktionswörter. Einfache Beugungen und häufige Stamm-Lautwechsel werden erkannt; dies ist keine vollständige türkische Morphologieanalyse.
- Originalsatz, Hervorhebung, Quelle, Abschnitt, Wortwissen und aufklappbarer Kontext. Jeder ausgewählte Satz wird gegen den tatsächlich importierten Text geprüft. Alle Vorkommen bleiben in SQLite erhalten.
- Bewertungen, Wiederholungsplanung, umdrehbare Wiederholungskarten, Wortsuche und Statusfilter; fällige Wiederholungen sind zusätzlich zu den neuen Tageswörtern verfügbar.
- Fortschritt, Lernserie, Niveau, große Schrift, heller/dunkler/System-Modus, türkische Sprachausgabe über die auf dem Gerät verfügbaren Browserstimmen.
- JSON-Datenexport und ausdrücklich bestätigtes Löschen aller Lerndaten. Beim Import weiterer Bücher bleiben bisherige Wörter und Lernstände erhalten.

Sind weniger ungesehene passende Wörter als gewünscht vorhanden, zeigt die App die verfügbaren Wörter und einen Hinweis an. Weiterer Import kann eine unvollständige Tageslektion auffüllen. Beim Senken des Ziels bleiben entfernte, noch unbewertete Wörter für spätere Tage verfügbar. Bestehende Zwei-Wort-Lektionen und Einstellungen werden beim Update automatisch übernommen. „Bereits bekannt“ ist in den Details der Wortübersicht verfügbar.

## Beispielsätze aus dem Fließtext

Die Satzwahl überspringt erkennbare Kapitelüberschriften, Inhaltsverzeichniseinträge,
reine Seitenzahlen und unvollständige Satzfragmente. Alphabetische Unterpunkte
wie „a) Habeşistan’a hicret edenler“ und entsprechend gekennzeichnete
Inhaltsverzeichnis-Abschnitte werden ebenfalls ausgeschlossen. Das gilt beim Import und
auch beim Anzeigen bereits gespeicherter Vorkommen. Originaltext, Schreibweise,
Bewertungen und Tagesauswahl bleiben erhalten. Kann für ein bereits gelerntes
Wort kein vollständiger Satz gefunden werden, zeigt die Karte einen Hinweis.
Die Erkennung verwendet Layout- und Sprachmerkmale, keine vollständige
Grammatikanalyse; ungewöhnliche Buchlayouts können weiterhin Sonderfälle enthalten.

## PDF-Seitenangaben

Bei PDF-Importen wird die tatsächliche PDF-Seite neben dem Abschnitt angezeigt.
Bei Sätzen über einen Seitenwechsel hinweg erscheint ein Bereich.
Die PDF-Seite kann von der gedruckten Buchseitenzahl abweichen; Buchseiten werden
nicht aus Abschnittsnummern geschätzt. TXT und EPUB besitzen keine festen
PDF-Seiten. Frühere PDF-Importe müssen für Seitenangaben erneut importiert werden;
Bewertungen und freigeschaltete Wörter bleiben dabei erhalten. Zeilennummern
werden nicht angezeigt, weil Zeilenumbrüche von der Extraktion abhängen.

## Import & optionale KI

Unterstützt werden UTF-8-TXT/Markdown, **PDFs mit Textebene** und unverschlüsselte EPUBs in Spine-Lesereihenfolge, maximal 15 MB und 3 Millionen extrahierte Zeichen. PDF maximal 1.000 Seiten, EPUB maximal 1.000 Kapitel. Gescanntes PDF benötigt vorher OCR; DRM wird nicht umgangen. Bitte nur eigene oder berechtigt nutzbare Texte importieren.

Ohne KI liefert das Wörterbuch Bedeutungen und Worterklärungen. **Für fremde Originaltexte werden keine Satzübersetzungen und keine historischen Zusammenfassungen erfunden.** Fehlende deutsche Satz-/Kontextanalysen werden in der Oberfläche benannt und der Originalabschnitt bleibt lesbar.

Optional `.env.example` nach `.env.local` kopieren und `OPENAI_API_KEY` sicher eintragen (niemals committen). Server neu starten. Beim Import erscheint dann eine ausdrückliche KI-Option. Nur bei Aktivierung werden bis zu 65.000 Zeichen an die OpenAI-API gesendet. Standardmodell: `gpt-4.1-mini`, über `KELIME_AI_MODEL` änderbar. Benötigter Netzwerkhost: `api.openai.com`. Eventuelle API-Kosten trägt der Nutzer.

Die KI kann bis zu 40 weitere Begriffe einschließlich deutscher Übersetzungen und kurzer Kontextanalyse erkennen. Rückgaben werden auf Form und **exakte Quellenübereinstimmung der Sätze** geprüft; neu erfundene Beispielsätze werden verworfen. Übersetzungen und historische Deutungen sind KI-generiert, nicht redaktionell geprüft. Bei KI-Fehlern wird ein konkreter Fehler angezeigt; der Import kann ohne KI wiederholt werden. Bereits angelegte Wörter behalten ihre Definitionen. Die Offline-Funktion ist vollständig ohne API-Schlüssel nutzbar, ihr Wortschatz ist bewusst begrenzt.

Die gespeicherte Lernzeit ist eine persönliche Vormerkung. Hintergrund-/Push-Benachrichtigungen sind nicht implementiert und werden in den Einstellungen auch nicht versprochen.

## Datenhaltung & Architektur

`data/kelime.sqlite` wird beim ersten API-Aufruf angelegt, einschließlich WAL/SHM-Dateien. Dieses Verzeichnis ist ignoriert. Alternativ `KELIME_DATA_DIR` auf ein dauerhaftes Verzeichnis setzen. Texte bleiben auf dem **App-Server**, nicht im Browser; Browser-Neuladen und Prozessneustart verlieren sie nicht. Bei Verlust der Maschine ohne Volume/Snapshot sind sie weg. Für vollständige Backups den Server stoppen und das Datenverzeichnis sichern. Der JSON-Export ist zusätzlich lesbar; eine automatische Wiederherstellung aus JSON ist nicht implementiert.

- `app/`: App Router, Layout und globale, responsive Styles.
- `components/`: getrennte Komponenten für Navigation, Lernkarten, Import/Einstellungen, Fortschritt und zugängliche native Dialoge.
- `lib/db.ts`: SQLite-Schema, Transaktionen, Tagesauswahl und Persistenz.
- `lib/learning.ts`: Kalenderdatum, Morphologie-Heuristik, Textsegmentierung, Lernintervalle.
- `lib/importer.ts`: lokale TXT-/PDF-/EPUB-Extraktion.
- `lib/lexicon.ts`: kuratiertes Wörterbuch und ausdrücklich eigenständige Demotexte.
- `lib/ai.ts`: optionale serverseitige Analyse mit Quellenprüfung.
- `app/api/[...action]/route.ts`: JSON-/Multipart-API, Eingabeprüfung und Fehlerantworten.

Datenmodell: `User`, `Book`, `TextSection`, `VocabularyWord` (lexikalische Felder als JSON), `WordOccurrence`, `LearningProgress`, `DailyWords`; zusätzlich `Activity` für Lerntage und `AppMeta` für die aktive Quelle. Ein lokaler Nutzer. SQL-Fremdschlüssel, parametrisierte Abfragen und atomare Schreibvorgänge.

API: `GET /api/state`, `GET /api/export`; `POST /api/import` (Multipart `file`, `level`, `useAI`), `/api/demo`, `/api/rate` (`id`, `rating`), `/api/settings`, `/api/reset` (`confirm: "DELETE"`).

Wiederholungen: schwierig/später nach 1 Tag, unsicher nach 2, verstanden zunächst nach 4; Wiederholungsbewertungen „gewusst“ zunächst nach 3, „sehr leicht“ nach 7 Tagen. Erfolgreiche Wiederholungen verlängern das Intervall gedeckelt. Erneutes Bewerten am selben Tag korrigiert die Bewertung, ohne den Wiederholungszähler aufzublähen.

## Prüfen

```sh
npm test
npm run typecheck
npm run build
npm run test:e2e
```

Die Unit-/Integrationstests verwenden eigene temporäre Datenbanken. Geprüft werden Quellenbelege und passende Demoübersetzungen, Tagesstabilität und Tageswechsel, Persistenz, Fälligkeiten, türkische Zeichen/Lautwechsel sowie TXT/PDF/EPUB. Der Playwright-Test prüft die mobile App, Bewertungen nach Neuladen, Navigation, Suche, Wiederholung, Dark Mode, Fehleranzeige und echten Dateiimport. Er verwendet eine isolierte Datenbank unter `/tmp/kelime-browser-tests`; keinen bereits gestarteten normalen Entwicklungsserver für den E2E-Lauf verwenden.

Chromium wird unter `/usr/bin/chromium` erwartet. Alternativ `PLAYWRIGHT_CHROMIUM_PATH` setzen oder Playwrights Chromium mit `npx playwright install chromium` installieren. Die Tests speichern Ansichten unter `/tmp/kelime-mobile.png` und `/tmp/kelime-desktop.png`.

## Windows mit automatischer Einrichtung

`scripts/install-windows.ps1 -Revision <vollstaendige-Commit-SHA>` lädt eine portable Node.js-24-Laufzeit von nodejs.org herunter, prüft ihre SHA-256-Prüfsumme anhand der offiziellen Liste und lädt diese App aus dem angegebenen GitHub-Commit. Installation unter `%LOCALAPPDATA%\Kelime`, ohne Administratorrechte. Der Installer richtet eine Desktopverknüpfung ein und startet die App. Der Datenordner bleibt separat unter `%LOCALAPPDATA%\Kelime\data`. Vorhandene vollständige App-Installationen werden weiterverwendet; unvollständige Ordner nicht überschrieben. Ein Internetzugang ist für die Ersteinrichtung erforderlich. Der Installer benötigt Windows PowerShell 5.1 oder neuer.

## Türkische PDF-Schriften und Windows-Updates

Ersteller: **Ömer Faruk Takkaç**.

Ältere türkische PDFs können Schriftcodes wie `do€ru`, `haklar›n›` und `komﬂularla` enthalten. Die App erkennt charakteristische Muster und stellt die entsprechenden türkischen Zeichen für Anzeige und Worterkennung wieder her. Auch die von früheren PDF.js-Versionen zu ASCII `fl`/`fi` normalisierten Ligaturen werden anhand einer begrenzten Liste türkischer Wortstämme berücksichtigt. Korrekt kodierter Text, Währungsangaben und normale `fl`-Verbindungen werden nicht pauschal ersetzt. Dies ist keine allgemeine OCR- oder Rechtschreibkorrektur.

Die unveränderte Extraktion bleibt in SQLite gespeichert und ist bei berichtigten Lernkarten aufklappbar. Dadurch wirken die Anzeigeberichtigungen auch auf bereits importierte Bücher, ohne Lernbewertungen, Tagesauswahl oder Originaltext zu überschreiben. PDF-Importe bewahren Ligaturen jetzt vor der Schriftkorrektur.

`scripts/update-windows.ps1 -Revision <Commit-SHA>` aktualisiert die vorhandene portable Windows-Installation. Zuerst das Kelime-Startfenster schließen. Der Updater prüft den Download und installiert Pakete in einem separaten Ordner, sichert die bisherige App und den Datenordner unter `%LOCALAPPDATA%\Kelime\backups`, bewahrt lokale `.env`-Dateien und lässt externe Lerndaten an ihrem Ort. Scheitert der Ordneraustausch, wird die bisherige App zurückverschoben. Die Desktopverknüpfung bleibt gültig.

Zusätzliche PowerShell-Prüfung: `pwsh -NoProfile -File tests/windows-update.ps1` verwendet isolierte temporäre Dateien und simulierte Windows-/Downloadfunktionen für Erfolg, Installationsfehler, laufende App und Rollback. Sie ersetzt keinen Test auf einem echten Windows-Laptop.

## TDK-orientierte Schreibprüfung

Die lokale Regelprüfung (`lib/orthography.ts`) läuft beim Laden der Wörter serverseitig im Hintergrund. Ihre Ergebnisse stehen in `Word.orthography` und `Word.wordOrthography` in der lokalen Zustands-API bereit. In Lern- und Wiederholungskarten gibt es auf Wunsch des Nutzers keinen separaten sichtbaren Prüfungsabschnitt mehr. Die Prüfung erkennt weiterhin ausgewählte eindeutige Getrennt-/Zusammenschreibungen wie `herşey → her şey`, `bir kaç → birkaç`, `pekçok → pek çok` sowie eine begrenzte Liste häufiger Wortfehler. Originalzitate werden dadurch nicht umgeschrieben.

**Grenzen:** Dies ist kein vollständiges türkisches Rechtschreibwörterbuch und keine vollständige Grammatikprüfung. Die lokale Regelliste (Version 1.0) aktualisiert sich nicht selbst und besitzt keine behauptete tägliche TDK-Verifikation. Kontextabhängige Regeln für `de/da`, `ki`, Fragepartikeln, Eigennamen oder historische Schreibungen werden nicht pauschal ersetzt. „Keine Auffälligkeit“ bedeutet nur, dass die unterstützten Regeln keinen Treffer hatten.

Die technische Schnittstelle für eine explizite aktuelle Wörterbuchabfrage bleibt erhalten (`GET /api/tdk?word=...`, serverseitig `https://sozluk.gov.tr/gts?ara=...`). Nach Entfernung des Prüfungsabschnitts gibt es dafür keinen Button in der Lernkarte und keinen automatischen externen Aufruf. Die lokale Hintergrundprüfung benötigt kein Netzwerk. Nicht gefunden, nicht erreichbar und tatsächlich abgerufene Schreibformen bleiben unterschiedliche Ergebnisse.

Die Cloud-Netzwerkfreigaben für `tdk.gov.tr` und `sozluk.gov.tr` wurden nur als Konfigurationsentwurf gespeichert. Die laufende Cloud erlaubt diese Verbindung noch nicht; der echte TDK-Zugriff wurde dort daher nicht bestätigt. Parser/Fehlerzustände und Browseranzeige wurden mit simulierten Wörterbuchantworten geprüft. Auf Windows braucht die optionale Abfrage eine erreichbare TDK-Webseite. Die offizielle API kann sich ändern; unerwartete Antworten werden als nicht verfügbare Bestätigung behandelt.

## Auseinandergerissene PDF-Wörter

`lib/pdf-word-breaks.ts` stellt ausgewählte, vollständig bekannte türkische Wortformen wieder her, die durch Leerzeichen, einzelne Zeilenumbrüche oder Trennstriche mit nachfolgendem Leerraum auseinandergerissen wurden. Beispiele: `Peygambe rimiz → Peygamberimiz`, `te fek kür → tefekkür`, `tefek-\nkür → tefekkür` und `iba- ret → ibaret`. Mehrere Teile können innerhalb einer Wortform verbunden werden; vorhandene Apostrophe und Groß-/Kleinschreibung bleiben dabei erhalten. Die Trennungsreparatur ist keine eigenständige Entscheidung über die richtige Apostrophschreibung.

Die Erkennung verwendet ein begrenztes Inventar bekannter Wörter und belegter gebeugter Formen. Unbekannte Kombinationen, Satzzeichen und Absatzgrenzen werden nicht überbrückt. Echte Wortverbindungen wie `bir şey`, `her gün` oder `ben de` sowie gewöhnliche Bindestriche bleiben bestehen. Das Verfahren behauptet keine vollständige türkische Morphologieanalyse.

Die Reparatur ist in die bestehende PDF-Anzeigekorrektur integriert und wirkt auch auf gespeicherte Bücher. Neue Importe verwenden dieselbe Korrektur für die Vokabelerkennung. Rohtext, Quellsätze, Lernbewertungen und feste Tagesauswahl bleiben erhalten; berichtigte Karten bieten weiterhin eine aufklappbare unveränderte Textextraktion.
