const {createLogger, format, transports, addColors } = require('winston');


class Logger {
    
    constructor(request) {
        this.request = request;
        this.createLogger
        this.initLogger();
    }

    initLogger() {
        const customLevel = {
            levels: {
                error: 0,
                warn: 1,
                info: 2
            },
            colors: {
                error: 'red',
                warn: 'orange',
                info: 'green'
            }
        }
       this.createLogger = createLogger({
        levels: customLevel.levels,
        format: format.combine(
            // format.colorize(),
            format.simple(), 
            format.timestamp(),
            format.printf(info => `[${info.timestamp}] [${info.level}] ${info.message}`)
        ),
        transports: [
            new transports.File({
                maxsize: 1000000,
                maxFiles: 5,
                filename: `${__dirname}/../logs/${this.request.method}.log`
            }),
            new transports.Console({
                level: 'info'
            }),
            new transports.File({
                level: 'error',
                filename: `${__dirname}/../logs/error.log`
            }),
            new transports.File({
                level: 'warn',
                filename: `${__dirname}/../logs/warn.log`
            })
        ],
       })
    }

    info() {
        this.createLogger.info(`${this.request.method} Request ${this.request.path}`);
    }

    warn() {
        this.createLogger.warn(`${this.request.method} Request ${this.request.path}`);
    }

    error() {
        this.createLogger.error(` ${this.request.method} Request ${this.request.path}`);
    }

}

module.exports = Logger;