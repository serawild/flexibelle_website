# Go-live — erledigt am 31.08.2026

Die Seite ist online: **https://flexibelle.live**

Diese Datei ist ab jetzt Nachschlagewerk, keine Checkliste mehr. Was noch
inhaltlich fehlt, steht in `OFFEN.md`.

## Wie der Betrieb läuft

Jeder Push auf `main` baut und deployt über `.github/workflows/deploy.yml` auf
GitHub Pages. Die Domain kommt aus `public/CNAME`.

`istLive` in `src/config.ts` steht auf `true`. Auf `false` gesetzt, trägt jede
Seite wieder ein `noindex` — dann muss auch `public/robots.txt` zurückgestellt
werden, die beiden gehören zusammen.

## DNS bei Hostpoint

| Typ | Name | Wert |
|---|---|---|
| A | @ | 185.199.108.153 · 185.199.109.153 · 185.199.110.153 · 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 · 2606:50c0:8001::153 · 2606:50c0:8002::153 · 2606:50c0:8003::153 |
| CNAME | www | serawild.github.io |

**Der AAAA-Eintrag ist der Knackpunkt.** Ursprünglich zeigte er noch auf
Hostpoints Parkseite (`2a00:d70:0:a::166`), während die A-Einträge schon
korrekt auf GitHub zeigten. Let's Encrypt prüft bevorzugt über IPv6, landete
damit bei Hostpoint statt bei GitHub und stellte über einen ganzen Tag hinweg
kein Zertifikat aus. Nach der Korrektur war es in Sekunden da.

Falls das Zertifikat je wieder fehlt: zuerst `dig flexibelle.live AAAA` prüfen.
Danach in den Pages-Einstellungen die Domain einmal entfernen und wieder
setzen — das stösst die Ausstellung neu an.

## Zertifikat

Ausgestellt von Let's Encrypt für `flexibelle.live` und `www.flexibelle.live`,
erneuert sich automatisch. «Enforce HTTPS» ist aktiv, `http://` wird auf
`https://` umgeleitet.

## Stand von Hand prüfen

```
gh api repos/serawild/flexibelle_website/pages     # Domain, Zertifikat, HTTPS
gh run watch                                        # laufendes Deployment
```
