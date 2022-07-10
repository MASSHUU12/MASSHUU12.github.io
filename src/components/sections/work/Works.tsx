import Work from "../../common/Work";
import { info } from "./info";

const Works = () => {
  return (
    <section className="works-container">
      <a href="#">Works</a>
      <section>
        <h1>Works</h1>
        {info.map((item, index) => (
          <Work key={index} item={item} />
        ))}
      </section>
    </section>
  );
};

export default Works;
