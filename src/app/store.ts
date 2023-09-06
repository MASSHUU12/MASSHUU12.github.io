import { create } from "zustand";

import { popups } from "src/typing/types";
import {
  InfoProps,
  PopupsStore,
  ProjectCategory,
  ProjectInfoProps,
} from "src/typing/interfaces";

export const usePopupsStore = create<PopupsStore>()(set => ({
  about: false,
  mobileMenu: false,
  projectView: false,
  toggle: (what: popups): void => {
    set((state: PopupsStore) => {
      state[what] = !state[what];

      return { ...state };
    });
  },
}));

export const useProjectInfoStore = create<ProjectInfoProps>()(set => ({
  item: {
    title: "",
    short_desc: "",
    description: "",
    labels: [],
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

export const useProjectCategoryStore = create<ProjectCategory>(set => ({
  category: "all",
  setCategory(category) {
    set({ category });
  },
}));
