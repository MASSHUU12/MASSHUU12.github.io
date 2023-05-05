import { render } from "preact";

import App from "./App";

import CV from "cmp/popups/CV";
import About from "cmp/popups/About";
import MobileMenu from "sections/mobileMenu/MobileMenu";

import "./i18n";
import "./index.css";
import ProjectView from "cmp/popups/ProjectView";

render(
  <>
    <App />
    <About />
    <CV />
    <MobileMenu />
    <ProjectView />
  </>,
  document.getElementById("root") as HTMLElement,
);
