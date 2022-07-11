import { useState } from "react";
import { Link } from "react-scroll";
import About from "../about/About";
import { useTranslation } from "react-i18next";

const Header = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header id="header">
        <div>
          <Link to="works" spy smooth>
            {t("works")}
          </Link>
          <Link to="contact" spy smooth onClick={() => setToggle(!toggle)}>
            {t("contact")}
          </Link>
        </div>
      </header>
      {toggle && <About setToggle={setToggle} />}
    </>
  );
};

export default Header;
