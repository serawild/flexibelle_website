/**
 * Drei Schalter.
 *
 * `istLive` — steht seit dem Go-live auf true. Auf false gesetzt, bittet die
 * Seite Suchmaschinen wieder, sie nicht aufzunehmen (dazu gehört auch
 * `public/robots.txt`).
 *
 * `heroBild` — das grosse Bild im Kopf der Seite (Querformat).
 *
 * `heroBildHoch` — dasselbe Motiv im Hochformat, wird nur auf hochkant
 * gehaltenen Handys genommen. Solange leer, nimmt auch das Handy `heroBild`
 * und schneidet es mittig zu.
 */
export const istLive = true;
export const heroBild = '/image/flexibelle-hero.jpg';
export const heroBildHoch = '/image/flexibelle-hero-hoch.jpg';
