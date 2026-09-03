# Die Videos in diesem Ordner

## Hörproben

`gheimnis.mp4` mit `gheimnis-poster.jpg` hängt an der ersten Karte im Abschnitt
Musik, eingetragen in `src/data/musik.json` unter `datei` und `bild`. Die Karte
spielt erst auf Klick (`preload="none"`), mit Ton — anders als das Hero-Video.

So wird eine neue Hörprobe aufbereitet. 720p reicht für die Karte, unter 10 MB
bleiben, damit die Seite auf dem Handy schnell bleibt:

```
ffmpeg -i original.mp4 -map 0:v:0 -map 0:a:0 -vf "scale=1280:-2,fps=25" \
  -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart \
  -c:a aac -b:a 128k gheimnis.mp4
ffmpeg -ss 30 -i original.mp4 -frames:v 1 -vf scale=1280:-2 -q:v 4 gheimnis-poster.jpg
```

`-movflags +faststart` schiebt die Sprungmarken an den Dateianfang, sonst muss
der Browser erst die ganze Datei laden, bevor er abspielt. Das Standbild kommt
aus dem Original, nicht aus der verkleinerten Datei — es wird sonst matschig.

Die Originale liegen ausserhalb des Repos (`Pictures/Videos/flexiBelle/`), hier
kommt nur die fertige, kleine Fassung hinein.

## Hero-Video — zurzeit nicht im Einsatz

Der Kopf der Seite zeigt seit August 2026 ein Bild statt eines Videos:
`public/image/flexibelle-hero.jpg`, eingetragen in `src/config.ts`.
Die Dateien hier bleiben liegen, falls das Video zurückkommt.

---

Hier gehören drei Dateien hin:

| Datei | Was |
|---|---|
| `hero.mp4` | H.264, 1920×1080, **ohne Ton**, 8–15 Sekunden, nahtlose Schlaufe |
| `hero.webm` | dasselbe als VP9 — moderne Browser nehmen es und es ist kleiner |
| `hero-poster.jpg` | Standbild aus dem Video, 1920×1080 |

Zum Reaktivieren muss das `<picture>` in `src/components/Hero.astro` wieder
durch ein `<video>` ersetzt werden.

**Grösse**: unter 5 MB pro Datei bleiben, sonst dauert der Seitenaufbau auf dem
Handy zu lang. Umwandeln mit ffmpeg:

```
ffmpeg -i original.mov -t 12 -an -vf scale=1920:-2 -c:v libx264 -crf 26 -preset slow hero.mp4
ffmpeg -i original.mov -t 12 -an -vf scale=1920:-2 -c:v libvpx-vp9 -crf 34 -b:v 0 hero.webm
ffmpeg -i hero.mp4 -ss 2 -frames:v 1 -q:v 3 hero-poster.jpg
```

`-an` entfernt den Ton — ein Hero-Video darf nie klingen, sonst spielt es in
vielen Browsern gar nicht erst automatisch ab.

Bei `prefers-reduced-motion` zeigt die Seite automatisch nur das Standbild.
