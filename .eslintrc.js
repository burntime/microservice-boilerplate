module.exports = {
  extends: 'airbnb-base',
  rules: {
    indent: ['error', 2, { 'SwitchCase': 1 }],
    'comma-dangle': ['error', 'only-multiline'],
    'arrow-body-style': ['error', 'always'],
    'no-console': ['warn'],
    'func-names': ['error', 'as-needed'],
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'no-use-before-define': ['error', { 'functions': false, 'classes': true, 'variables': true }]
  },
  env: {
    node: true,
    jasmine: true
  }
};
