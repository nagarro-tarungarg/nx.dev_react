import { LogLevels } from './types/log-levels';

/**
 *
 * This simply calls the corresponding *console* method to log in the browser console.
 */
export class Splunk {
  /**
   * Method that acts as a proxy to the *console*
   * @param outMsg The initial string after the *moduleName*; this will be enclosed in a rectangular border of the corresponding color
   * @param {LogLevels} level Type of log (i.e. DEBUG, INFO, etc...)
   * @param {any} data Error information
   *
   */
  static msg(outMsg: any, level?: LogLevels, data?: any) {
    console.log(level, outMsg);
  }
}
