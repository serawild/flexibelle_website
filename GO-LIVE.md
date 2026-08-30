# Go-live

Die Seite ist **noch nicht online**. Erst wenn Bilder und Videos da sind.

## Was zurzeit verhindert, dass sie online geht

1. **Kein automatisches Deployment.** In `.github/workflows/deploy.yml` ist der
   `push`-Auslöser auskommentiert. Ein Push auf `main` baut nichts und ändert
   nichts an dem, was auf GitHub Pages liegt.
2. **Kein DNS-Eintrag.** `flexibelle.live` zeigt bei Hostpoint noch nicht auf
   GitHub. Solange das so ist, ist die Seite unter der Domain nicht erreichbar.
3. **Suchmaschinen ausgesperrt.** `public/robots.txt` verbietet alles, und
   solange `istLive` in `src/config.ts` auf `false` steht, trägt jede Seite
   zusätzlich ein `noindex`.

Bis dahin lässt sich lokal beliebig arbeiten: `pnpm dev`, so oft du willst.

## Vorher fertig machen

- [ ] **Hero-Bild im Hochformat** fürs Handy nach `public/image/`, Pfad in
      `heroBildHoch` (`src/config.ts`) eintragen
- [ ] **Kurztexte** der drei im Dialekt gegenlesen (`besetzung.json`)
- [ ] **YouTube-IDs** in `src/data/musik.json`
- [ ] **Echte Termine** in `src/data/termine.json` (oder Datei leeren)
- [ ] **Impressum**: Name und Adresse in `src/pages/impressum.astro`
- [ ] **Dialekt durchlesen** — alle Mundart-Texte sind ein erster Wurf

## Die vier Schritte zum Go-live

1. **`src/config.ts`**: `istLive` auf `true` setzen.
2. **`public/robots.txt`**: den auskommentierten Block oben aktivieren
   (`Allow: /` statt `Disallow: /`).
3. **`.github/workflows/deploy.yml`**: die drei `push`-Zeilen einkommentieren.
4. **DNS bei Hostpoint** für `flexibelle.live` setzen:

   | Typ | Name | Wert |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | serawild.github.io |

   Danach im Repo unter Settings → Pages die Domain `flexibelle.live` eintragen
   und «Enforce HTTPS» anhaken, sobald das Zertifikat ausgestellt ist (kann
   ein paar Minuten bis wenige Stunden dauern).

Dann `git push` — und der Workflow deployt.

## Vorher anschauen, ohne online zu gehen

Der Workflow lässt sich jederzeit von Hand starten:

```
gh workflow run deploy.yml
gh run watch
```

Solange kein DNS-Eintrag existiert und die `CNAME`-Datei im Repo liegt, ist das
Ergebnis unter keiner Adresse öffentlich erreichbar — GitHub leitet die
`github.io`-Adresse auf die Domain um, die noch nicht auflöst.
