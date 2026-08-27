# Hero-Video

Hier gehören drei Dateien hin:

| Datei | Was |
|---|---|
| `hero.mp4` | H.264, 1920×1080, **ohne Ton**, 8–15 Sekunden, nahtlose Schlaufe |
| `hero.webm` | dasselbe als VP9 — moderne Browser nehmen es und es ist kleiner |
| `hero-poster.jpg` | Standbild aus dem Video, 1920×1080 |

Danach in `src/config.ts` `heroVideo` auf `true` setzen.

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
