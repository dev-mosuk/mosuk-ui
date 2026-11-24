import { spawn } from 'child_process';
import {
  assertNoAliasImports,
  copyDistCss,
  copyDistMetadata,
  updateExports,
} from './copy-dist-assets.js';

function runTscAlias(root: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(
      'npx',
      ['tsc-alias', '-p', 'tsconfig.build.json'],
      {
        cwd: root,
        stdio: 'inherit',
        shell: true,
      },
    );

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`tsc-alias exited with code ${code ?? 'unknown'}`));
    });
  });
}

async function main() {
  const root = process.cwd();

  // CSS must exist before tsc-alias rewrites @/ imports that point at *.module.css
  await copyDistCss(root);
  await runTscAlias(root);
  await copyDistMetadata(root);
  await updateExports(root);
  await assertNoAliasImports(root);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
