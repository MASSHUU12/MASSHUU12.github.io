import WorkSingle from "./WorkSingle";
import { info } from "./info";

const Works: React.FunctionComponent<any> = () => {
  return (
    <section className="works-container" id="works">
      {/* Map through items and displays them. */}
      {info.map((item, index) => (
        <WorkSingle key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Works;
