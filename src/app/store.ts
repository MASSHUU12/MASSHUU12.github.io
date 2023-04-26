import { create } from "zustand";

import { popups } from "src/types";
import { Popups } from "src/interfaces";

export const usePopupsStore = create<Popups>()(set => ({
  aboutOpened: false,
  cvOpened: false,
  mobileMenuOpened: false,
  toggle: (what: popups): void => {
    set((state: Popups) => {
      state[what] = !state[what];

      return { ...state };
    });
  },
}));
