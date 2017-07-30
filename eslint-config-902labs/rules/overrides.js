module.exports = {
  'ecmaFeatures': {
  },
  'rules': {
    'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'all'],
    'handle-callback-err': ['error', '^(e|err|error)$'],
    'indent': ['error', 'tab', { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    // NOTE: Our actual standard is to allow >= 0 spaces before the colon
    // and >= 1 spaces after the colon, but this is not currently enforceable
    // with eslint.
    'key-spacing': ['off'],
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false }],
    'new-parens': ['error'],
    'no-constant-condition': ['error'],
    'no-debugger': ['error'],
    'no-eq-null': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-label-var': ['error'],
    'no-multi-spaces': ['error', { 'exceptions': { 'VariableDeclarator': true, 'Property': true } }],
    'no-path-concat': ['error'],
    'no-process-env': ['error'],
    'no-process-exit': ['error'],
    'no-sync': ['error'],
    'no-undef-init': ['error'],
    'no-unused-vars': ['error', { 'vars': 'local', 'args': 'after-used',  'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],
    'operator-linebreak': ['error', 'before'],
    'no-underscore-dangle': ['error', { 'allowAfterThis': true, 'allow': ['_id'] }],
    'no-underscore-dangle': ['error', { 'allowAfterThis': true, 'allow': [
      // React
      '__html',
      '__PRELOADED_STATE__',

      // Rewire
      '__Rewire__',
      '__reset__',

      // HAL: http://stateless.co/hal_specification.html
      '_embedded',
      '_links',

      // Redux Form
      '_error',

      // Mongo, et al
      '_id'
    ] }],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-tabs': ['off']
  }
};
