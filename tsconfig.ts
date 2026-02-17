import { promises as fs } from 'fs';
import * as path from 'path';

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function updateExports() {
  const root = process.cwd();
  const srcDir = path.join(root, 'src');
  const distDir = path.join(root, 'dist');
  const pkgSrcPath = path.join(srcDir, 'package.json');
  const pkgText = await fs.readFile(pkgSrcPath, 'utf-8');
  const pkg = JSON.parse(pkgText);

  const exportMap: Record<string, { import: { default: string } }> = {
    './index.css': { import: { default: './index.css' } },
  };

  async function walkDirs(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullDir = path.join(dir, entry.name);
        const indexTs = path.join(fullDir, 'index.ts');
        if (await exists(indexTs)) {
          const rel = path.relative(srcDir, fullDir).replace(/\\/g, '/');
          const key = './' + rel;
          exportMap[key] = { import: { default: './' + rel + '/index.ts' } };
        }
        await walkDirs(fullDir);
      }
    }
  }

  await walkDirs(srcDir);

  pkg.exports = exportMap;
  const outPkgPath = pkgSrcPath;
  await fs.writeFile(outPkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
  console.log('Updated exports based on index.ts files');
}

updateExports().catch((err) => {
  console.error(err);
  process.exit(1);
});
