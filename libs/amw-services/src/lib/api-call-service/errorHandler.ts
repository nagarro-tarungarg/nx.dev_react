type errorCb = (res: Response) => void;
interface OverrideOptions {
  [key: number]: errorCb;
}

export class ErrorHandler {
  overrideOptions: OverrideOptions = {};

  /**
   * check if any errros are overriden from FE
   * @param apiRes response of the api
   * @param options override or extend errors
   *
   */
  constructor(apiRes: Response, options: OverrideOptions = {}) {
    this.overrideOptions = options;
    this.handlerErrors(apiRes);
  }

  /**
   * check if any errros are overriden from FE
   * @param apiRes response of the api
   */
  handlerErrors(apiRes: Response) {
    if (this.overrideOptions[apiRes.status]) {
      this.overrideOptions[apiRes.status](apiRes);
    } else {
      this.handleDefaultErrors(apiRes);
    }
  }

  /**
   * handling deafult errors
   * @param apiRes response of the api
   */
  handleDefaultErrors(apiRes: Response) {
    switch (apiRes.status) {
      case 400:
        alert('error recieved');
        break;
      default:
        throw new Error('something went wrong!!');
    }
  }
}
