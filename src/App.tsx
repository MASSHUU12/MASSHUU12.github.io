import { useEffect } from "react";
import Header from "./components/sections/Header";
import Main from "./components/sections/Main";
import Footer from "./components/sections/Footer";
import Works from "./components/sections/work/Works";
import i18n from "./i18n";
import "./App.scss";

function App(): JSX.Element {
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
}

export default App;
