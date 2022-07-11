import { useState } from "react";
import Button from "../../common/Button";
import WorkInfo from "./WorkInfo";

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
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="works-section">
        <img src={item.image} alt={item.title} />
        <div className="works-section-content">
          <h2>{item.title}</h2>
          <p>{item.short_description}</p>
          <Button text="More info" action={() => setToggle(!toggle)} />
        </div>
      </div>
      {toggle && <WorkInfo item={item} setToggle={setToggle} />}
    </>
  );
};

export default Work;
