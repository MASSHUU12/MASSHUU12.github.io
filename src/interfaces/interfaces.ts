import { StateUpdater } from "preact/hooks";

export interface InfoProps {
  item: {
    title: string;
    short_description: string;
    description: string;
    labels: Array<string>;
    leftLabel: Array<string>;
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
    short_description: string;
    description: string;
    labels: Array<string>;
    leftLabel: Array<string>;
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
