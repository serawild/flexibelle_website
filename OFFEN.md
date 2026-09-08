# Offen

Was noch fehlt oder bewusst weggelassen wurde. Erledigtes wird gelöscht, nicht abgehakt.

## Inhalte

- **Hero-Video stillgelegt** — `hero.mp4`, `hero.webm` und `hero-poster.jpg`
  liegen weiterhin in `public/video/`, werden aber nicht mehr eingebunden.
  Falls das Video definitiv nicht zurückkommt, können sie gelöscht werden.
- **Kurztexte gegenlesen** — die zwei Sätze je Person sind ein erster Wurf und
  müssen von Seraina noch angepasst werden.
- **Charaktereigenschaft je Person** — je ein zweiter Satz ist eingebaut
  («meistens barfuss», «der Humor kommt nie zu kurz», «ruhig, bis der Bass
  einsetzt»).
  Die drei sollen gegenlesen, ob sie sich darin wiedererkennen.
- **Paddys Verstärker** — dass er den eigenen mitbringt, stand vorher in
  seinem Kurztext und ist der Eigenschaft gewichen. Im Tech Rider steht es
  weiterhin; falls es auf der Seite fehlt, wieder aufnehmen.
## Bewusst weggelassen

- **Kein Kontaktformular.** Die Anfrage läuft über einen `mailto:`-Link. Ein
  Formular bräuchte einen Server oder einen Drittanbieter.
- **Keine Analyse-Werkzeuge, keine Cookies.** Darum ist die Datenschutzerklärung
  kurz und es gibt kein Cookie-Banner.
- **Keine Social-Media-Einbindung.** Kommt dazu, sobald es Konten gibt.
- **Tech Rider auf Hochdeutsch** — wie die Website. Er geht auch an
  Veranstalter und Techniker ausserhalb der Schweiz.
- **Kein Ton im Hero-Video.** Ein Video mit Ton startet in den meisten Browsern
  gar nicht erst automatisch — und ungefragter Ton vergrault Besucher.

## Zu prüfen

- **Im Zitat heisst es «Schüüne».** Überall sonst auf der Seite steht
  «Scheune» — das Zitat ist eine der drei Mundart-Stellen und behält seine
  Schreibweise. Nicht angleichen.
- **Seras Portrait** wurde am 08.09.2026 auf `sera-wild-profil-2.jpg`
  gewechselt (von Seraina so gewünscht). Das Bild ist quadratisch, füllt den
  runden Rahmen also exakt aus — `bildFokus` bleibt leer und hätte hier auch
  keine Wirkung. Die alte Datei `sera-wild-profil.jpg` bleibt liegen.
  Weiterhin gilt: nicht ungefragt enger zuschneiden, die weite Einstellung mit
  Mikrofon und Kabel ist Absicht.

- **Die drei Mundart-Stellen** (Claim, Satz in der `description`, Bandzitat)
  sind gesetzt. Weder übersetzen noch in der Schreibweise angleichen — und
  nichts Weiteres in Mundart dazuschreiben. Ausführlich im Style Guide unter
  «Tonalität».
- **Sprache im Code** — `<html lang="de-CH">` passt zur hochdeutschen Seite.

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

  Am 08.09.2026 von Seraina bestätigt: *Der Tropfen endet im Ozean* wurde
  tatsächlich in der Scheune aufgenommen und steht richtig in dieser Zeile.

  Auf der Karte steht, von wem der Song ist: «flexiBelle» bei den eigenen
  (Gheimnis, Kompass, Frächi Fründin), sonst der Urheber (Gölä, Black Sea Dahu,
  Eigenkomposition Tina Meier).

- **Kacheln unter 640 px einspaltig.** Seraina wünschte «immer 3 pro Zeile». Ab `sm`
  sind es drei, darunter eine — drei Kacheln nebeneinander sind auf einem 390-px-Handy
  zu klein zum Antippen. Falls doch drei gewünscht sind, ist es eine Klasse.

- **Die Musik startet nicht von selbst — sie kann es nicht.** Seraina wollte
  ursprünglich Ton beim Betreten der Seite. Chrome, Safari und Firefox lassen
  Audio erst zu, nachdem jemand geklickt hat; ein Autostart bliebe stumm.
  Deshalb der Ton-Schalter in der Kopfzeile (`src/components/TonSchalter.astro`).
  Nicht «reparieren» wollen — es ist keine Einstellung, sondern eine feste
  Browserregel.

  Der Knopf steht zweimal auf der Seite (Hero und mitlaufende Leiste) und
  steuert dasselbe `<audio>` in `Basis.astro`. Der Zustand wird im
  `sessionStorage` gemerkt, damit die Musik über Impressum und Datenschutz
  hinweg weiterläuft. Startet eine Hörprobe, hält die Hintergrundmusik an.

  Die Tonspur ist vorerst aus `gheimnis.mp4` gezogen. Seraina hat eine WAV
  angekündigt — sobald sie unter `public/audio/gheimnis.wav` liegt, wird sie
  nach AAC gerechnet und die WAV wieder aus `public/` entfernt (sonst lädt sie
  jeder Besucher mit).

- **Die Ukulele bleibt eine Überraschung** (Entscheid 08.09.2026). Aus dem
  Seitentext, aus `besetzung.json` und aus dem Pressetext entfernt; das
  Pressetext-PDF wurde neu gedruckt. Bei Ivor steht jetzt «Gitarre & Vocals»
  und «Wechselt das Instrument je nach Song» — der Hinweis bleibt, das
  Instrument nicht. In der Booking-Liste heisst es neu nur noch «1× DI-Box».

  **Sehen darf man sie, nur benannt wird sie nicht** (Präzisierung von Seraina).
  Auf den Bandfotos steht sie sichtbar vorne am Klavier — im Hero, in den vier
  Pressebildern und im Pressetext-PDF. Das ist so gewollt und bleibt.

  Der **Tech Rider** nennt sie dagegen im Wortlaut: Kanal 03 der Kanalliste, die
  Zeile «1× DI-Box für die Ukulele (Gitarre hat eingebaute DI)» und den
  Bühnenplan «AK. GITARRE · UKULELE · BARHOCKER». Dort ist die Angabe technisch
  nötig — ein Tontechniker braucht den Kanal — und das PDF entsteht ausserhalb
  des Projekts. Bewusst so gelassen; wer den Rider liest, plant ohnehin den
  Abend mit.
