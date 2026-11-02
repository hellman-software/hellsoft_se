import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
const files = ['index.html', 'privacy', 'styles.css', 'script.js', 'assets', 'images', 'robots.txt', 'sitemap.xml', 'CNAME', 'ads.txt', '.nojekyll'];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of files) {
  await cp(new URL(file, root), new URL(file, output), { recursive: true });
}

console.log(`Static site built at ${fileURLToPath(output)}`);
