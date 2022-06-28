import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n, t } = useTranslation();

  /**
   * Responsible for changing the language
   * when the corresponding flag is pressed
   */
  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  return (
    <footer id="footer">
      <div className="footer-container">
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
    </footer>
  );
};

export default Footer;
