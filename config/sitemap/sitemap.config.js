/**
 * @file define sitemap.
 */
const path    = require('path');
const config  = require('../');

module.exports = {

  stream: {
    hostname: config.getRootUrl(),
    lastmodDateOnly: false,
  },

  items: [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmodfile: path.resolve(config.publicRoot, 'index.html'),
    },
    // {
    //   url: '/terms/',
    //   changefreq: 'monthly',
    //   priority: 0.8,
    //   lastmodfile: path.resolve(config.publicRoot, 'terms', 'index.html'),
    // },
    // {
    //   url: '/app-privacy/',
    //   changefreq: 'monthly',
    //   priority: 0.8,
    //   lastmodfile: path.resolve(config.publicRoot, 'app-privacy', 'index.html'),
    // },
  ],

};
