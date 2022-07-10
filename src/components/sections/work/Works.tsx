import { Link } from "react-scroll";
import Work from "../../common/Work";
import { info } from "./info";

const Works = () => {
  return (
    <section className="works-container">
      <Link to="works" spy smooth href="#">
        Works
      </Link>
      <section id="works">
        <h1>Works</h1>
        {info.map((item, index) => (
          <Work key={index} item={item} />
        ))}
      </section>
    </section>
  );
};

export default Works;
