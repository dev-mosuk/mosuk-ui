import { copyDistCss } from './copy-dist-assets.js';

copyDistCss().catch((err) => {
  console.error(err);
  process.exit(1);
});
