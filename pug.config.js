const dayjs = require('dayjs');
const config = require('./config');

module.exports = {

  env: {
    isNodeProduction: config.isNodeProduction,
    isGTMProduction: config.isGTMProduction,
    isAppProduction: config.isAppProduction,
    rootUrl: config.getRootUrl(),
    time: dayjs().format('YYYYMMDDhhmm'),
    preconnects: []
  },

};
