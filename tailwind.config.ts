import type { Config } from 'tailwindcss';

/**
 * Design-Tokens flexiBelle — siehe STYLEGUIDE.md.
 * Farben aus dem Etikett und dem Tech Rider, plus Ocker und Khaki-Oliv.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        braun: '#231A12',        // Grundfarbe dunkel: Hero, Booking, Fuss
        'braun-weich': '#3A2C21', // dunkle Fläche, eine Stufe heller
        beige: '#F2EADA',        // heller Grund der Seite
        karte: '#F9F3E7',        // Karten und abgesetzte helle Flächen
        ocker: '#C9A227',        // Hauptakzent: Knöpfe, Marken-Details (Gold-Probe)
        'ocker-text': '#7A6000', // Ocker als Textfarbe auf hellem Grund (Gold-Probe)
        khaki: '#746A3E',        // zweiter Ton: Gastmusiker, Badges
        'khaki-hell': '#E5DEC6', // Fläche für Zitate
        'khaki-tief': '#5E5430', // Khaki als Textfarbe auf hellem Grund
        sand: '#DCD2BC',         // Linien und Rahmen
        taupe: '#6B6252',        // zweitrangiger Text auf hellem Grund
        'taupe-hell': '#A2967F', // zweitrangiger Text auf dunklem Grund
      },
      fontFamily: {
        marke: ['Grape Nuts', 'cursive'],
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        zitat: ['Bitter', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        marke: ['clamp(3rem, 2rem + 4.3vw, 5.5rem)', { lineHeight: '1' }],
        'marke-klein': ['clamp(1.5rem, 1.35rem + 0.63vw, 1.875rem)', { lineHeight: '1' }],
        titel: ['clamp(1.25rem, 1.1rem + 0.63vw, 1.625rem)', { lineHeight: '1.25', letterSpacing: '0.16em' }],
        untertitel: ['clamp(1rem, 0.93rem + 0.31vw, 1.1875rem)', { lineHeight: '1.3', letterSpacing: '0.14em' }],
        label: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.24em' }],
        subline: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.3em' }],
        body: ['clamp(1rem, 0.96rem + 0.19vw, 1.125rem)', { lineHeight: '1.7' }],
        claim: ['clamp(1.125rem, 1.02rem + 0.44vw, 1.5rem)', { lineHeight: '1.5' }],
        zitat: ['clamp(1.25rem, 1.1rem + 0.63vw, 1.75rem)', { lineHeight: '1.55' }],
      },
      maxWidth: {
        inhalt: '72rem',   // 1152px
        text: '42rem',     // 672px — Lesebreite
      },
    },
  },
  plugins: [],
} satisfies Config;
