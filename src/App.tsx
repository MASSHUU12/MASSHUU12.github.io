import { FunctionComponent } from "preact";
import { useEffect } from "preact/hooks";

import "./App.scss";
import i18n from "./i18n";

import Footer from "sections/footer/Footer";
import Header from "sections/header/Header";
import Main from "sections/main/Main";
import Works from "sections/work/Works";

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
