import { FunctionComponent, JSX } from "preact";

import Project from "./Project";
import projects from "src/projects.json";

/**
 *
 *
 * @return {*}
 */
const Projects: FunctionComponent<any> = (): JSX.Element => {
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
