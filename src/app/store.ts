import { create } from "zustand";
import { Popups } from "src/interfaces";
import { popups } from "src/types";

export const usePopupsStore = create<Popups>()(set => ({
  aboutOpened: false,
  cvOpened: false,
  mobileMenu: {
    value: false,
    reverse: false,
  },
  toggle: (what: popups): void => {
    set((state: Popups) => {
      state[what] = !state[what];

      return { ...state };
    });
  },
  toggleMobileMenu: (value: boolean): void => {
    set((state: Popups) => {
      state.mobileMenu.value = value;
      state.mobileMenu.reverse = value ? false : true;

      return { ...state };
    });
  },
  toggleMobileMenuReverse: (reverse: boolean): void => {
    set((state: Popups) => {
      state.mobileMenu.reverse = reverse;

      return { ...state };
    });
  },
}));
