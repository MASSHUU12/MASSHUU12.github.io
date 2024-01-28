import { render } from "preact";

import App from "./App";

import "./i18n";
import "./index.css";

render(<App />, document.getElementById("root") as HTMLElement);
