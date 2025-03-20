import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['validate-filename'],
    rules: {
      '@next/next/no-img-element': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'import/no-unresolved': [
        2,
        {
          caseSensitive: true
        }
      ],
      'validate-filename/naming-rules': [
        'error',
        {
          rules: [
            {
              case: 'pascal',
              target: '**/components/**'
            },
            {
              case: 'kebab',
              target: '**/pages/**'
            },
            {
              case: 'camel',
              target: '**/hooks/**',
              patterns: '^use'
            }
          ]
        }
      ]
    }
  })
];

export default eslintConfig;
