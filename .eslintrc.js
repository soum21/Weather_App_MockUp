module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    curly: 'error',
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    camelcase: [2, { properties: 'always' }]
  }
};
