/**
 * @file robots definition.
 */
const config = require('../');

module.exports = {

  useragent: '*',
  disallow: ['/apple-app-site-association', '/.well-known/'],
  sitemap: `https://${config.getHost()}/sitemap.xml.gz`,

};
