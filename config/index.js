/**
 * @file Build and task settings.
 */

const path = require('path');

// --------------------------------------------------
// Common settings
// --------------------------------------------------
const isNodeProduction    = process.env.NODE_ENV === 'production';                 // Production mode or not.
const isAppProduction     = process.env.APP_ENV === 'production';                  // Application production mode or not.
const isGTMProduction     = process.env.GTM_ENV === 'production';                  // GTM Production mode or not.
const projectRoot         = path.resolve(__dirname, '..');                         // Project root directory path.
const assetsDir           = 'assets';                                              // Assets directory name.
const assetsBaseUrl       = `/${assetsDir}`;                                       // Assets Base URL.
const scriptsDir          = 'scripts';                                             // Scripts directory name.
const stylesDir           = 'styles';                                              // Styles directory name.
const imagesDir           = 'images';                                              // Images directory name.
const srcRoot             = path.resolve(projectRoot, 'src');                      // Source files root directory path.
const srcAssetsRoot       = path.resolve(srcRoot, assetsDir);                      // Source asset files root directory path.
const srcScriptsRoot      = path.resolve(srcAssetsRoot, scriptsDir);               // Source script files root directory path.
const srcStylesRoot       = path.resolve(srcAssetsRoot, stylesDir);                // Source style files root directory path.
const srcImagesRoot       = path.resolve(srcAssetsRoot, imagesDir);                // Source image files root directory path.
const srcPagesRoot        = path.resolve(srcScriptsRoot, 'pages');                 // Source page script files root directory path.
const srcStaticRoot       = path.resolve(srcRoot, 'static');                       // Source static files root directory path.
const publicRoot          = path.resolve(projectRoot, 'public');                   // Public file root directory path.
const publicAssetsRoot    = path.resolve(publicRoot, assetsDir);                   // Public asset files root directory path.
const publicScriptsRoot   = path.resolve(publicAssetsRoot, scriptsDir);            // Public asset script files root directory path.
const publicStylesRoot    = path.resolve(publicAssetsRoot, stylesDir);             // Public asset style files root directory path.
const publicImagesRoot    = path.resolve(publicAssetsRoot, imagesDir);             // Asset images root directory path.
const webfontCSSPath      = path.join(assetsDir, stylesDir);                       // Stylesheet path for iconfonts.
const configPostcssRoot   = path.resolve(__dirname, 'postcss');                    // PostCSS config root directory path.
const devServerPort       = 8001;                                                  // Dev server port number
const criticalWidth       = 1300;                                                  // Critical-Path Width
const criticalHeight      = 900;                                                   // Critical-Path Height

/**
 * Get host name.
 *
 * @returns {string} host name.
 */
const getHost = () => {

  // App env condition
  switch (process.env.APP_ENV || '') {

  case 'production':
    return 'example.com';

  case 'staging':
    return 'stg.example.com';

  case 'local':
    return 'local.example.com';

  default:
    return `localhost:${devServerPort}`;

  }

};

/**
 * Get root url
 *
 * @returns {string} root url
 */
const getRootUrl = () => {

  return `https://${getHost()}`;

};

module.exports = {
  isNodeProduction,
  isAppProduction,
  isGTMProduction,
  assetsBaseUrl,
  scriptsDir,
  stylesDir,
  imagesDir,
  srcRoot,
  srcAssetsRoot,
  srcScriptsRoot,
  srcStylesRoot,
  srcImagesRoot,
  srcPagesRoot,
  srcStaticRoot,
  projectRoot,
  publicRoot,
  publicAssetsRoot,
  publicScriptsRoot,
  publicStylesRoot,
  publicImagesRoot,
  webfontCSSPath,
  configPostcssRoot,
  criticalWidth,
  criticalHeight,
  getHost,
  getRootUrl,
};
