export const mobileMenuAnimation = {
  to: {
    opacity: 1,
    y: 0,
  },
  from: {
    opacity: 0,
    y: 100,
  },
  reset: true,
};

export const mobileMenuSlideAnimation = {
  to: {
    x: 0,
  },
  from: {
    x: window.innerWidth,
  },
  reset: true,
};
