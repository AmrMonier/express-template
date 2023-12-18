import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { format } from "logform";

const logDir = ".logs";

const customFormat = format.printf(({ level, message, timestamp }) => {
  return `[${level}] (${timestamp}) - ${message}`;
});

const logger = winston.createLogger({
  transports: [
    new DailyRotateFile({
      dirname: logDir,
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "30d",
    }),
  ],
  format: format.combine(format.timestamp(), customFormat),
});

export default logger;
