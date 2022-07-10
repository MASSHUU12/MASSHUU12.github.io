import { useCallback } from "react";
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

function App(): JSX.Element {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
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
