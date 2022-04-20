import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h1>{t("more")}:</h1>
        <p>{t("iAmA")}.</p>
        <p>{t("withTheHelp")}.</p>
      </div>
    </div>
  );
};

export default About;
