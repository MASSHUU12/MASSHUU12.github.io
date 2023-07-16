import { FunctionComponent, JSX } from "preact";

import Project from "./Project";
import projects from "@/projects.json";
import { InfoProps } from "@/typing/interfaces";

/**
 *
 *
 * @return {*}
 */
const Projects: FunctionComponent<unknown> = (): JSX.Element => {
  return (
    <section id="works" class="grid place-items-center gap-8">
      {/* Map through items and displays them. */}
      {projects.map((item: InfoProps["item"], index: number) => (
        <Project key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Projects;
