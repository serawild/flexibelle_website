# Offen

Was noch fehlt oder bewusst weggelassen wurde. Erledigtes wird gelöscht, nicht abgehakt.

## Inhalte

- **Hero-Video stillgelegt** — `hero.mp4`, `hero.webm` und `hero-poster.jpg`
  liegen weiterhin in `public/video/`, werden aber nicht mehr eingebunden.
  Falls das Video definitiv nicht zurückkommt, können sie gelöscht werden.
- **Kurztexte gegenlesen** — die zwei Sätze je Person sind ein erster Wurf und
  müssen im Dialekt noch angepasst werden.
- **Charaktereigenschaft je Person** — je ein zweiter Satz ist eingebaut
  («meistens barfuss», «der Humor kommt nie zu kurz», «ruhig, bis der Bass
  einsetzt»).
  Die drei sollen gegenlesen, ob sie sich darin wiedererkennen.
- **Paddys Verstärker** — dass er den eigenen mitbringt, stand vorher in
  seinem Kurztext und ist der Eigenschaft gewichen. Im Tech Rider steht es
  weiterhin; falls es auf der Seite fehlt, wieder aufnehmen.
- **«Eigener Song, live in der Scheune» steht bewusst auf Hochdeutsch.**
  Der Untertitel der Hörprobe «Gheimnis» ist von Seraina so gesetzt — nicht
  in Mundart zurückschreiben, obwohl Regel 4 das sonst verlangt.

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

- **Im Zitat heisst es «Schüüne».** Überall sonst auf der Seite steht
  «Scheune» — das Zitat ist aber durchgehend Schweizerdeutsch und behält
  seine Schreibweise. Nicht mit angleichen.
- **Seras Portrait bleibt das ganze Bild.** Ein engerer Zuschnitt war
  gebaut und wurde verworfen — Seraina will die weite Einstellung mit
  Mikrofon und Kabel. Nicht ungefragt wieder zuschneiden.

- **Dialekt.** Alle Mundart-Texte sind ein erster Wurf und werden von Seraina
  noch angepasst. Nicht selbstständig „korrigieren".
- **Sprache im Code** — `<html lang="gsw-CH">` ist gesetzt, weil die Seite
  Mundart ist. Falls Vorleseprogramme damit Mühe haben, auf `de-CH` wechseln.

- **Untertitel der zwei neuen Hörproben.** Von Seraina am 07.09.2026 so angesagt,
  von mir nur minimal gesetzt — bitte gegenlesen:
  - Kompass → «flexiBelle – live in der Scheune». Sie schrieb «flexibelle»; ich habe
    nur die Marken-Schreibweise angewendet (kleines f, grosses B, Regel 2).
  - Frächi Fründin → «Live 125 Jahre Jubiläum WSB». Ihre Formulierung wörtlich, nur
    der erste Buchstabe gross wie bei den anderen Karten. Ob es «Live am
    125-Jahre-Jubiläum der WSB» heissen soll, entscheidet Seraina — nicht selber ändern.

- **Dateinamen immer klein schreiben.** Am 07.09.2026 lag `Fraechi-fruendin.mp4`
  mit grossem F in `public/video/`, während `musik.json` auf
  `/video/fraechi-fruendin.mp4` zeigte. Auf dem Mac fällt das nicht auf — der
  Dateiname ist dort nicht gross-/kleinschreibungsempfindlich. GitHub Pages läuft
  auf Linux und hätte einen 404 geliefert. Beim Ablegen neuer Dateien in `public/`
  also immer auf die Schreibweise achten.

  Aus demselben Grund hatte die Rohdatei die bereits kleingerechnete Fassung
  überschrieben, ohne dass es sichtbar war. Nach dem Kopieren einer Datei nach
  `public/video/` lohnt ein Blick auf die Grösse.

- **Musik-Abschnitt: zwei Zeilen nach Auftrittsort** (07.09.2026, so von Seraina
  gewünscht). Alle sechs Hörproben sind gleich grosse Kacheln, drei pro Zeile.
  Die Zeile trägt den Ort als Überschrift, die Karte darunter nur noch, von wem
  der Song stammt. Damit hat sich die frühere Uneinheitlichkeit bei «Live at 125
  Jahre Jubiläum WSB» von selbst erledigt — der Ort steht jetzt nur noch einmal
  pro Zeile.

  Die Zuordnung steht als Feld `ort` in `src/data/musik.json` (Regel 6). Eine neue
  Zeile entsteht automatisch, sobald dort ein neuer Ort auftaucht.

  **Zwei Punkte müssen von Seraina bestätigt werden:**
  - *Der Tropfen endet im Ozean* steht in der Zeile «Live in der Scheune». Wo das
    YouTube-Video aufgenommen wurde, weiss ich nicht — ich habe es dort eingeordnet,
    damit die Zeile zu dritt aufgeht. Falls es nicht aus der Scheune stammt, gehört
    es in eine eigene Zeile oder braucht einen anderen Ort.
  - *Frächi Fründin* hat bewusst **keinen** Untertitel. Bei den anderen steht dort,
    von wem der Song ist (Gölä, Black Sea Dahu, Tina Meier, «Eigener Song»). Zu
    diesem Titel wurde nichts gesagt, und ich erfinde nichts (Regel 4).

- **Kacheln unter 640 px einspaltig.** Seraina wünschte «immer 3 pro Zeile». Ab `sm`
  sind es drei, darunter eine — drei Kacheln nebeneinander sind auf einem 390-px-Handy
  zu klein zum Antippen. Falls doch drei gewünscht sind, ist es eine Klasse.
