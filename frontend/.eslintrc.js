module.exports = {
  "extends": [
    "next/core-web-vitals",
    "../.eslintrc",
    "plugin:storybook/recommended",
    "@feature-sliced"
  ],
  "parserOptions": {
    "tsconfigRootDir": __dirname
  },
  "root": false
}
