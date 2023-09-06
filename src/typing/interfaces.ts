import { popups, projectCategory } from "./types";

export interface InfoProps {
  item: {
    title: string;
    short_desc: string;
    description: string;
    labels: Array<string>;
    teamwork: boolean;
    category: projectCategory | string;
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

export interface ProjectInfoProps extends InfoProps {
  // eslint-disable-next-line no-unused-vars
  setData: (data: InfoProps) => void;
  deleteData: () => void;
}

export interface ProjectCategory {
  category: projectCategory;
  // eslint-disable-next-line no-unused-vars
  setCategory: (category: projectCategory) => void;
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
