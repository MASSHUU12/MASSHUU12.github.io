export const workSlideInAnimation = {
  to: {
    y: 0,
    opacity: 1,
  },
  from: {
    y: 100,
    opacity: 0,
  },
  reset: true,
};

export const workBackgroundAnimation = (
  reverse: boolean,
  closeAnim: () => void,
) => {
  return {
    to: {
      scaleX: 1,
      opacity: reverse ? 0.3 : 1,
    },
    from: {
      scaleX: 0,
      opacity: reverse ? 0 : 1,
    },
    reset: true,
    reverse: reverse,
    onRest: closeAnim,
  };
};

export const workItemAnimation = (
  animPlayed: boolean,
  mouseOver: boolean,
  toggle: boolean,
) => {
  return {
    opacity: animPlayed ? 1 : 0,
    y: animPlayed ? 0 : 100,
    scale: mouseOver ? 1.1 : 1,
    reset: true,
    cancel: toggle,
  };
};
