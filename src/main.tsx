import { render } from "preact";

import App from "./App";

import CV from "cmp/popups/CV";
import About from "cmp/popups/About";
import MobileMenu from "sections/mobileMenu/MobileMenu";

import "./i18n";
import "./index.css";

render(
  <>
    <App />
    <About />
    <CV />
    <MobileMenu />
  </>,
  document.getElementById("root") as HTMLElement,
);
