import winston, { format } from 'winston'
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

export const buildLoger = (service: any) => {

    return {
        log: (message: any) => {
            logger.log('info', { message, service })
        },

        error: (message: any) => {
            logger.log('error', { message, service })
        }
    }
}