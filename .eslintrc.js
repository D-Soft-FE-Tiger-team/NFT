module.exports = {
    root: true,
    env: {
        browser: true
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/vue3-recommended",
        "plugin:prettier/recommended",
        "prettier"
      ]
    ignorePatterns: ["node_modules/*", "dist/*", "public/*"]
    rules: {}
  }