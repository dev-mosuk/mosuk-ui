import { buildDistAssets } from './helpers/copy-dist-assets.js';

buildDistAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
