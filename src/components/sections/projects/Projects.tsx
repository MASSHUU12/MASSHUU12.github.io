import { FunctionComponent } from "preact";

import Project from "./Project";
import * as json from "../../../projects.json";

import "./Style.scss";

const Projects: FunctionComponent<any> = () => {
  return (
    <section class="project-container" id="works">
      {/* Map through items and displays them. */}
      {json["default"].map((item: any, index: any) => (
        <Project key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Projects;
