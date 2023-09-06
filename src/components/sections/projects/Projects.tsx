import { FunctionComponent, JSX } from "preact";

import Project from "./Project";
import projects from "@/projects.json";
import { InfoProps } from "@/typing/interfaces";

/**
 * Projects section.
 *
 * @return {*} {JSX.Element}
 */
const Projects: FunctionComponent<unknown> = (): JSX.Element => {
  return (
    <section id="works" class="grid place-items-center gap-8">
      {/* Category selection */}
      <div class="flex flex-row items-center gap-6">
        <h2 class="text-xl text-white_custom">Projects</h2>
        <label for="category" class="sr-only">
          Select category
        </label>
        <select class="px-4 py-2 text-base border-none rounded-md shadow-sm cursor-pointer bg-white_custom sm:text-sm">
          <option value="all">All</option>
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="desktop">Desktop</option>
        </select>
      </div>

      {/* Map through items and displays them. */}
      {projects.map((item: InfoProps["item"], index: number) => (
        <Project key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Projects;
