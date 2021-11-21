import winston from "winston";
import { loggerConfig } from "../config/logger.config";

const logger = winston.createLogger(loggerConfig);

if(process.env.NODE_ENV === 'development') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(winston.format.timestamp(), winston.format.colorize(), winston.format.simple()),
  }));
}

export { logger };
