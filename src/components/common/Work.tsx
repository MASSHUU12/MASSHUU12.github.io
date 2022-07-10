import Button from "./Button";

interface Props {
  item: {
    title: string;
    short_description: string;
    description: string;
    labels: Array<string>;
    teamwork: boolean;
    github: string;
    website: string;
    image: string;
  };
}

const Work = ({ item }: Props): JSX.Element => {
  return (
    <div className="works-section">
      <img src={item.image} alt={item.title} />
      <div className="works-section-content">
        <h2>{item.title}</h2>
        <p>{item.short_description}</p>
        <Button text="More info" />
      </div>
    </div>
  );
};

export default Work;
