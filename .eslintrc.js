module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
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
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 0,
    'jsx-a11y/no-autofocus': 0,

  },
};
