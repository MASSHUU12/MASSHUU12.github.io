/**
 * Class for cookie management.
 *
 * @export
 * @class Cookie
 */
export default class Cookie {
  /**
   * Get the value of a cookie by its name.
   *
   * @static
   * @param {string} name - The name of the cookie.
   * @return {*}  {string}
   * @memberof Cookie The value of the cookie, or an empty string if it does not exist.
   */
  public static getCookie(name: string): string {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith(`${name}=`))
      ?.split("=")?.[1];

    return decodeURIComponent(cookie ?? "");
  }

  /**
   * Set the value for a cookie.
   *
   * @static
   * @param {string} name - The name of the cookie.
   * @param {string | number | boolean} value - The value for the cookie.
   * @memberof Cookie
   */
  public static setCookie(
    name: string,
    value: string | number | boolean,
  ): void {
    const age = 2_592_000; // a month

    document.cookie = `${name}=${encodeURIComponent(value)};max-age=${age}`;
  }
}
