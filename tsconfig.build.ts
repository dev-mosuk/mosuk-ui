import { promises as fs } from 'fs';
import * as path from 'path';

async function exists(filePath: string): Promise<boolean> {
  try { await fs.access(filePath); return true; }
  catch { return false; }
}

async function copy(src: string, dest: string) {
  const stats = await fs.stat(src);
  if (stats.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src);
    for (const entry of entries) {
      await copy(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await fs.copyFile(src, dest);
  }
}

async function updateExports() {
  const root = process.cwd();
  const distDir = path.join(root, 'dist');
  const pkgDistPath = path.join(distDir, 'package.json');
  const pkgText = await fs.readFile(pkgDistPath, 'utf-8');
  const pkg = JSON.parse(pkgText);

  const exportMap: Record<string, { import: { default: string } }> = {
    './index.css': { import: { default: './index.css' } }
  };

  async function walkDirs(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullDir = path.join(dir, entry.name);
        const indexJs = path.join(fullDir, 'index.js');
        if (await exists(indexJs)) {
          const rel = path.relative(distDir, fullDir).replace(/\\/g, '/');
          const key = './' + rel;
          // В режиме build используем .js файлы
          exportMap[key] = { import: { default: './' + rel + '/index.js' } };
        }
        await walkDirs(fullDir);
      }
    }
  }

  await walkDirs(distDir);

  pkg.exports = exportMap;
  await fs.writeFile(pkgDistPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');
  console.log('Updated exports based on index.js files');
}

async function main() {
  const root = process.cwd();
  const srcDir = path.join(root, 'src');
  const distDir = path.join(root, 'dist');

  await copy(path.join(srcDir, 'index.css'), path.join(distDir, 'index.css'));
  await copy(path.join(srcDir, 'styles'), path.join(distDir, 'styles'));
  async function copyCssModules(srcRoot: string, destRoot: string) {
    const items = await fs.readdir(srcRoot, { withFileTypes: true });
    for (const item of items) {
      const srcPath = path.join(srcRoot, item.name);
      const destPath = path.join(destRoot, item.name);
      if (item.isDirectory()) {
        if (item.name === 'styles') continue;
        await copyCssModules(srcPath, destPath);
      } else if (item.isFile() && item.name.endsWith('.css')) {
        if (item.name === 'index.css') continue;
        await fs.mkdir(path.dirname(destPath), { recursive: true });
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
  await copyCssModules(srcDir, distDir);
  await copy(path.join(srcDir, 'package.json'), path.join(distDir, 'package.json'));
  
  // Обновляем exports после копирования package.json
  await updateExports();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 