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
  aboutOpened: boolean;
  cvOpened: boolean;
  mobileMenuOpened: boolean;
  toggle: (what: popups) => void;
}
