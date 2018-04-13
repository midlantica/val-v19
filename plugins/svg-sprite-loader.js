// plugins/svg-sprite-loader.js
// import only in browser
if (process.BROWSER_BUILD) {
  // import all svgs
  var files = require.context('~/assets/img/svgs/', false, /\.svg$/)
  files.keys().forEach(files)
}
