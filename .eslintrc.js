module.exports = {
  root: true,
  env: {
    "es6": true,
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    "standard"
  ],
  plugins: [
    'standard',
  ],
  // add your custom rules here
  rules: {
    'require-await': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'generator-star-spacing': 'off',
  }
}
