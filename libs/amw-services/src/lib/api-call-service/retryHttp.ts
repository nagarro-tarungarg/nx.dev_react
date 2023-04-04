import { RequestOptions } from './types/httpTypes';

/**
 * Retries the http request
 * @param url URL of request
 * @param options Options for request
 * @param retries Number for retry requests
 */
export const retryHttp: any = async (
  url: string,
  options: RequestOptions,
  retries: number
) => {
  const response: Response = await fetch(url, options);
  if (response.ok) {
    return response;
  }
  if (retries > 1) {
    return retryHttp(url, options, retries - 1);
  }
  return response;
};
