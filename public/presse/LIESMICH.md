# Pressebilder

Hier liegen die Bilder, die Veranstalter im Booking-Abschnitt herunterladen können.
Drei Dateien, genau so benannt — kleingeschrieben, ohne Leerzeichen und Umlaute:

| Datei | Format | Seitenverhältnis |
|---|---|---|
| `flexibelle-quer.jpg` | Querformat | 3:2 |
| `flexibelle-hoch.jpg` | Hochformat | 2:3 |
| `flexibelle-quadrat.jpg` | Quadrat | 1:1 |

**Auflösung: so gross wie vorhanden.** Diese Dateien werden unverändert
ausgeliefert, damit daraus ein Plakat entstehen kann. Richtwerte bei 300 dpi:

- A5 → lange Kante rund 2500 px
- A4 → lange Kante rund 3500 px
- A3 → lange Kante rund 5000 px

JPEG, sRGB, hohe Qualität. Ohne eingebrannten Text und ohne Logo — der
Bildnachweis steht auf der Website neben dem Download.

**Nur Kleinbuchstaben im Dateinamen.** GitHub Pages läuft auf Linux und
unterscheidet Gross- und Kleinschreibung; auf dem Mac fällt ein Fehler dabei
nicht auf.

Der Knopf zu einem Bild erscheint auf der Website erst, wenn die Datei hier
liegt — fehlt eine, entsteht kein toter Link. Gesteuert wird das über
`src/data/presse.json`.
