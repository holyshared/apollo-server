import winston from "winston";

const { format, createLogger, transports } = winston;

export const logger = createLogger({
  level: "info",
  format: format.combine(format.splat(), format.simple()),
  transports: [
    new transports.File({
      filename: "./application.log",
    }),
  ],
});

logger.add(
  new transports.Console({
    format: format.combine(format.splat()),
  }),
);
