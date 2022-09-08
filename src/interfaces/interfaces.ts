export interface InfoProps {
  item: {
    title: string;
    short_description: string;
    description: string;
    labels: Array<string>;
    leftLabel: Array<string>;
    image: string;
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
    image: string;
    links:
      | {
          name: string;
          link: string;
        }[]
      | never[];
  };
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
