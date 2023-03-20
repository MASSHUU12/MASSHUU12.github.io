export const scroll = {
  /** Remove style from body to enable page scrolling. */
  enable: (): void => {
    document.body.style.overflow = "";
  },
  /** Set style to body to prevent from page scrolling. */
  disable: (): void => {
    document.body.style.overflow = "hidden";
  },
};
