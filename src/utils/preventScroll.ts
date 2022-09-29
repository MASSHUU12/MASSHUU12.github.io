export const scroll = {
  /** Remove class from body to enable page scrolling. */
  enable: (): void => {
    document.querySelector("body")!.className = "";
  },
  /** Set class to body to prevent from page scrolling. */
  disable: (): void => {
    document.querySelector("body")!.className = "disable-scroll";
  },
};
