var winston = require('winston');
var fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'logs';

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

module.exports = winston.createLogger({
    transports: [
        new (winston.transports.File)({
            level: env === 'development'? 'debug': 'info',
            filename: `${logDir}/service-log.log`,
            maxsize: 100000,
            maxFiles: 10
        })
    ]
});

