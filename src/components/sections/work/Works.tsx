import { useTranslation } from "react-i18next";
import WorkSingle from "./WorkSingle";
import { info } from "./info";

const Works = () => {
  const { t } = useTranslation();

  return (
    <section className="works-container" id="works">
      <h1>{t("works")}</h1>
      {/* Map through items and displays them. */}
      {info.map((item, index) => (
        <WorkSingle key={index} item={item} keyID={index} />
      ))}
    </section>
  );
};

export default Works;
