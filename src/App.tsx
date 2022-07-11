import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./App.scss";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Header from "./components/sections/header/Header";
import Main from "./components/sections/main/Main";
import Footer from "./components/sections/footer/Footer";
import Works from "./components/sections/work/Works";
import i18n from "./i18n";

function App(): JSX.Element {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    // Detect locale on site load
    i18n.changeLanguage(navigator.language.split("-")[0]);
  }, []);

  return (
    <>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Header />
      <Main />
      <Works />
      <Footer />
    </>
  );
}

export default App;
