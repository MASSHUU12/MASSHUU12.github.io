import { FunctionComponent } from "preact";

import WorkSingle from "./WorkSingle";
import { info } from "./info";

import "./Style.scss";

const Works: FunctionComponent<any> = () => {
  return (
    <section class="works-container" id="works">
      {/* Map through items and displays them. */}
      {info.map((item, index) => (
        <WorkSingle key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Works;
