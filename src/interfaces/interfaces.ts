import { StateUpdater } from "preact/hooks";

export interface InfoProps {
  item: {
    title: string;
    short_desc: string;
    description: string;
    labels: Array<string>;
    labels_left: Array<string>;
    images: Array<string>;
    links:
      | {
          name: string;
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
    images: Array<string>;
    links:
      | {
          name: string;
          link: string;
        }[]
      | never[];
  };
  setToggle: StateUpdater<boolean>;
}
