module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    "testing-library"
  ],
  rules: {
    'testing-library/no-node-access': [
      'error',
      { 'allowContainerFirstChild': true }
    ]
  },
};
