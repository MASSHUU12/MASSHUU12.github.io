import { popups } from "./types";

export interface InfoProps {
  item: {
    title: string;
    short_desc: string;
    description: string;
    labels: Array<string>;
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

export interface Popups {
  about: boolean;
  mobileMenu: boolean;
  projectView: boolean;
}

export interface PopupsStore extends Popups {
  // eslint-disable-next-line no-unused-vars
  toggle: (what: popups) => void;
}
