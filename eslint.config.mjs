import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; 
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parser: tsParser, 
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json', 
        tsconfigRootDir: './',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {},
  },
  {
    files: ['src/**/*.js', 'src/**/*.jsx'], 
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'build/']
  },
];
