# Offen

Was noch fehlt oder bewusst weggelassen wurde. Erledigtes wird gelöscht, nicht abgehakt.

## Inhalte

- **Bandfotos** — Die drei Portraits in `Besetzung.astro` sind graue Kreise. Sobald
  Bilder da sind: nach `src/assets/` legen, über `astro:assets` einbinden.
- **Namen der Bandmitglieder** — `src/data/besetzung.json` enthält Platzhalter.
- **Hörproben** — `src/data/musik.json`: die YouTube-IDs fehlen. Solange `id` leer
  ist, zeigt die Karte nur eine Fläche.
- **Termine** — `src/data/termine.json` enthält drei Beispieltermine. Vor dem
  Go-live durch echte ersetzen oder die Datei leeren (dann erscheint der Hinweis
  «Zurzeit ist kein Auftritt ausgeschrieben»).
- **Impressum** — Name und Adresse fehlen (`TODO` in `impressum.astro`).

## Bewusst weggelassen

- **Kein Kontaktformular.** Die Anfrage läuft über einen `mailto:`-Link. Ein
  Formular bräuchte einen Server oder einen Drittanbieter — beides erst, wenn es
  wirklich gebraucht wird.
- **Keine Analyse-Werkzeuge, keine Cookies.** Darum ist die Datenschutzerklärung
  kurz und es gibt kein Cookie-Banner.
- **Keine Social-Media-Einbindung.** Kommt dazu, sobald es Konten gibt.
- **Kein Bandfoto im Hero.** Der Hero ist zurzeit reine Fläche. Sobald ein gutes
  Querformat da ist, wird es als Hintergrund mit dunklem Verlauf eingesetzt.

## Zu prüfen

- **Tech Rider** — liegt als `public/flexiBelle_TechRider.pdf`. Beim Aktualisieren
  die Datei ersetzen, der Link im Booking-Abschnitt bleibt gleich.
- **Sprache** — `<html lang="gsw-CH">` ist gesetzt, weil der Kern Schweizerdeutsch
  ist. Falls Vorleseprogramme damit Mühe haben, auf `de-CH` wechseln.
