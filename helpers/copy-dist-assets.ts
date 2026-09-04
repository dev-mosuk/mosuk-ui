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

async function copy(src: string, dest: string) {
  const stats = await fs.stat(src);
  if (stats.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src);
    for (const entry of entries) {
      await copy(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
  }
}

type JsExport = {
  import: {
    types?: string;
    default: string;
  };
};
type CssExport = { style: string; default: string };
type PackageExport = JsExport | CssExport;

export async function updateExports(root = process.cwd()) {
  const distDir = path.join(root, 'dist');
  const pkgDistPath = path.join(distDir, 'package.json');
  const pkgText = await fs.readFile(pkgDistPath, 'utf-8');
  const pkg = JSON.parse(pkgText);

  const exportMap: Record<string, PackageExport> = {};

  const indexCssPath = path.join(distDir, 'index.css');
  if (await exists(indexCssPath)) {
    const cssExport: CssExport = {
      style: './index.css',
      default: './index.css',
    };
    exportMap['.'] = cssExport;
    exportMap['./index.css'] = cssExport;
    pkg.style = './index.css';
  }

  async function walkDirs(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullDir = path.join(dir, entry.name);
        const indexJs = path.join(fullDir, 'index.js');
        if (await exists(indexJs)) {
          const rel = path.relative(distDir, fullDir).replace(/\\/g, '/');
          const key = './' + rel;
          const defaultPath = './' + rel + '/index.js';
          const typesPath = './' + rel + '/index.d.ts';
          exportMap[key] = (await exists(path.join(fullDir, 'index.d.ts')))
            ? { import: { types: typesPath, default: defaultPath } }
            : { import: { default: defaultPath } };
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

export async function copyDistCss(root = process.cwd()) {
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
        if (
          item.name === 'styles' &&
          path.resolve(srcPath) === path.resolve(path.join(srcDir, 'styles'))
        ) {
          continue;
        }
        await copyCssModules(srcPath, destPath);
      } else if (item.isFile() && item.name.endsWith('.css')) {
        if (item.name === 'index.css') continue;
        await fs.mkdir(path.dirname(destPath), { recursive: true });
        await fs.copyFile(srcPath, destPath);
      }
    }
  }

  await copyCssModules(srcDir, distDir);
}

export async function copyDistAssets(root = process.cwd()) {
  await copyDistCss(root);

  const srcDir = path.join(root, 'src');
  const distDir = path.join(root, 'dist');

  await copy(
    path.join(srcDir, 'package.json'),
    path.join(distDir, 'package.json'),
  );
  await copy(path.join(srcDir, 'LICENSE'), path.join(distDir, 'LICENSE'));
}

export async function assertNoAliasImports(root = process.cwd()) {
  const distDir = path.join(root, 'dist');
  const leftover: string[] = [];

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
        continue;
      }
      if (!entry.isFile()) continue;
      if (!/\.(js|jsx|mjs|cjs|d\.ts)$/.test(entry.name)) continue;
      const text = await fs.readFile(full, 'utf-8');
      if (text.includes("'@/") || text.includes('"@/')) {
        leftover.push(path.relative(distDir, full));
      }
    }
  }

  await walk(distDir);

  if (leftover.length) {
    throw new Error(
      `dist/ still contains @/ imports (tsc-alias must run after CSS copy):\n${leftover
        .slice(0, 20)
        .join('\n')}`,
    );
  }
}

export async function buildDistAssets(root = process.cwd()) {
  await copyDistAssets(root);
  await updateExports(root);
  await assertNoAliasImports(root);
}
