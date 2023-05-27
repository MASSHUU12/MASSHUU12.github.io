import { render } from "preact";

import App from "./App";

import About from "@/components/popups/About";
import ProjectView from "@/components/popups/ProjectView";
import MobileMenu from "@/components/sections/mobileMenu/MobileMenu";

import "./i18n";
import "./index.css";

render(
  <>
    <App />
    <About />
    <MobileMenu />
    <ProjectView />
  </>,
  document.getElementById("root") as HTMLElement,
);
