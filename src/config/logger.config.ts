import winston, { LoggerOptions } from "winston";

export const loggerConfig: LoggerOptions = {
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: {
    service: 'user-service',
  },
  transports: [
    new winston.transports.File({  filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({  filename: 'logs/all.log'}),
  ],
}
