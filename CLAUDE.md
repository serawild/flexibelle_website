# flexiBelle — Website

Diese Datei wird bei jedem Start gelesen. Sie gilt immer, auch nach `/clear`.

> **Die Seite ist noch nicht online** und geht erst live, wenn Bilder und
> Videos da sind. Das automatische Deployment ist ausgeschaltet, Suchmaschinen
> sind ausgesperrt. Was zum Go-live gehört, steht in `GO-LIVE.md`.

## Was hier gebaut wird

Die Website der Band flexiBelle unter **flexibelle.live**. Astro mit Tailwind,
deployt über GitHub Actions auf GitHub Pages. Ein One-Pager mit Sprungmarken,
dazu Impressum und Datenschutz.

Die Band ist ein Trio; live kommen je nach Song einzelne Musiker dazu. Die Seite
richtet sich in erster Linie an Veranstalter — sie ist eine Booking-Visitenkarte,
keine Fanseite.

Es gibt **kein Figma**. Die verbindliche Vorlage ist `STYLEGUIDE.md` plus
`tailwind.config.ts`.

## Die sechs Regeln

1. **Keine Hex-Werte im Code.** Jede Farbe kommt aus einem Tailwind-Token
   (`bg-braun`, `text-ocker-text`, …). Soll eine Farbe geändert werden, wird
   `tailwind.config.ts` geändert, nie eine Komponente.

2. **Grape Nuts nur für die Marke.** Der Schriftzug «flexiBelle» und das Signet,
   sonst nichts. Überschriften und Fliesstext stehen in Archivo, Zitate und der
   Bandbeschrieb in Bitter kursiv.

3. **Ocker und Khaki sind Flächenfarben.** Als Textfarbe auf hellem Grund nur
   `ocker-text` bzw. `khaki-tief` verwenden — sonst reicht der Kontrast nicht.

4. **Alles auf der Seite ist Mundart.** Fliesstext, Abschnittstitel, Knöpfe,
   Hinweise. Ausgenommen sind nur `<title>`, `description` und die Rechtstexte
   auf Impressum und Datenschutz — die bleiben hochdeutsch, damit Suchmaschinen
   und Behörden damit umgehen können. Der Dialekt wird von Seraina noch
   angepasst; Formulierungen also nie stillschweigend „korrigieren".

   Texte nicht erfinden: Fehlt einer, kommt ein `TODO` an die Stelle und ein
   Eintrag in `OFFEN.md` — kein Blindtext.

5. **Ein Abschnitt pro Arbeitsschritt.** Nicht die ganze Seite auf einmal
   umbauen. Nach jedem Abschnitt kurz melden, was gebaut wurde.

6. **Inhalte kommen aus `src/data/`.** Termine, Besetzung und Musik stehen in
   JSON-Dateien, damit Seraina sie ohne Code ändern kann. Nichts davon fest in
   eine Komponente schreiben.

## Wo was steht

| Datei | Inhalt |
|---|---|
| `STYLEGUIDE.md` | Farben, Schriften, Aufbau, Tonalität, Logo-Regeln |
| `tailwind.config.ts` | Die verbindlichen Design-Tokens |
| `src/data/termine.json` | Auftritte: Datum, Anzeige, Ort, Zeit, Gastmusiker |
| `src/data/besetzung.json` | Die drei Bandmitglieder |
| `src/data/musik.json` | Hörproben: Titel, YouTube-ID, Notiz |
| `src/components/Wortmarke.astro` | «flexiBelle» als Text in Grape Nuts |
| `src/components/Signet.astro` | fB im Kreis, SVG plus Text |
| `src/components/Hero.astro` | Der grosse Kopf: Video in Dauerschleife, Logo, Navigation |
| `public/video/LIESMICH.md` | Welche Videodateien der Hero braucht und wie sie umgewandelt werden |
| `marke/` | Style-Guide-PDFs und die Logodateien als SVG |
| `OFFEN.md` | Offene Fragen und bewusst Weggelassenes |
| `GO-LIVE.md` | Was vor dem Go-live fertig sein muss, und die vier Schritte dorthin |
| `src/config.ts` | `istLive` und `heroVideo` — die zwei Schalter |

## Die Band

Der Kern ist ein Trio: **Sera Wild**, **M.C. Ivory**, **P. Lässig**. Live kommen
je nach Song einzelne Musiker dazu — daher der Name und der offene vierte Platz
im Abschnitt Band.

**Wichtig fürs Booking — zwei Varianten:** Die Band hat eine eigene PA und ein
eigenes Mischpult und bringt auf Wunsch alles mit; sie kann aber ebenso über
eine vorhandene Anlage spielen. Beides steht gleichwertig nebeneinander im
Booking-Abschnitt und im Tech Rider. Nie nur eine der beiden Varianten nennen —
die Wahlmöglichkeit ist das Verkaufsargument.

Besetzung: Sera Wild (E-Piano & Gsang), M.C. Ivory (Gsang, Gitarre & Ukulele),
P. Lässig (Bassgitarre).

## Was noch fehlt

- **Hero-Video.** `public/video/` ist leer. Sobald die drei Dateien da sind,
  `heroVideo` in `src/config.ts` auf `true` setzen. Details in
  `public/video/LIESMICH.md`.
- **Portraits.** Sera Wild hat ihr Bild (`public/image/sera-wild-profil.jpg`);
  bei M.C. Ivory und P. Lässig ist `bild` in `besetzung.json` noch leer. Das
  Feld `bildFokus` bestimmt den Ausschnitt im runden Rahmen (CSS
  `object-position`, leer = Mitte). Die Kurztexte sind ein erster Wurf und
  werden von Seraina im Dialekt angepasst.
- **Hörproben.** In `musik.json` fehlen die YouTube-IDs. Solange `id` leer ist,
  zeigt die Karte nur die Fläche.
- **Impressum.** Name und Adresse fehlen — `TODO` in `impressum.astro`.
- **Tech Rider.** Neu aufgebaut mit beiden Varianten (`public/flexiBelle_TechRider.pdf`,
  Quelle in `marke/`). Er ist hochdeutsch, weil er auch an Veranstalter ausserhalb
  der Schweiz geht — bewusst anders als die Website.

## Befehle

```
pnpm install     # einmalig
pnpm dev         # lokaler Server, http://localhost:4321
pnpm build       # baut nach dist/
pnpm check       # Astro-Typprüfung
```

Ein Push auf `main` baut und deployt automatisch über
`.github/workflows/deploy.yml`. Die Domain kommt aus `public/CNAME`.
