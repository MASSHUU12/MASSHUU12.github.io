import { Link } from "react-scroll";
import WorkSingle from "./WorkSingle";
import { info } from "./info";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();

  return (
    <section className="works-container">
      <Link to="works" spy smooth href="works">
        {t("works")}
      </Link>
      <section id="works">
        <h1>{t("works")}</h1>
        {info.map((item, index) => (
          <WorkSingle key={index} item={item} />
        ))}
      </section>
    </section>
  );
};

export default Works;
