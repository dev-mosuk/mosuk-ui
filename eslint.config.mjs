import path from 'node:path';
import { fileURLToPath } from 'node:url';

import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tsconfigPath = path.join(__dirname, 'tsconfig.json');

/** Relative import depths seen in src/ (toggle skeleton → button). */
const RELATIVE_IMPORT_PATTERNS = [
  './*',
  '../*',
  '../../*',
  '../../../*',
  '../../../../*',
  '../../../../../*',
  '../../../../../../*',
  '../../../../../../../*',
];

const RELATIVE_IMPORT_RULE = [
  'error',
  {
    patterns: [
      {
        group: RELATIVE_IMPORT_PATTERNS,
        message:
          "Use '@/…' alias instead of relative imports (run `npm run migrate:imports -- --apply`).",
      },
    ],
  },
];

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.next/**',
      'out/**',
      '.mosuk-ui/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...eslintConfigPrettier.rules,

      curly: ['error', 'all'],

      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
      ],

      'id-length': [
        'warn',
        {
          min: 2,
          exceptions: ['i', 'j', 'k', 'e', 'x', 'y', '_', 'a', 'b'],
        },
      ],

      'prettier/prettier': ['error', { singleQuote: true }],

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      // Public API: export namespace Feature { export type Props = … }
      '@typescript-eslint/no-namespace': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-restricted-imports': RELATIVE_IMPORT_RULE,
    },
  },
];
