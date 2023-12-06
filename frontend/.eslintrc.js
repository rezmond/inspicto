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
      }, {
        group: ["redux-saga/effects"],
          message: "Please use import from \"@/shared/lib/reduxSaga*\" instead"
        }],
    }]
  },
  "overrides": [
    {
      files: [
        'src/fsd/shared/ui/**/*',
        'src/fsd/shared/lib/extendTheme.ts',
        'src/fsd/app/providers/CssVarsProvider.tsx',
        'src/fsd/shared/lib/reduxSaga.ts'
      ],
      rules: {
        "no-restricted-imports": "off"
      }
    }, {
      files: [ 'test/**/*' ],
      rules: {
        "boundaries/element-types": "off"
      }
    }
  ]
}
