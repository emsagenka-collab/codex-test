# Wörterbuchprüfung vom 4. November 2026

## Umfang

Alle 6.024 bestehenden Lerneinträge wurden in sechs getrennten Sprachprüfungen
mit KI-Unterstützung durchgesehen. Die Änderungsvorschläge wurden zusammengeführt
und auf gültige Felder, doppelte Lemmata, Unicode, ID-Stabilität und Widersprüche geprüft.
880 Einträge werden korrigiert; es werden keine zusätzlichen Wörter oder Buchsätze erzeugt.

- 639 Einträge mit geänderten Bedeutungen, Erklärungen, Umschreibungen oder verwandten Wörtern.
- 303 Einträge mit einer geänderten didaktischen Niveaueinordnung.
- Zwei eindeutige Kopfwortkorrekturen: `varis` → `vâris` (Erbe), `karlılık` → `kârlılık`.
- Die Gruppen überschneiden sich. Die Gesamtzahl der geänderten Einträge ist 880.

| Stufe | Vorher | Nachher |
| --- | ---: | ---: |
| B1 | 2.009 | 2.058 |
| B2 | 2.010 | 2.173 |
| C1 | 2.005 | 1.793 |
| Gesamt | 6.024 | 6.024 |

B1 umfasst den Alltags- und allgemeinen Lesewortschatz, B2 gebräuchliche abstrakte,
formelle und literarische Wörter, C1 seltene oder fachliche Begriffe. Das sind
Lernorientierungen der App, keine amtlich belegten Wort-für-Wort-CEFR-Einstufungen.
Es wurden keine Einträge hinzugefügt oder künstlich hochgestuft, um Quoten zu erhalten.

## Beispiele

| Wort | Korrektur |
| --- | --- |
| ben | Das Personalpronomen „ich“ ergänzt; „Muttermal“ bleibt als weitere Bedeutung. |
| baldız | Schwester der Ehefrau statt einer ungenauen Verwandtschaftsbeziehung. |
| şehzade | Prinz beziehungsweise Sultanssohn statt Prinzensohn. |
| deneycilik | Empirismus statt Experimentierfreude. |
| sefer | „Mal“ neben Reise und Feldzug ergänzt. |
| sigorta | Elektrische Sicherung neben Versicherung ergänzt. |
| ehliyet | Führerschein als heutige Alltagsbedeutung; Befähigung und Berechtigung bleiben. |
| sünnet | Türkische Umschreibung präzisiert; die missverständliche Formulierung „dinî kesim“ entfernt. |

## Gespeicherte Daten

`lib/vocabulary/review-data.ts` enthält jede Korrektur mit Begründung und einem
Fingerabdruck der vorherigen Lehrfelder. Nur ein passender alter Offline-Eintrag
wird überschrieben. Individuell abweichende Bedeutungen oder Erklärungen bleiben
unverändert. Wort-IDs, Bewertungen, Originalstellen, Seitenangaben, Satzübersetzungen
und Lernaktivitäten werden nicht ersetzt. Das Verfahren ist wiederholbar und greift
auch nach dem Import einer älteren Sicherung.

Die Erkennung unterscheidet die bedeutungstragenden Schreibungen `hala/hâlâ`,
`adet/âdet`, `kar/kâr` und `varis/vâris`. Akzentgefaltete Datenbankschlüssel bleiben
unverändert; die Originalzitate werden weder modernisiert noch mit Akzenten ergänzt.

## Grenzen und offene Fälle

Das offizielle TDK-Angebot war bei den direkten Abrufversuchen nicht erreichbar.
Die Überarbeitung behauptet daher keine aktuelle Online-Bestätigung durch TDK.
Die Nisbe-Schreibungen `cevheri/cevherî`, `zahiri/zahirî` sowie die kombinierte
Substantiv-/Adjektivfrage `ilahi/ilahî` bleiben zur gesonderten Prüfung markiert;
unsichere Kopfwortänderungen wurden nicht übernommen. Bedeutungen werden erklärt,
aber nicht durch eine neue automatische KI-Auslegung für jeden Buchsatz ausgewählt.
