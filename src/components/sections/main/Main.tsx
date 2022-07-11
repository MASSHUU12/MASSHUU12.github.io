import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button";
import About from "../about/About";

const Main = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <section className="main-container">
        <h1>Maciej Gawrysiak</h1>
        <span>{t("title")}</span>
        <Button text={t("aboutMe")} action={() => setToggle(!toggle)} />
      </section>
      {toggle && <About setToggle={setToggle} />}
    </>
  );
};

export default Main;
