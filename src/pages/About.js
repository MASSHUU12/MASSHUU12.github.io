import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>{t("more")}:</h1>
        <p>{t("description")}.</p>
        <p>{t("description2")}.</p>
        <p>{t("description3")}.</p>
        <p>{t("description4")}.</p>
      </div>
    </div>
  );
};

export default About;
