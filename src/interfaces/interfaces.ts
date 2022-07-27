export interface InfoProps {
  item: {
    title: string;
    short_description: string;
    description: string;
    labels: Array<string>;
    leftLabel: string;
    github: string;
    website: string;
    image: string;
  };
}

export interface InfoToggleProps {
  item: {
    title: string;
    short_description: string;
    description: string;
    labels: Array<string>;
    leftLabel: string;
    github: string;
    website: string;
    image: string;
  };
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
