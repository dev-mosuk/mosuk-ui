import { watch } from 'fs';
import * as path from 'path';
import { copyDistCss } from './copy-dist-assets.js';

const root = process.cwd();
const srcDir = path.join(root, 'src');
let timer: ReturnType<typeof setTimeout> | null = null;
let copying = false;

async function syncCss() {
  if (copying) return;
  copying = true;
  try {
    await copyDistCss(root);
    console.log('[watch:assets] CSS copied to dist/');
  } catch (error) {
    console.error('[watch:assets] copy failed:', error);
  } finally {
    copying = false;
  }
}

function scheduleSync(filename: string | null) {
  if (!filename?.endsWith('.css')) return;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    void syncCss();
  }, 100);
}

void syncCss();

watch(srcDir, { recursive: true }, (_event, filename) => {
  scheduleSync(filename);
});

console.log('[watch:assets] watching src/**/*.css');
