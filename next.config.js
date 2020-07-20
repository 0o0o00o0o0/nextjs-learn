/* eslint-disable */
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(withSass({
  /* config options here */
}));
