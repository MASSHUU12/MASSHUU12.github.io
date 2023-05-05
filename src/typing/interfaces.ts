import { StateUpdater } from "preact/hooks";
import { popups } from "./types";

export interface InfoProps {
  item: {
    title: string;
    short_desc: string;
    description: string;
    labels: Array<string>;
    labels_left: Array<string>;
    teamwork: boolean;
    images: Array<string>;
    links:
      | {
          name: string;
          type: string;
          link: string;
        }[]
      | never[];
  };
  keyID: number;
}

// TODO: Delete this interface
export interface InfoToggleProps {
  item: {
    title: string;
    short_desc: string;
    description: string;
    labels: Array<string>;
    labels_left: Array<string>;
    teamwork: boolean;
    images: Array<string>;
    links:
      | {
          name: string;
          type: string;
          link: string;
        }[]
      | never[];
  };
  setToggle: StateUpdater<boolean>;
}

export interface Popups {
  about: boolean;
  cv: boolean;
  mobileMenu: boolean;
  projectView: boolean;
}

export interface PopupsStore extends Popups {
  // eslint-disable-next-line no-unused-vars
  toggle: (what: popups) => void;
}
