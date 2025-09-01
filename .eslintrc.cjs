module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./apps/**/tsconfig.json', './packages/**/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {
        project: ['./apps/**/tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  ignorePatterns: [
    '**/dist/**',
    '**/dist-demo/**',
    '**/node_modules/**',
    '**/*.config.js',
    '**/*.config.cjs',
  ],
};
