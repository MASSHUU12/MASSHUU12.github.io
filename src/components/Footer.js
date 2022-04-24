import React from "react";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n, t } = useTranslation();

  const changeLocale = (locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <footer id="footer">
      <div className="footer-left">
        <h1>{t("usefulLinks")}</h1>
        <p>
          <Link to="header" spy={true} smooth={true}>
            Home
          </Link>
        </p>
        <p>
          <Link to="about" spy={true} smooth={true}>
            {t("about")}
          </Link>
        </p>
        <p>
          <Link to="work" spy={true} smooth={true}>
            {t("work")}
          </Link>
        </p>
        <p>
          <Link to="contact" spy={true} smooth={true}>
            {t("contactMe")}
          </Link>
        </p>
        <div className="footer-lang">
          <span
            onClick={() => {
              changeLocale("pl");
            }}
          >
            <Icon icon={"twemoji:flag-for-flag-poland"} width="38" />
          </span>
          <span
            onClick={() => {
              changeLocale("en");
            }}
          >
            <Icon icon={"twemoji:flag-for-flag-united-states"} width="38" />
          </span>
        </div>
      </div>
      <div className="footer-right">
        <h1>{t("contact")}</h1>
        <a href="mailto:gawrysiak.maciej@pm.me" className="footer-link">
          <Icon icon={"akar-icons:envelope"} width="32" />
          gawrysiak.maciej@pm.me
        </a>

        <a
          href="https://t.me/MASSHUU"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          <Icon icon={"bx:bxl-telegram"} width="32" />
          MASSHUU
        </a>

        <a
          href="https://github.com/MASSHUU12"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          <Icon icon={"akar-icons:github-fill"} width="32" />
          MASSHUU12
        </a>

        <a
          href="https://linkedin.com/in/maciej-gawrysiak"
          target="_blank"
          className="footer-link"
          rel="noreferrer"
        >
          <Icon icon={"brandico:linkedin-rect"} width="32" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
