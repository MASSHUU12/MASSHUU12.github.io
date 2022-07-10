import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import "./App.scss";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import Header from "./components/sections/Header";
import Main from "./components/sections/Main";

function App(): JSX.Element {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Header />
      <Main />
    </div>
  );
}

export default App;
