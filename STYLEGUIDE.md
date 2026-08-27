# flexiBelle — Style Guide

Alles, was das Aussehen der Website festlegt. Die verbindlichen Werte stehen in
`tailwind.config.ts` — dieses Dokument erklärt sie.

## Farben ändern

Im Code steht **nirgends ein Hex-Wert**. Jede Farbe kommt aus einem Token in
`tailwind.config.ts` unter `theme.extend.colors`. Willst du eine Farbe ändern,
änderst du dort eine Zeile, und die ganze Seite zieht nach:

```ts
ocker: '#D09A2C',   // <- diesen Wert ändern
```

Danach `pnpm dev` neu laden, fertig. Dasselbe gilt für Schriftgrössen (`fontSize`)
und Abstände.

| Token | Wert | Wofür |
|---|---|---|
| `braun` | `#231A12` | Grundfarbe dunkel: Hero, Booking, Fusszeile, Kopfzeile |
| `braun-weich` | `#3A2C21` | Trennlinien auf dunklem Grund |
| `beige` | `#F2EADA` | heller Grund der Seite; auf dunklem Grund die Textfarbe |
| `karte` | `#F9F3E7` | abgesetzte helle Flächen (Abschnitt Live, Musik-Karten) |
| `ocker` | `#D09A2C` | Hauptakzent: Knöpfe, Marken-Details, aktiver Navigationspunkt |
| `ocker-text` | `#8A5E11` | Ocker **als Textfarbe** auf hellem Grund |
| `khaki` | `#746A3E` | zweiter Ton: Gastmusiker-Platz, Badges, Rahmen |
| `khaki-hell` | `#E5DEC6` | Fläche hinter Zitaten |
| `khaki-tief` | `#5E5430` | Khaki als Textfarbe auf hellem Grund |
| `sand` | `#DCD2BC` | Linien, Rahmen, Bild-Platzhalter — **nie für Text** |
| `taupe` | `#6B6252` | zweitrangiger Text auf hellem Grund |
| `taupe-hell` | `#A2967F` | zweitrangiger Text auf dunklem Grund |

### Die zwei Regeln, die man leicht bricht

1. **Ocker und Khaki sind Flächenfarben, keine Textfarben.** Auf Beige erreichen
   sie zu wenig Kontrast. Als Fläche mit `braun` bzw. `beige` darauf sind sie
   einwandfrei. Braucht es sie doch einmal als Text, nimm `ocker-text` oder
   `khaki-tief`.
2. **Auf dunklem Grund ist der Zweittext `taupe-hell`,** nicht `taupe`.

## Schriften

Drei kostenlose Google Fonts, eingebunden über `@fontsource` in
`src/styles/global.css` — es wird nichts von Google nachgeladen, die Dateien
liegen im Projekt.

| Token | Schrift | Aufgabe |
|---|---|---|
| `font-marke` | Grape Nuts | **Nur** der Schriftzug «flexiBelle» und das Signet. Sonst nirgends. |
| `font-sans` | Archivo | Alles Übrige: Überschriften, Fliesstext, Beschriftungen. Standard im `body`. |
| `font-zitat` | Bitter kursiv | Bandbeschrieb, Zitate, der Claim, die «mit …»-Zeile bei Terminen. |

Überschriften stehen in Archivo SemiBold, in Grossbuchstaben und gesperrt — die
Klasse dafür heisst `.titel`. Beschriftungen darüber nutzen `.label`.

## Aufbau der Seite

Ein One-Pager mit Sprungmarken, dazu Impressum und Datenschutz als eigene Seiten.

| Abschnitt | Anker | Grund |
|---|---|---|
| Hero | `#oben` | dunkel, Video in Dauerschleife |
| Band | `#band` | hell |
| Zitat | — | Khaki hell |
| Musik | `#musik` | hell |
| Live | `#live` | Karte |
| Booking | `#booking` | dunkel |

Dunkel und hell wechseln sich ab, aber nie zweimal hintereinander dunkel. Der
Hero und der Booking-Abschnitt sind die beiden dunklen Anker.

## Das Konzept «Trio + eis»

Der Kern ist ein Trio, live kommt je nach Song jemand dazu. Das zeigt die Seite
an drei Stellen, statt es nur zu behaupten:

- **Claim** unter dem Namen: «Es Trio — und je nach Song eis meh»
- **Besetzung**: drei Portraits, dann ein `+` und ein gestrichelter vierter Platz
  mit der Beschriftung «wechselt»
- **Termine**: Die Zeile «mit Sax» erscheint nur, wenn im Termin ein Gast steht

## Der Kopf

Der Hero füllt fast den ganzen ersten Bildschirm (`min-h-[88svh]`). Darin läuft
ein Video in Dauerschleife, stumm und ohne Bedienelemente, darüber ein Verlauf
von `braun/85` nach `braun/90`, damit die Schrift überall lesbar bleibt. Logo
und Navigation stehen oben **im** Hero, nicht in einer eigenen Leiste.

Sobald der Hero durchgescrollt ist, fährt eine schmale Leiste von oben herein
(`Kopf.astro`, gesteuert über einen IntersectionObserver). Bei
`prefers-reduced-motion` zeigt der Hero nur das Standbild.

## Tonalität

**Die ganze Seite ist Mundart** — Fliesstext, Abschnittstitel, Knöpfe, Hinweise.
Hochdeutsch bleiben nur `<title>` und `description` (damit Suchmaschinen die
Seite einordnen) sowie Impressum und Datenschutz.

Kurze Sätze, keine Superlative, keine Ausrufezeichen. Die Band sagt «mir», die
Anfrage geht an ein «du». Der Dialekt wird von Seraina angepasst — beim
Weiterschreiben ihre Schreibweise übernehmen, nicht die eigene.

## Bildsprache

Warmes, vorhandenes Licht — Schüüre, Probe, Bühne. Lieber ein unperfekter
Moment als ein gestelltes Bandfoto. Wenig Nachbearbeitung, keine kalten Farben.
Der Sessel und das gestreifte Sofa dürfen mit aufs Bild.

## Logo

Die Dateien liegen in `marke/logo/`. Auf der Website wird das Logo **nicht als
Bild** eingesetzt, sondern als echter Text in Grape Nuts (`Wortmarke.astro`)
plus ein SVG-Kreis (`Signet.astro`). So bleibt es scharf, wählbar und passt sich
der Umgebungsfarbe an.

- **Schutzraum**: rundherum mindestens die halbe Höhe des Signet-Kreises
- **Mindestgrösse**: Querfassung ab 34 mm Breite bzw. 130 px
- **Untergrund**: nur Dunkelbraun oder Beige
- Nicht verzerren, nicht umfärben, Signet und Schriftzug nicht neu anordnen
