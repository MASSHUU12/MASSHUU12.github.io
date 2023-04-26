import { create } from "zustand";

import { popups } from "src/typing/types";
import { PopupsStore } from "src/typing/interfaces";

export const usePopupsStore = create<PopupsStore>()(set => ({
  about: false,
  cv: false,
  mobileMenu: false,
  toggle: (what: popups): void => {
    set((state: PopupsStore) => {
      state[what] = !state[what];

      return { ...state };
    });
  },
}));
