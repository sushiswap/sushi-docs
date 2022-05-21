'use strict';

module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  semi: true,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 120,
        tabWidth: 4,
        useTabs: true,
        singleQuote: false,
        bracketSpacing: true,
      },
    },
  ],
};
