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

- 1–100 einstellbare neue Tageswörter (standardmäßig 2) je Kalendertag der eingestellten Zeitzone (standardmäßig Berlin). Die Auswahl bleibt beim Neuladen bestehen. Buch- und Niveauwechsel starten sofort eine passende eigene Auswahl; bisherige Bewertungen bleiben erhalten. Änderungen der Wörterzahl gelten sofort; bereits bewertete Tageswörter bleiben auch bei einem niedrigeren Ziel erhalten. Verpasste Tage werden nicht nachgeholt.
- Auswahl nach Häufigkeit innerhalb der gewählten Stufe (B1, B2 oder C1). Das Offline-Wörterbuch enthält 6.024 Lernbegriffe, darunter gehobene, historische und religiöse Wörter. Die Stufen sind eine didaktische Orientierung nach Wortschwierigkeit, keine offizielle CEFR-Wortliste oder Einstufungsprüfung. Häufige Beugungen, ausgewählte Vokalausfälle und belegte historische Schreibvarianten werden erkannt; dies ist keine vollständige türkische Morphologieanalyse.
- Originalsatz, Hervorhebung, Quelle, Abschnitt, Wortwissen und aufklappbarer Kontext. Jeder ausgewählte Satz wird gegen den tatsächlich importierten Text geprüft. Alle Vorkommen bleiben in SQLite erhalten.
- Bewertungen, Wiederholungsplanung, umdrehbare Wiederholungskarten, Wortsuche und Statusfilter; fällige Wiederholungen sind zusätzlich zu den neuen Tageswörtern verfügbar.
- Fortschritt, Lernserie, Niveau, große Schrift, heller/dunkler/System-Modus, türkische Sprachausgabe über die auf dem Gerät verfügbaren Browserstimmen.
- JSON-Datenexport und ausdrücklich bestätigtes Löschen aller Lerndaten. Beim Import weiterer Bücher bleiben bisherige Wörter und Lernstände erhalten.

Noch nie bewertete Wörter bleiben als neue Lernwörter verfügbar, auch wenn sie
schon in einer früheren Tagesauswahl angezeigt wurden. Ältere unvollständige
Import-Indizes werden aus dem gespeicherten Rohtext und dem vorhandenen
Wörterbuch ergänzt. Sind in der gewählten Stufe weniger passende Wörter als
gewünscht vorhanden, zeigt die App die verfügbaren und einen Hinweis.

Wenn alle verfügbaren Lernwörter einer Stufe im aktuellen Buch erstmals
bearbeitet wurden, zeigt die App einen motivierenden Abschluss mit drei Wegen:
zur nächsten Stufe wechseln (B1 → B2 → C1), ein anderes Buch mit gleicher Stufe
importieren oder freiwillig wiederholen. C1 ist die höchste angebotene Stufe.
Das bedeutet den Abschluss dieser erkannten Buchauswahl, keine allgemeine
CEFR-Zertifizierung. Bei null passenden Wörtern erscheint ein neutraler Hinweis
statt einer unberechtigten Glückwunschmeldung. Wiederholungen werden nicht
ungefragt in die neuen Tageswörter gemischt.

## Erweiterter Buchwortschatz

Die ursprüngliche Wortliste mit 24 Begriffen bleibt als eigenständige Demo erhalten.
Für eigene Bücher werden zusätzlich `lib/book-vocabulary.ts` und die thematisch
erweiterten Tabellen unter `lib/vocabulary/` verwendet. Jeder Eintrag
enthält eine deutsche Bedeutung und Erklärung, eine türkische Umschreibung und
verwandte Wörter. Neue Buchwörter bekommen keine erfundenen Beispielsätze: Nur
passende vollständige Sätze aus dem aktiven Buch schalten sie für eine Stufe frei.
Namen, bloße Überschriften und Tabellen ergeben dadurch keine Lernkarten.

