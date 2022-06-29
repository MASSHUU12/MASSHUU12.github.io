import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks";

const Footer = () => {
  const { i18n, t } = useTranslation();

  /**
   * Responsible for changing the language
   * when the corresponding flag is pressed
   */
  const changeLocale = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const links = useAppSelector((state) => state.sidebar.value);

  return (
    <footer id="footer">
      <div className="footer-container">
        <h1>{t("usefulLinks")}</h1>
        {links.map((item) => {
          return (
            <p>
              <Link to={item.to} spy={true} smooth={true}>
                {t(item.name)}
              </Link>
            </p>
          );
        })}
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
