/**
 * Drei Schalter.
 *
 * `istLive` — solange false, bittet die Seite Suchmaschinen, sie nicht
 * aufzunehmen. Beim Go-live auf true setzen (siehe GO-LIVE.md).
 *
 * `heroBild` — das grosse Bild im Kopf der Seite (Querformat).
 *
 * `heroBildHoch` — dasselbe Motiv im Hochformat, wird nur auf hochkant
 * gehaltenen Handys genommen. Solange leer, nimmt auch das Handy `heroBild`
 * und schneidet es mittig zu.
 */
export const istLive = false;
export const heroBild = '/image/flexibelle-hero.jpg';
export const heroBildHoch = '/image/flexibelle-hero-hoch.jpg';
