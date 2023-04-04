import { CacheHandler } from './cacheHandler';
import { ErrorHandler } from './errorHandler';
import { retryHttp } from './retryHttp';
import {
  RequestOptions,
  HTTPVerbs,
  RequestOptionsWithAdvance,
  HTTPReferrerPolicy,
} from './types/httpTypes';
import { uniqueId } from './uniqId';

const controller = new AbortController();

const httpRequest = async (options: RequestOptions) => {
  let url = '';

  const cacheInstance = CacheHandler.getInstance();

  if (options && options.url) {
    url = options.url;
  }

  if (options && options.params) {
    url = `${url}?${new URLSearchParams(options.params)}`;
  }

  if (options.method === HTTPVerbs.GET) {
    if (options.customCache && cacheInstance.hasUrl(url)) {
      return { res: 'Request aleady in process' };
    } else {
      cacheInstance.pushUrl(url);
    }
  }

  if (!url) {
    return console.error('URL not provided!');
  }

  let _options: RequestOptionsWithAdvance = {
    url: '',
    method: HTTPVerbs.GET,
    headers: {
      'Content-Type': 'application/json',
    },
    referrerPolicy: HTTPReferrerPolicy.NoReferrer,
    customCache: true,
    log: false,
    signal: controller.signal,
  };

  if (typeof options === 'object') {
    _options = {
      ..._options,
      ...options,
    };
  }

  if (
    _options.body &&
    _options.headers['Content-Type'] === 'application/json'
  ) {
    _options.body = JSON.stringify(_options.body);
  }

  if (_options.log) {
    console.log(
      `%c Options: ${JSON.stringify(_options, null, 2)}`,
      'color: blue'
    );
  }

  if (_options.method === HTTPVerbs.POST) {
    if (!_options.body) {
      console.warn('Body not provided!');
    }

    /**
     * set idempotancy id for post request
     */
    _options.headers['etag-uniq'] = uniqueId();
  }

  const response = await retryHttp(url, _options, _options.retries || 3);
  const contentTypeHeader = response.headers.get('Content-Type');

  if (response && _options.method === HTTPVerbs.GET) {
    cacheInstance.remove(url);
  }

  if (contentTypeHeader) {
    if (contentTypeHeader.includes('json') && response.ok) {
      return await response.json();
    }
  }

  if (!response.ok) {
    new ErrorHandler(response, (options as RequestOptions).errorHandlers);
  }

  return response;
};

httpRequest.cancelRequests = () => {
  controller.abort();
};

export { httpRequest };
