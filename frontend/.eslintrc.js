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
  "root": false,
  "rules": {
    "no-restricted-imports": ["error", {
      patterns: [{
        group: ["@mui/*"],
        message: "Please use import from \"@/shared/ui/*\" instead"
      }],
    }]
  },
  "overrides": [
    {
      files: ['src/fsd/shared/ui/*'],
      rules: {
        "no-restricted-imports": "off"
      }
    }
  ]
}
