module.exports = {
  'extends': [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    './rules/overrides',
  ].map(require.resolve),
  rules: {}
};
