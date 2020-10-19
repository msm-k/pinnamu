/**
 * @file Creates sitemap.
 *
 * @author Koichi Nagaoka
 */

const path              = require('path');
const fs                = require('fs-extra');
const robots            = require('robots-generator');
const config            = require('../');
const smConfig          = require('../sitemap/sitemap.config');
const robotsConfing     = require('../sitemap/robots.config');
const {
  SitemapStream,
  streamToPromise,
}                       = require('sitemap');
const { createGzip }    = require('zlib')

// Creates stream
const streamXml   = new SitemapStream(smConfig.stream);
const streamGzip  = new SitemapStream(smConfig.stream);

// write items
smConfig.items.forEach((item) => {
  streamXml.write(item);
  streamGzip.write(item);
});
streamXml.end();
streamGzip.end();

// Creates sitemap.xml
Promise.all([
  streamToPromise(streamXml)
    .then((data) => fs.writeFileSync(path.resolve(config.publicRoot, 'sitemap.xml'), data))
    .catch((error) => console.error(error)),
  streamToPromise(streamGzip.pipe(createGzip()))
    .then((data) => fs.writeFileSync(path.resolve(config.publicRoot, 'sitemap.xml.gz'), data))
    .catch((error) => console.error(error))
]).then(() => {

  // Creates robots
  robots(robotsConfing, (error, robotsFile) => {

    // error occurred
    if (error) {

      // output error message
      console.error(error);
      return;

    }

    // Creates robots file
    fs.writeFileSync(path.resolve(config.publicRoot, 'robots.txt'), robotsFile.join('\n') + '\n', { encoding: 'utf-8' });

  });

})
.catch((error) => console.error(error));
