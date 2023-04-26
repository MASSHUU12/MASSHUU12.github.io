import { FunctionComponent, JSX } from "preact";

import Project from "./Project";
import projects from "src/projects.json";
import { InfoProps } from "src/typing/interfaces";

/**
 *
 *
 * @return {*}
 */
const Projects: FunctionComponent<unknown> = (): JSX.Element => {
  return (
    <section id="works">
      {/* Map through items and displays them. */}
      {projects.map((item: InfoProps["item"], index: number) => (
        <Project key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Projects;
