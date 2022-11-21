import { config } from "@react-spring/web";

export const slideToLeftAnim = {
  to: {
    opacity: 1,
    x: 0,
  },
  from: {
    opacity: 0,
    x: 100,
  },
  config: config.slow,
};
