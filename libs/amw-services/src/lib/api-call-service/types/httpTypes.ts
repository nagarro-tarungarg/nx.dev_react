export interface RequestOptions {
  url: string;
  method: HTTPVerbs;
  params?: any;
  headers?: any;
  customCache?: boolean;
  log?: boolean;
  body?: any;
  errorHandlers?: any;
  retries?: number;
  integrity?: string;
  keepalive?: boolean;
  referrerPolicy?: HTTPReferrerPolicy;
  referrer?: ReferrerTypes;
  cache?: HTTPCache;
  credentials?: HTTPCredentials;
  mode?: HTTPModes;
}

export interface RequestOptionsWithAdvance extends RequestOptions {
  signal: any;
}

export enum HTTPVerbs {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum HTTPReferrerPolicy {
  NoReferrer = 'no-referrer',
  NoReferrerWhenDowngrade = 'no-referrer-when-downgrade',
  SameOrigin = 'same-origin',
  Origin = 'origin',
  StrictOrigin = 'strict-origin',
  OriginWhenCrossOrigin = 'origin-when-cross-origin',
  StrictOriginWhenCrossOrigin = 'strict-origin-when-cross-origin',
  UnsafeUrl = 'unsafe-url',
}

export enum HTTPRedirects {
  follow = 'follow',
  error = 'error',
  manual = 'manual',
}

export enum HTTPCredentials {
  Omit = 'omit',
  SameOrigin = 'same-origin',
  Include = 'include',
}

export enum HTTPCache {
  Default = 'default',
  NoStore = 'no-store',
  Reload = 'reload',
  NoCache = 'no-cache',
  ForceCache = 'force-cache',
  OnlyIfCached = 'only-if-cached',
}

export type ReferrerTypes = 'about:client' | '';

export enum HTTPModes {
  Cors = 'cors',
  SameOrigin = 'same-origin',
  NoCors = 'no-cors',
}
