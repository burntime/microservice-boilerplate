const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%[[%d] %p (%z)%] %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'debug'
    }
  }
});

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || 'debug';

module.exports = logger;
