// Exportiert die Instagram-Karussells als PNG, vier Folien zu 1080 × 1350 je Song.
//
//   pnpm dev                          (in einem zweiten Terminal laufen lassen)
//   node scripts/insta-export.mjs     alle Songs
//   node scripts/insta-export.mjs 02  nur Nr. 02
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

const songs = JSON.parse(readFileSync('src/data/booklet.json', 'utf8'));
const nur = process.argv[2];

for (const song of songs) {
  if (nur && song.nr !== nur) continue;
  const ordner = join('Claude outputs', 'Instagram', `${song.nr} ${song.song.replace(/[\/:]/g, '')}`);
  mkdirSync(ordner, { recursive: true });
  const ganz = join(ordner, '_ganz.png');

  execFileSync(CHROME, [
    '--headless=new',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${BREITE},${HOEHE * FOLIEN}`,
    '--virtual-time-budget=6000',
    `--screenshot=${ganz}`,
    BASIS + song.nr,
  ], { stdio: 'ignore' });

  for (let i = 0; i < FOLIEN; i++) {
    await sharp(ganz)
      .extract({ left: 0, top: i * HOEHE, width: BREITE, height: HOEHE })
      .png()
      .toFile(join(ordner, `folie-${i + 1}.png`));
  }
  rmSync(ganz);
  console.log(`${song.nr} ${song.song}`);
}
