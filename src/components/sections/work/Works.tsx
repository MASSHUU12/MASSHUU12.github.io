import { FunctionComponent } from "preact";

import WorkSingle from "./WorkSingle";
import * as json from "../../../projects.json";

import "./Style.scss";

const Works: FunctionComponent<any> = () => {
  return (
    <section class="project-container" id="works">
      {/* Map through items and displays them. */}
      {json["default"].map((item: any, index: any) => (
        <WorkSingle key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Works;
