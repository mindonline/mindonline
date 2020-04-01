module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1
    }]
  }
}
