export const scroll = {
  enable: (): void => {
    // Remove class from body to enable page scrolling.
    document.querySelector("body")!.className = "";
  },
  disable: (): void => {
    // Set class to body to prevent from page scrolling.
    document.querySelector("body")!.className = "disable-scroll";
  },
};
