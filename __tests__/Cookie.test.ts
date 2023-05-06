import Cookie from "../src/helpers/Cookie";

describe("Cookie", () => {
  describe("getCookie()", () => {
    it("should return an empty string if the cookie does not exist", () => {
      const cookieName = "non-existent-cookie";

      expect(Cookie.getCookie(cookieName)).toBe("");
    });

    it("should return the value of an existing cookie", () => {
      const cookieName = "test-name";
      const cookieValue = "test-value";

      document.cookie = `${cookieName}=${cookieValue}`;
      expect(Cookie.getCookie(cookieName)).toBe(cookieValue);
    });

    it("should correctly decode URL-encoded cookies", () => {
      const cookieName = "test-name";
      const cookieEncoded = "%D1%88%D0%B5%D0%BB%D0%BB%D1%8B";
      const cookieDecoded = "шеллы";

      document.cookie = `${cookieName}=${cookieEncoded}`;
      expect(Cookie.getCookie(cookieName)).toBe(cookieDecoded);
    });
  });

  describe("setCookie()", () => {
    it("should set a cookie with the correct name and value", () => {
      const cookieName = "test-name";
      const cookieValue = "test-value";

      Cookie.setCookie(cookieName, cookieValue);
      expect(document.cookie).toContain(`${cookieName}=${cookieValue}`);
    });

    it("should correctly encode cookie value", () => {
      const cookieName = "test-name";
      const cookieValue = "test?";

      Cookie.setCookie(cookieName, cookieValue);
      expect(cookieValue).toMatch(Cookie.getCookie(cookieName));
    });
  });
});
