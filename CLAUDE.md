# flexiBelle — Website

Diese Datei wird bei jedem Start gelesen. Sie gilt immer, auch nach `/clear`.

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

4. **Texte nicht erfinden.** Der Bandbeschrieb ist Schweizerdeutsch und steht
   wörtlich so in `Logo_Beschrieb.pdf`. Fehlt ein Text, kommt ein `TODO`-Kommentar
   an die Stelle und ein Eintrag in `OFFEN.md` — kein Blindtext.

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
| `marke/` | Style-Guide-PDFs und die Logodateien als SVG |
| `OFFEN.md` | Offene Fragen und bewusst Weggelassenes |

## Was noch fehlt

- **Bandfotos.** Die drei Portraits in `Besetzung.astro` sind graue Kreise
  (`bg-sand`). Sobald Bilder da sind: nach `src/assets/` legen und über
  `astro:assets` einbinden, nicht als `<img src>` aus `public/`.
- **Hörproben.** In `musik.json` fehlen die YouTube-IDs. Solange `id` leer ist,
  zeigt die Karte nur die Fläche.
- **Impressum.** Name und Adresse fehlen — `TODO` in `impressum.astro`.
- **Namen der Bandmitglieder** in `besetzung.json`.

## Befehle

```
pnpm install     # einmalig
pnpm dev         # lokaler Server, http://localhost:4321
pnpm build       # baut nach dist/
pnpm check       # Astro-Typprüfung
```

Ein Push auf `main` baut und deployt automatisch über
`.github/workflows/deploy.yml`. Die Domain kommt aus `public/CNAME`.
