import { FunctionComponent } from "preact";

import Project from "./Project";
import projects from "../../../projects.json";

// import "./Style.scss";

const Projects: FunctionComponent<any> = () => {
  return (
    <section id="works">
      {/* Map through items and displays them. */}
      {projects.map((item: any, index: any) => (
        <Project key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Projects;
