# Offen

Was noch fehlt oder bewusst weggelassen wurde. Erledigtes wird gelöscht, nicht abgehakt.

## Inhalte

- **Hero-Video stillgelegt** — `hero.mp4`, `hero.webm` und `hero-poster.jpg`
  liegen weiterhin in `public/video/`, werden aber nicht mehr eingebunden.
  Falls das Video definitiv nicht zurückkommt, können sie gelöscht werden.
- **Kurztexte gegenlesen** — die zwei Sätze je Person sind ein erster Wurf und
  müssen im Dialekt noch angepasst werden.
- **Hörproben** — `src/data/musik.json`: die YouTube-IDs fehlen.
- **Termine** — `src/data/termine.json` enthält drei Beispieltermine. Vor dem
  Go-live durch echte ersetzen oder die Datei leeren (dann erscheint der Hinweis
  «Im Moment isch kein Uftritt usgschriebe»).
- **Impressum** — Name und Adresse fehlen (`TODO` in `impressum.astro`).

## Bewusst weggelassen

- **Kein Kontaktformular.** Die Anfrage läuft über einen `mailto:`-Link. Ein
  Formular bräuchte einen Server oder einen Drittanbieter.
- **Keine Analyse-Werkzeuge, keine Cookies.** Darum ist die Datenschutzerklärung
  kurz und es gibt kein Cookie-Banner.
- **Keine Social-Media-Einbindung.** Kommt dazu, sobald es Konten gibt.
- **Tech Rider auf Hochdeutsch.** Die Website ist Mundart, der Rider nicht — er
  geht auch an Veranstalter und Techniker ausserhalb der Schweiz. Falls das
  anders gewünscht ist, lässt er sich umstellen.
- **Kein Ton im Hero-Video.** Ein Video mit Ton startet in den meisten Browsern
  gar nicht erst automatisch — und ungefragter Ton vergrault Besucher.

## Zu prüfen

- **Dialekt.** Alle Mundart-Texte sind ein erster Wurf und werden von Seraina
  noch angepasst. Nicht selbstständig „korrigieren".
- **Sprache im Code** — `<html lang="gsw-CH">` ist gesetzt, weil die Seite
  Mundart ist. Falls Vorleseprogramme damit Mühe haben, auf `de-CH` wechseln.
