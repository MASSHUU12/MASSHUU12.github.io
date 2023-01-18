import { render } from "preact";
import { Provider } from "react-redux";

import App from "./App";
import "./i18n";
import store from "./app/store";
import About from "sections/about/About";
import CV from "sections/cv/CV";
import MobileMenu from "sections/mobileMenu/MobileMenu";

render(
  <Provider store={store}>
    <App />
    <About />
    <CV />
    <MobileMenu />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
