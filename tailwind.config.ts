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
        braun: '#19120D',        // Grundfarbe dunkel: Hero, Booking, Fuss
        'braun-weich': '#3A2C21', // dunkle Fläche, eine Stufe heller
        beige: '#F2EADA',        // heller Grund der Seite
        karte: '#F9F3E7',        // Karten und abgesetzte helle Flächen
        ocker: '#C9A227',        // Hauptakzent: Knöpfe, Marken-Details (Gold-Probe)
        'ocker-text': '#7A6000', // Ocker als Textfarbe auf hellem Grund (Gold-Probe)
        'ocker-hell': '#D9B237', // Ocker eine Stufe heller: Knopf unter dem Zeiger
        khaki: '#746A3E',        // zweiter Ton: Gastmusiker, Badges
        'khaki-hell': '#E5DEC6', // Fläche für Zitate
        'khaki-tief': '#5E5430', // Khaki als Textfarbe auf hellem Grund
        sand: '#DCD2BC',         // Linien und Rahmen
        taupe: '#6B6252',        // zweitrangiger Text auf hellem Grund
        'taupe-hell': '#A2967F', // zweitrangiger Text auf dunklem Grund
        kraft: '#D3B78D',        // Scrapbook: Kraftpapier im Abschnitt Band
        polaroid: '#FBF6EA',     // Scrapbook: Rahmen der Polaroids
        'braun-tief': '#150F0A', // Songbooklet: Grund, eine Spur dunkler als braun
        buchruecken: '#241A12',  // Songbooklet: Platte unter den Buchseiten
        buchseite: '#E3D3B4',    // Songbooklet: Papier, solange ein Bild lädt
      },
      // Scrapbook-Look, übernommen aus Songbooklet/vorschau/flexibelle-vorschau.html
      backgroundImage: {
        // Helle und dunkle Flecken auf dem Kraftpapier
        'papier-kraft': [
          'radial-gradient(ellipse 48% 34% at 14% 8%, rgba(255,246,222,.92), rgba(255,246,222,0) 100%)',
          'radial-gradient(ellipse 46% 30% at 84% 24%, rgba(252,238,208,.70), rgba(252,238,208,0) 100%)',
          'radial-gradient(ellipse 40% 26% at 52% 72%, rgba(255,244,216,.55), rgba(255,244,216,0) 100%)',
          'radial-gradient(ellipse 36% 26% at 2% 86%, rgba(108,70,28,.34), rgba(108,70,28,0) 100%)',
          'radial-gradient(ellipse 32% 22% at 99% 96%, rgba(108,70,28,.32), rgba(108,70,28,0) 100%)',
        ].join(', '),
        // Feines Rauschen (overlay) und grosse Flecken (multiply), beides SVG-Turbulenz
        'papier-rauschen': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='0.62'/%3E%3C/svg%3E")`,
        'papier-flecken': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.0055' numOctaves='4' seed='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.44 0 0 0 0 0.29 0 0 0 0 0.13 0.9 0.5 0 0 -0.42'/%3E%3C/filter%3E%3Crect width='900' height='900' filter='url(%23m)'/%3E%3C/svg%3E")`,
        // Klebeband in drei Tönen: Fasern plus Farbverlauf
        'tape-ocker': 'repeating-linear-gradient(115deg, rgba(58,44,33,.18) 0 1px, rgba(0,0,0,0) 1px 9px), linear-gradient(180deg, rgba(216,182,86,.72), rgba(184,150,60,.66))',
        'tape-hell': 'repeating-linear-gradient(115deg, rgba(122,96,0,.16) 0 1px, rgba(0,0,0,0) 1px 9px), linear-gradient(180deg, rgba(250,244,230,.84), rgba(228,215,186,.78))',
        // Songbooklet: warmer Schein hinter dem Buch, Schatten im Bund
        'booklet-schein': 'radial-gradient(ellipse 60% 55% at 50% 46%, rgba(122,84,40,.30), rgba(122,84,40,0) 100%)',
        'buch-bund': 'linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,.34) 46%, rgba(0,0,0,.42) 50%, rgba(0,0,0,.30) 54%, rgba(0,0,0,0))',
        // Songbooklet-Seiten: gealtertes Papier, linierter Zettel, Verlauf unter Fotozitaten
        'papier-alt': 'radial-gradient(ellipse 80% 70% at 50% 38%, rgba(255,250,238,.55), rgba(255,250,238,0) 72%), radial-gradient(ellipse 120% 100% at 50% 50%, rgba(0,0,0,0) 58%, rgba(120,84,40,.30) 100%)',
        'zettel-linien': 'repeating-linear-gradient(180deg, rgba(0,0,0,0) 0 calc(1.8em - 1px), rgba(107,98,82,.30) calc(1.8em - 1px) 1.8em)',
        'foto-verlauf': 'linear-gradient(180deg, rgba(25,18,13,0) 30%, rgba(25,18,13,.78) 100%)',
        'tape-khaki': 'repeating-linear-gradient(115deg, rgba(255,250,235,.18) 0 1px, rgba(0,0,0,0) 1px 9px), linear-gradient(180deg, rgba(150,140,98,.66), rgba(116,106,62,.60))',
      },
      boxShadow: {
        buch: '0 34px 70px rgba(0,0,0,.62), 0 8px 20px rgba(0,0,0,.46)',
        einzelseite: '0 24px 46px rgba(0,0,0,.55)',
        zettel: '0 1.2cqw 2.4cqw rgba(25,18,13,.22), 0 .3cqw .6cqw rgba(25,18,13,.16)',
        polaroid: '0 14px 26px rgba(25,18,13,.26), 0 3px 6px rgba(25,18,13,.20)',
        tape: '0 2px 5px rgba(25,18,13,.20)',
      },
      fontFamily: {
        marke: ['Grape Nuts', 'cursive'],
        typo: ['Special Elite', 'Courier New', 'monospace'],
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
