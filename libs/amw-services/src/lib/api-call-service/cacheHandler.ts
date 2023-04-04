export class CacheHandler {
  cache: Array<string> = [];
  static instance: CacheHandler;

  private constructor() {
    console.log('API Cache initialized!!');
  }

  public static getInstance(): CacheHandler {
    if (!CacheHandler.instance) {
      CacheHandler.instance = new CacheHandler();
    }
    return CacheHandler.instance;
  }

  /**
   * set url in an array
   * @param url string
   */
  pushUrl(url: string) {
    this.cache.push(url);
  }

  /**
   * check weather url present in an array
   * @param url string
   * @returns booelan true/false
   */
  hasUrl(url: string) {
    return this.cache.includes(url);
  }

  /**
   * remove items from array
   * @param url string
   */
  remove(url: string) {
    for (let i = 0; i < this.cache.length; i++) {
      if (this.cache[i] === url) {
        this.cache.splice(i, 1);
      }
    }
  }

  /**
   * check cached URLs
   * DEBUGGING puposes
   */
  entries() {
    console.log('Cached API requests: ', this.cache);
  }
}
