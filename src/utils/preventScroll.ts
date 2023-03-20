export const scroll = {
  /** Remove class from body to enable page scrolling. */
  enable: (): void => {
    document.body.style.overflow = "";
  },
  /** Set class to body to prevent from page scrolling. */
  disable: (): void => {
    document.body.style.overflow = "hidden";
  },
};
