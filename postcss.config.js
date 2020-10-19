/**
 * @file Settings of PostCSS.
 *
 * @author Koichi Nagaoka
 */

const path = require('path');
const config = require('./config');

// use plugin settings
const usePlugins = [
  require('postcss-import'),
  require('postcss-functions')({
    glob: path.resolve(config.configPostcssRoot, 'functions', '*.js'),
  }),
  require('stylelint')({
    configBasedir: config.projectRoot,
    configFile: '.stylelintrc.yml',
  }),
  require('postcss-normalize'),
  require('postcss-webfont')({
    publishPath: config.publicRoot,
    stylesheetPath: config.webfontCSSPath,
    outputPath: path.resolve(config.publicAssetsRoot, 'fonts'),
  }),
  require('postcss-assets')({
    loadPaths: [
      config.imagesDir,
    ],
    basePath: config.srcAssetsRoot,
    baseUrl: config.assetsBaseUrl,
    stylesheetPath: config.stylesDir,
    cachebuster: true,
  }),
  require('postcss-flexbugs-fixes'),
  require('postcss-preset-env')({
    autoprefixer: {
      grid: 'autoplace',
      flexbox: 'no-2009',
    },
    stage: 1,
    importFrom: [
      path.resolve(config.srcStylesRoot, '_media.css'),
    ],
  }),
  require('postcss-image-set-polyfill'),
  require('postcss-calc')({
    mediaQuery: true,
  }),
  config.isNodeProduction && require('postcss-sort-media-queries')({
    sort: 'mobile-first',
  }),
  config.isNodeProduction && require('cssnano')({
    configFile: path.resolve(config.configPostcssRoot, 'cssnano.config.js'),
  }),
  require('postcss-reporter')({
    clearReportedMessages: true,
    throwError: true,
  }),
].filter(Boolean);

module.exports = {

  plugins: usePlugins,

};
