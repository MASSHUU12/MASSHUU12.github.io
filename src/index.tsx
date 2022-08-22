import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./i18n";
import store from "./app/store";
import About from "./components/sections/About";
import CV from "./components/sections/CV";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <About />
      <CV />
    </Provider>
  </React.StrictMode>
);
