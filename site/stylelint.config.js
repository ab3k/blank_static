module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  ignoreFiles: ['**/assets/css/base.css'],
  rules: {
    // @import statements are read by Hugo (not PostCSS), which does not support url() notation
    'import-notation': null
  }
}
