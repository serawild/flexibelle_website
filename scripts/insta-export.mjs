// Exportiert die Instagram-Karussells als PNG, vier Folien zu 1080 × 1350 je Song.
//
//   pnpm dev                          (in einem zweiten Terminal laufen lassen)
//   node scripts/insta-export.mjs     alle Songs
//   node scripts/insta-export.mjs 02  nur Nr. 02
//   node scripts/insta-export.mjs konzerte   je ein Bild für die anstehenden Konzerte
//
// Die Folien landen in «Claude outputs/Instagram/<Nr> <Song>/folie-1.png» usw.
// Braucht Google Chrome unter /Applications.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASIS = 'http://localhost:4321/insta/';
const BREITE = 1080;
const HOEHE = 1350;
const FOLIEN = 4;

// Seite mit Chrome im Hintergrund aufnehmen und in Folien zu 1080 × 1350 schneiden
async function aufnehmen(url, ordner, folien, name) {
  mkdirSync(ordner, { recursive: true });
  const ganz = join(ordner, '_ganz.png');
  execFileSync(CHROME, [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${BREITE},${HOEHE * folien}`,
    '--virtual-time-budget=6000',
    `--screenshot=${ganz}`,
    url,
  ], { stdio: 'ignore' });
  for (let i = 0; i < folien; i++) {
    await sharp(ganz)
      .extract({ left: 0, top: i * HOEHE, width: BREITE, height: HOEHE })
      .png()
      .toFile(join(ordner, folien > 1 ? `${name}-${i + 1}.png` : `${name}.png`));
  }
  rmSync(ganz);
}

const nur = process.argv[2];

if (nur === 'konzerte') {
  const heute = new Date().toISOString().slice(0, 10);
  const termine = JSON.parse(readFileSync('src/data/termine.json', 'utf8'));
  for (const t of termine.filter((t) => t.postBild && t.datum >= heute)) {
    const ort = t.ort.split(', ')[0].replace(/[\/:]/g, '');
    await aufnehmen(BASIS + 'konzert/' + t.datum, join('Claude outputs', 'Instagram', 'Konzerte'), 1, `${t.datum} ${ort}`);
    console.log(`${t.datum} ${t.ort}`);
  }
  process.exit(0);
}

const songs = JSON.parse(readFileSync('src/data/booklet.json', 'utf8'));

for (const song of songs) {
  if (nur && song.nr !== nur) continue;
  const ordner = join('Claude outputs', 'Instagram', `${song.nr} ${song.song.replace(/[\/:]/g, '')}`);
  await aufnehmen(BASIS + song.nr, ordner, FOLIEN, 'folie');
  console.log(`${song.nr} ${song.song}`);
}
