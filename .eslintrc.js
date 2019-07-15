module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 'off',
    semi: [2, 'never'],
    quotes: [2, 'single', 'avoid-escape']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
