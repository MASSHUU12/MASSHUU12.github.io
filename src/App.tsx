import { FunctionComponent } from "preact";
import { useEffect } from "preact/hooks";

import "./App.scss";
import i18n from "./i18n";

import Footer from "src/components/sections/footer/Footer";
import Header from "src/components/sections/header/Header";
import Main from "src/components/sections/main/Main";
import Works from "src/components/sections/work/Works";

const App: FunctionComponent<any> = (): JSX.Element => {
  useEffect(() => {
    // Detect locale on site load
    i18n.changeLanguage(navigator.language.split("-")[0]);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Works />
      <Footer />
    </>
  );
};

export default App;
