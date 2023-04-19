import { useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";

import i18n from "./i18n";

import Main from "sections/main/Main";
import Footer from "sections/footer/Footer";
import Header from "sections/header/Header";
import Projects from "cmp/sections/projects/Projects";

const App: FunctionComponent<any> = (): JSX.Element => {
  useEffect(() => {
    // Detect locale on site load
    i18n.changeLanguage(navigator.language.split("-")[0]);
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
