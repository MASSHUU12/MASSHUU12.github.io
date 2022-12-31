import "App.scss";
import Footer from "components/sections/footer/Footer";
import Header from "components/sections/header/Header";
import Main from "components/sections/main/Main";
import Works from "components/sections/work/Works";
import i18n from "i18n";

import { FunctionComponent } from "preact";
import { useEffect } from "preact/hooks";

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