Die Erweiterung greift auch beim Öffnen bereits importierter Bücher. Vorhandene
Wort-IDs, Bewertungen und Wiederholungsdaten bleiben erhalten;
fehlende Wörter werden aus den gespeicherten Originalabschnitten ergänzt.
Ein erneuter Import ist für die Wortauswahl nicht nötig. Fehlende alte PDF-Seiten-
zuordnungen können weiterhin durch erneuten Import ergänzt werden.
Das Offline-Wörterbuch umfasst nach der Niveauprüfung 2.058 B1-, 2.173 B2- und 1.793 C1-Einträge.
Die normalisierten Lemmata sind über alle Stufen eindeutig; Beugungen werden
nicht als zusätzliche Einträge gezählt. Die Gesamtzahl bleibt bei 6.024; Niveauausreißer werden umgeordnet, statt
starre Quoten zu erhalten. Tests sichern eindeutige Lemmata und vollständige
Bedeutungen, Erklärungen und türkische Umschreibungen.
Die eigenständige Demo bleibt bei 24 eigens verfassten Lerntexten.

In den Einstellungen stehen die Wörterbuch-Gesamtzahlen. Für die Tagesauswahl
zählen die mit passenden Sätzen im aktiven Buch belegten Lernwörter. Viele
Wörter pro Stufe im Katalog bedeuten nicht, dass jedes Buch diese enthält.
Die Anzahl hängt vom Buch und seinen geeigneten Beispielsätzen ab. Der Offline-
Katalog ist weiterhin begrenzt; unbekannte Wörter werden nicht als automatisch
übersetzt oder als vollständig analysiert ausgegeben.

## Sprachliche Wörterbuchprüfung

Am 4. November 2026 wurden alle 6.024 Einträge sprachlich durchgesehen und 880
Einträge überarbeitet. Die Korrekturen betreffen Bedeutungen, deutsche Erklärungen,
türkische Umschreibungen, klare Niveauausreißer und zwei eindeutige Schreibweisen.
Die Stufen sind weiterhin didaktische Orientierung, keine amtliche CEFR-Zertifizierung.
Der [Prüfbericht](docs/woerterbuch-pruefung-2026-11-04.md) nennt Umfang und offene Fälle.

Beim Öffnen werden gespeicherte ursprüngliche Offline-Einträge einmalig aktualisiert.
Wort-IDs, Bewertungen, Originaltexte, Seitenangaben und vorhandene Satzübersetzungen
bleiben erhalten. Von der alten Offline-Definition abweichende eigene oder KI-erstellte
Definitionen werden nicht überschrieben. Ältere Sicherungen werden nach dem Import
auf dieselbe Weise aktualisiert. Geänderte Niveaus gelten auch für die nächste Tagesauswahl.

Die Wortsuche unterscheidet bedeutungstragende Zirkumflexe bei `hala/hâlâ`,
`adet/âdet`, `kar/kâr` und `varis/vâris`. Die Datenbank-IDs bleiben dabei stabil;
Originalzitate werden nicht umgeschrieben. Fehlende bedeutungstragende Zeichen
werden nicht durch eine unbelegte Bedeutungsannahme ergänzt.

## Navigation am Handy

Horizontale Wischgesten wechseln zwischen den fünf Kategorien: nach links zur
nächsten, nach rechts zur vorherigen. An den Enden gibt es keinen Umlauf. Vertikales
Scrollen, Textauswahl, Bedienelemente, Satzkarussell und Dialoge bleiben unabhängig.
Ein kurzer Schiebeübergang begleitet den Wechsel; die Systemeinstellung für
reduzierte Bewegung wird berücksichtigt. Die Navigation bleibt auch per Antippen verfügbar.
Wiederholungskarten zeigen vorhandene Satzübersetzungen, aber keinen Platzhalter
für fehlende Übersetzungen.

## Bibliothek und aktives Lernbuch

Im Reiter „Bibliothek / Kütüphane“ bleiben alle importierten Bücher erreichbar.
Das aktive Buch ist markiert; seine Originalbeispiele bilden die Grundlage für
Tageslektion und Wiederholung. Beim Wechsel bleiben Wortbewertungen erhalten.
Tagesauswahlen werden je Buch, Niveau und Datum gespeichert, sodass die Rückkehr
zu einem Buch auch bereits bewertete Karten derselben Lektion bewahrt.
Bücher lassen sich mit Bestätigung einzeln löschen. Ihre Textstellen und Tagesauswahlen
werden entfernt; gemeinsame Wortbewertungen und der Lernverlauf bleiben erhalten.
Beim Löschen des aktiven Buchs wird ein verbleibendes Buch ausgewählt.
Sicherungen enthalten die aktive Buch-ID und diese Auswahlen als optionale
Zusatzfelder; ältere Sicherungen bleiben kompatibel.

