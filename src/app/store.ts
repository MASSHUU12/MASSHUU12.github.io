import { create } from "zustand";

import { popups } from "src/typing/types";
import { InfoProps, PopupsStore } from "src/typing/interfaces";

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

interface ProjectInfoProps extends InfoProps {
  // eslint-disable-next-line no-unused-vars
  setData: (data: InfoProps) => void;
  deleteData: () => void;
}

export const useProjectInfoStore = create<ProjectInfoProps>()(set => ({
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
