module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['coffee'],
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    // "plugin:coffee/eslint-recommended"
  ],
  // "parser": "vue-eslint-parser",
  parserOptions: {
    parser: 'eslint-plugin-coffee'
  },
  rules: {
    "coffee/id-length": "off",
    "coffee/no-unused-vars": "off",
    "vue/require-render-return": "off",
    "vue/return-in-computed-property": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
