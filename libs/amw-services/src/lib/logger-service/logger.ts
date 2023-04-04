import { Console } from './console';
import { Splunk } from './splunk';
import { LogLevels } from './types/log-levels';
import { LogPlatforms } from './types/log-platforms';

export interface ILogger {
  level: LogLevels;
  data: Error | string;
  name?: string;
}

export interface ILoggerOptions {
  platform?: LogPlatforms;
}

/**
 * Logger class to log message, errors, etc
 */
export class Logger {
  name: string;
  options: any;

  constructor() {
    this.name = '';
    this.options = {};
  }

  /**
   * Override the options globally
   */
  configure(options: ILoggerOptions) {
    this.options = { ...this.options, ...options };
  }

  /**
   * Calls from outside to print logs
   * @param {LogLevels} level LogLevels
   * @param {Error | string} data The optional data to log
   * @param {string} name The name of the file
   */
  log({ level, data, name }: ILogger) {
    this.name = name ? name : '';
    let message: any = data;
    if (data instanceof Error) {
      message = data.message;
      data = this.getErrorDetails(data);
    }
    this[level](message, data);
  }

  /**
   * This logs a message and the data with *LogLevels.DEBUG*
   * @param {Error | string} message A message to print along the logger name
   * @param data The optional data to log
   */
  debug(message: Error | string, data?: any) {
    return this._logMessage(message, LogLevels.DEBUG, data);
  }

  /**
   * This logs a message and the data with *LogLevels.ERROR*
   * @param {Error | string} message A message to print along the logger name
   * @param data The optional data to log
   */
  error(message: Error | string, data?: any) {
    return this._logMessage(message, LogLevels.ERROR, data);
  }

  /**
   * This logs a message and the data with *LogLevels.INFO*
   * @param {Error | string} message A message to print along the logger name
   * @param data The optional data to log
   */
  info(message: Error | string, data?: any) {
    return this._logMessage(message, LogLevels.INFO, data);
  }

  /**
   * This logs a message and the data with *LogLevels.WARN*
   * @param {Error | string} message A message to print along the logger name
   * @param data The optional data to log
   */
  warn(message: Error | string, data?: any) {
    return this._logMessage(message, LogLevels.WARN, data);
  }

  /**
   * Internal method that ask to the Display class to handle the log
   * @param {Error | string} message A message to print along the logger name
   * @param {LogLevels} level Level associated to the log entry
   * @param data The optional data to log
   * @private
   */
  private _logMessage(message: Error | string, level: LogLevels, data?: any) {
    let outMsg = `${new Date(Date.now()).toISOString()}`;
    outMsg += ` ${level.toUpperCase()}`;
    outMsg += ` [${this.name || '::Error::'}] : ${message}`;

    if (typeof data === 'string') {
      outMsg += ` ${JSON.stringify(data)}`;
    }

    this._sendMessage(outMsg, level, data);
  }

  /**
   * @param {string} outMsg String
   * @param {LogLevels} level LogLevels
   * @private
   */
  private _sendMessage(outMsg: string, level: LogLevels, data: any) {
    switch (this.options.platform) {
      case LogPlatforms.CONSOLE:
        Console.msg(outMsg, level, data);
        break;
      case LogPlatforms.SPLUNK:
        Splunk.msg(outMsg, level, data);
        break;
      default:
        Console.msg(outMsg, level, data);
        break;
    }
  }

  /**
   * Returns details of an error.
   * @param {Error} error
   * @return {{message: Error | string, name: string, reason: string, stack: string, type: string}}
   */
  private getErrorDetails(error: any) {
    const attributes = ['message', 'name', 'reason', 'type', 'stack'];
    const details: any = {};

    for (let i = 0; i < attributes.length; i += 1) {
      if (attributes[i] in error) {
        details[attributes[i]] = error[attributes[i]];
      }
    }
    return details;
  }
}

const logger = new Logger();

export { logger };
