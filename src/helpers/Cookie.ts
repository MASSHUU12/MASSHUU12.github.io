export default class Cookie {
  public static getCookie(name: string): string {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith(`${name}=`))
      ?.split("=")?.[1];

    return decodeURIComponent(cookie ?? "");
  }

  public static setCookie(
    name: string,
    value: string | number | boolean,
  ): void {
    const age = 2_592_000; // a month

    document.cookie = [
      `${name}=${encodeURIComponent(value)}`,
      `Max-Age=${age}`,
      "SameSite=Strict",
    ].join(";");
  }
}
