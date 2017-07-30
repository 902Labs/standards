const rules = require('eslint-config-airbnb-base/rules/imports').rules;

const baseDevDepAllowances = rules['import/no-extraneous-dependencies'][1].devDependencies;

module.exports = {
  'rules': {
    'react/jsx-indent': ['error', 'tab'],
    'react/jsx-indent-props': ['error', 'tab'],

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: baseDevDepAllowances.concat([
        '**/*.test.jsx', // tests where the extension denotes that it is a test
        '**/*.spec.jsx', // tests where the extension denotes that it is a test
        '**/*.stories.js', // Storybook stories
        '@(dev|test)/**', // folders for development resources, test servers, utils, etc
        'webpack/**' // multi-environment webpack configuration
      ])
    }]
  }
};
