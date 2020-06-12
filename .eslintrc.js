module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['coffee'],
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'eslint-plugin-coffee'
  },
  rules: {
    "vue/require-render-return": "off",
    "vue/return-in-computed-property": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
