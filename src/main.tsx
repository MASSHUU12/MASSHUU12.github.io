import { render } from "preact";

import App from "./App";

import About from "cmp/popups/About";
import MobileMenu from "sections/mobileMenu/MobileMenu";

import "./i18n";
import "./index.css";
import ProjectView from "cmp/popups/ProjectView";

render(
  <>
    <App />
    <About />
    <MobileMenu />
    <ProjectView />
  </>,
  document.getElementById("root") as HTMLElement,
);