## Beispielsätze aus dem Fließtext

Die Auswahl lässt nur Ausschnitte mit erkennbarer Satzstruktur zu.
Kapitelüberschriften, Inhaltsverzeichnisse, Tabellenblöcke, nummerierte und
alphabetische Listen sowie andere Aufzählungen werden vor dem Zerlegen in Sätze
ausgeschlossen. Auch bei älteren Vorkommen wird der ursprüngliche Abschnitt
erneut geprüft, damit eine beim Satzsplit entfernte Nummerierung oder
Tabellenspalte nicht einen falschen Fließtextsatz entstehen lässt.
Originaltext, Bewertungen und Tagesauswahl bleiben erhalten. Ist kein geeigneter
Beleg vorhanden, zeigt die Karte einen Hinweis statt eines solchen Ausschnitts.
Die automatische Erkennung bleibt von den im PDF extrahierbaren Layoutmerkmalen
abhängig und ist keine vollständige Grammatikanalyse.

Die Fundzahl zählt alle erkannten Wortvorkommen im gespeicherten Text des
aktuell geöffneten Buches, einschließlich mehrfacher Nennungen in einem Satz
und Nennungen außerhalb des Fließtexts. Die Zahl geeigneter, unterschiedlicher
Beispielsätze ist davon unabhängig. Beispiele werden aus dem gespeicherten
Originaltext ermittelt, auch wenn ältere Satzindizes unvollständig sind.
Bei einem importierten Buch wird nicht auf Demotext oder andere Bücher ausgewichen.
Wiederkehrende Seitenköpfe werden anhand mehrerer nummerierter Vorkommen erkannt,
bei der Satzanalyse ausgeblendet und aus der Anzeige entfernt; die Rohtextspanne
bleibt unverändert. Dadurch bleiben auch Sätze über Seitenwechsel hinweg
verwendbar. Blocksatz mit Tabulatoren ist allein kein Tabellenbeweis.
Die Regeln gelten für jedes Wörterbuchwort gleichermaßen. Dialoge nach einer
Redeeinleitung und mehrzeilige Sätze bleiben erhalten. Abkürzungen wie `Hz.` und
Ordnungszahlen wie `II. yılında` zerlegen einen Satz nicht. Ein bloßes Listenzeichen
wird weiterhin nicht als Dialog behandelt.
PDF-Worttrennungen werden für bekannte ganze Wortformen zusammengezogen. Neben
den hinterlegten Formen dienen ungetrennte Schreibungen desselben Buches als
Nachweis für Trennstriche am Zeilenende (etwa `hicret-\nten → hicretten`).
Zusätzlich prüft ein komprimiertes Offline-Inventar aus dem MIT-lizenzierten
türkischen Hunspell-Wörterbuch ausdrücklich hinterlegte Wortformen und ihre
zugeordneten Endungen. Dadurch werden auch Formen wie `bera-\nberdi → beraberdi`
und `göste-\nriyor → gösteriyor` erkannt, ohne einzelne Beispielsätze zu ändern.
Die Prüfung gilt für alle Lernwörter, auch in bereits importierten Büchern.
Sie benötigt keinen erneuten Download, keine KI und keine Online-Abfrage.
Details, Lizenz und reproduzierbarer Datenaufbau stehen unter
[`lib/turkish-word-forms/`](lib/turkish-word-forms/README.md).
Unbekannte Zusammensetzungen und echte Bindestriche werden nicht blind entfernt;
Absatzgrenzen und Apostrophe bleiben erhalten. Die Anzeige glättet Zeilenumbrüche
und Blocksatzabstände, während Rohtext und Quellenpositionen unverändert bleiben.
Innerhalb einer Zeile belegte Bindestrichverbindungen bleiben auch über einen
Zeilenumbruch erhalten. Noch unbestätigte Worttrennungen führen zum Ausschluss
des beschädigten Beispielsatzes; Fundstellenzählung und Originaltext bleiben
erhalten. Es werden keine Wörter oder Ersatzsätze erfunden.
Neue Importe behalten auch kurze Quellabsätze für die Zählung.
Wiederhergestellte alte Sätze bekommen nur dann PDF-Seiten, wenn diese sicher
zugeordnet werden können; fehlende Seiten lassen sich durch erneuten Import erfassen.

