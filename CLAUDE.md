# flexiBelle — Website

Diese Datei wird bei jedem Start gelesen. Sie gilt immer, auch nach `/clear`.

> **Die Seite ist live** unter https://flexibelle.live (seit 31.08.2026).
> Jeder Push auf `main` deployt automatisch, Suchmaschinen dürfen indexieren.

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
| `src/data/musik.json` | Hörproben: Titel, YouTube-ID **oder** Videodatei, Standbild, Notiz |
| `src/components/Wortmarke.astro` | «flexiBelle» als Text in Grape Nuts |
| `src/components/Signet.astro` | fB im Kreis, SVG plus Text |
| `src/components/Hero.astro` | Der grosse Kopf: Bild (quer/hoch), Logo, Navigation |
| `public/video/LIESMICH.md` | Wie eine Hörprobe aufbereitet wird; dazu das stillgelegte Hero-Video |
| `marke/` | Style-Guide-PDFs und die Logodateien als SVG |
| `OFFEN.md` | Offene Fragen und bewusst Weggelassenes |
| `GO-LIVE.md` | Was vor dem Go-live fertig sein muss, und die vier Schritte dorthin |
| `src/config.ts` | `istLive` und die zwei Hero-Bilder (quer / hoch) |

## Die Band

Der Kern ist ein Trio: **Ivor**, **Sera**, **Paddy**. Live kommen
je nach Song einzelne Musiker dazu — daher der Name und der offene vierte Platz
im Abschnitt Band.

**Wichtig fürs Booking — zwei Varianten:** Die Band hat eine eigene PA und ein
eigenes Mischpult und bringt auf Wunsch alles mit; sie kann aber ebenso über
eine vorhandene Anlage spielen. Beides steht gleichwertig nebeneinander im
Booking-Abschnitt und im Tech Rider. Nie nur eine der beiden Varianten nennen —
die Wahlmöglichkeit ist das Verkaufsargument.

Besetzung: Ivor (Gsang, Gitarre & Ukulele), Sera (E-Piano & Gsang),
Paddy (Bassgitarre). Auf der Seite stehen bewusst nur die Vornamen; ihre
Reihenfolge kommt aus `besetzung.json`.

## Was noch fehlt

- **Portraits.** Alle drei Bilder liegen in `public/image/` und sind in
  `besetzung.json` verknüpft. Die Kurztexte sind ein erster Wurf und werden
  von Seraina im Dialekt angepasst.

  Das Feld `bildFokus` (CSS `object-position`) verschiebt den Ausschnitt im
  runden Rahmen — aber **nur bei Bildern, die nicht quadratisch sind**. Ein
  quadratisches Bild füllt den quadratischen Rahmen exakt aus, da gibt es
  nichts zu verschieben. Näher heran kommt man deshalb nur, indem man die
  Datei selbst enger zuschneidet — so entstanden bei Sera aus dem Original
  `sera-wild-profil.jpg` die engeren `-nah.jpg`. Das Original bleibt liegen,
  damit sich der Ausschnitt jederzeit neu wählen lässt.
- **Hörproben.** Beide Karten sind gefüllt. Eine Karte kann auf zwei Arten
  klingen: `datei` zeigt ein selbst gehostetes Video aus `public/video/`
  mit Standbild, `id` bettet ein YouTube-Video ein. Ist beides leer, zeigt
  die Karte nur die Fläche. Weitere Songs kommen dazu.
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
