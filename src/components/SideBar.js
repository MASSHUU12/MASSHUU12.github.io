import React from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar-container">
      <Link to="header" spy={true} smooth={true}>
        <span>Home</span>
      </Link>
      <Link to="about" spy={true} smooth={true}>
        <span>{t("about")}</span>
      </Link>
      <Link to="contact" spy={true} smooth={true}>
        <span>{t("contact")}</span>
      </Link>
      <Link to="experience" spy={true} smooth={true}>
        <span>{t("experience")}</span>
      </Link>
      <Link to="work" spy={true} smooth={true}>
        <span>{t("work")}</span>
      </Link>
    </div>
  );
};

export default SideBar;
