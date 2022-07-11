import { Link } from "react-scroll";
import WorkSingle from "./WorkSingle";
import { info } from "./info";

const Works = () => {
  return (
    <section className="works-container">
      <Link to="works" spy smooth href="works">
        Works
      </Link>
      <section id="works">
        <h1>Works</h1>
        {info.map((item, index) => (
          <WorkSingle key={index} item={item} />
        ))}
      </section>
    </section>
  );
};

export default Works;
