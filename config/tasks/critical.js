/**
 * @file Build settings of Critical CSS.
 *
 * @author Koichi Nagaoka
 */

const glob      = require('glob');
const config    = require('../');
const critical  = require('critical');

// Patches critical-path styles
glob.sync(`${config.publicRoot}/**/*.html`).forEach((targetFile) => {

  critical.generate({
    inline: true,
    base: config.publicRoot,
    src: targetFile,
    target: {
      html: targetFile
    },
    width: config.criticalWidth,
    height: config.criticalHeight,
  });

});
