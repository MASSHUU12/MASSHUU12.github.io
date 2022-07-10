import { useState } from "react";
import { Link } from "react-scroll";
import About from "../about/About";

const Header = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header id="header">
        <div>
          <Link to="works" spy smooth>
            Works
          </Link>
          <Link to="contact" spy smooth onClick={() => setToggle(!toggle)}>
            Contact
          </Link>
        </div>
      </header>
      {toggle && <About setToggle={setToggle} />}
    </>
  );
};

export default Header;
