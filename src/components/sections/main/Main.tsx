import { useState } from "react";
import Button from "../../common/Button";
import About from "../about/About";

const Main = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="main-container">
        <h1>Maciej Gawrysiak</h1>
        <span>Junior Developer</span>
        <Button text="About Me" action={() => setToggle(!toggle)} />
      </section>
      {toggle && <About setToggle={setToggle} />}
    </>
  );
};

export default Main;
