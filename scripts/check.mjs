import { access, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const required = [
  'site/index.html',
  'site/styles.css',
  'site/script.js',
  'site/assets/xp-crafted-logo.svg',
  'site/assets/venmo-qr.svg',
  'site/_headers',
  'site/_redirects'
];

for (const file of required) {
  await access(resolve(root, file));
  const info = await stat(resolve(root, file));
  if (info.size === 0) throw new Error(`${file} is empty`);
}

const html = await readFile(resolve(root, 'site/index.html'), 'utf8');
const checks = [
  ['verified Venmo URL', 'https://www.venmo.com/u/xpcrafted'],
  ['Paws 4 Autism allocation', 'Ten percent of every XP Crafted sale'],
  ['parent supervision', 'managed and supervised by a parent'],
  ['canonical domain', 'https://xpcrafted.valorwell.org/'],
  ['privacy-safe child language', 'No child contact information is collected or displayed']
];

for (const [label, text] of checks) {
  if (!html.includes(text)) throw new Error(`Missing ${label}`);
}

if (/\b(?:email|phone|address)\b\s*[:=]/i.test(html)) {
  throw new Error('Potential child contact field detected');
}

console.log('Site checks passed.');
