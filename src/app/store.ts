import { create } from "zustand";

import { popups } from "src/typing/types";
import { InfoProps, PopupsStore } from "src/typing/interfaces";

export const usePopupsStore = create<PopupsStore>()(set => ({
  about: false,
  cv: false,
  mobileMenu: false,
  projectView: false,
  toggle: (what: popups): void => {
    set((state: PopupsStore) => {
      state[what] = !state[what];

      return { ...state };
    });
  },
}));

export const useProjectInfoStore = create<InfoProps>()(set => ({
  item: {
    title: "",
    short_desc: "",
    description: "",
    labels: [],
    labels_left: [],
    teamwork: false,
    images: [],
    links: [],
  },
  keyID: 0,
  setData: (data: InfoProps): void => {
    set(data);
  },
  deleteData: (): void => {
    set({});
  },
}));