Pro Wort stehen alle erkannten unterschiedlichen, belegten Beispielsätze aus
demselben Quellbuch bereit; es gibt keine feste Grenze von 30 Beispielen.
Mit den kleinen Pfeilen rechts oben in der Beispielbox wechselt
der Satz mit einem gerichteten Schiebeübergang; Abschnitt und PDF-Seite wechseln
passend mit. Identische Sätze erscheinen nur einmal. Bei nur einem verfügbaren
Beispiel sind die Pfeile deaktiviert. Links-/Rechts-Pfeiltasten werden in der
fokussierten Beispielbox unterstützt, reduzierte Bewegungseinstellungen beachtet.
Blättern verändert weder Bewertungen noch Wiederholungsplanung.

Die bisherige Einstellung zum Ausschließen von PDF-Seiten ist entfernt.
Gespeicherte Seitensperren älterer Versionen werden nicht mehr angewendet.

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

`data/kelime.sqlite` wird beim ersten Datenabruf angelegt, einschließlich WAL/SHM-Dateien. Dieses Verzeichnis ist ignoriert. Alternativ `KELIME_DATA_DIR` auf ein dauerhaftes Verzeichnis setzen. Texte bleiben auf dem **App-Server**, nicht im Browser; Browser-Neuladen und Prozessneustart verlieren sie nicht. Bei Verlust der Maschine ohne Volume/Snapshot sind sie weg. Für vollständige Backups den Server stoppen und das Datenverzeichnis sichern. Der JSON-Export ist zusätzlich lesbar; eine automatische Wiederherstellung aus JSON ist nicht implementiert.

- `app/`: App Router, Layout und globale, responsive Styles.
- `components/`: getrennte Komponenten für Navigation, Lernkarten, Import/Einstellungen, Fortschritt und zugängliche native Dialoge.
- `lib/db.ts`: SQLite-Schema, Transaktionen, Tagesauswahl und Persistenz.
- `lib/learning.ts`: Kalenderdatum, Morphologie-Heuristik, Textsegmentierung, Lernintervalle.
- `lib/importer.ts`: lokale TXT-/PDF-/EPUB-Extraktion.
- `lib/lexicon.ts`: Demowörterbuch und Zusammenstellung des erweiterten Lernwortschatzes.
- `lib/book-vocabulary.ts`: bestehende Worterklärungen für importierte Bücher.
- `lib/vocabulary/`: weitere B1-, B2- und C1-Worttabellen mit expliziten Definitionen, ohne erfundene Quellenbeispiele.
- `lib/ai.ts`: optionale serverseitige Analyse mit Quellenprüfung.
- `app/api/[...action]/route.ts`: JSON-/Multipart-API, Eingabeprüfung und Fehlerantworten.

Datenmodell: `User`, `Book`, `TextSection`, `VocabularyWord` (lexikalische Felder als JSON), `WordOccurrence`, `LearningProgress`, `DailyWords`; zusätzlich `Activity` für Lerntage und `AppMeta` für die aktive Quelle. Ein lokaler Nutzer. SQL-Fremdschlüssel, parametrisierte Abfragen und atomare Schreibvorgänge.

Die aufbereitete Buchanalyse wird für bis zu drei Bücher im Arbeitsspeicher
wiederverwendet. Beispielsätze, PDF-Wortreparaturen und Quellenmetadaten werden
dadurch nicht bei jeder Statusabfrage neu berechnet. SQLite-Änderungszähler
invalidieren die Analyse bei Änderungen an Büchern, Abschnitten, Definitionen
oder Fundstellen, auch über eine andere Datenbankverbindung. Lernfortschritt,
Bewertungen, Tagesziele und Fälligkeiten werden weiterhin aktuell eingelesen.
Nach einem Prozessneustart wird die Analyse beim ersten Buchabruf neu aufgebaut.

Der automatische Windows-Browserstart prüft ausschließlich `/api/health`.
Diese schnelle Bereitschaftsabfrage analysiert kein Buch und legt keine
Lerndatenbank an. Eine längere erste Buchanalyse löst deshalb keine wiederholten
Startversuche mit `/api/state` mehr aus.

API: `GET /api/health`, `GET /api/state`, `GET /api/export`; `POST /api/import` (Multipart `file`, `level`, `useAI`), `/api/demo`, `/api/rate` (`id`, `rating`), `/api/settings`, `/api/reset` (`confirm: "DELETE"`).

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
