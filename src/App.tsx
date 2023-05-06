import { useEffect } from "preact/hooks";
import { FunctionComponent, JSX } from "preact";

import i18n from "./i18n";
import Cookie from "helpers/Cookie";

import Main from "cmp/sections/Main";
import Footer from "cmp/sections/Footer";
import Header from "cmp/sections/Header";
import Projects from "cmp/sections/projects/Projects";

const App: FunctionComponent<unknown> = (): JSX.Element => {
  useEffect(() => {
    const cookieLanguage = Cookie.getCookie("lang");

    // Check if cookie with language is already set
    if (cookieLanguage !== "") {
      // If there is cookie, set language with value of it
      i18n.changeLanguage(cookieLanguage);
      return;
    }

    // If not, detect language
    const userLanguage = navigator.language.split("-")[0];

    // Set website language
    i18n.changeLanguage(userLanguage);

    // Set cookie with language
    Cookie.setCookie("lang", userLanguage);
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
