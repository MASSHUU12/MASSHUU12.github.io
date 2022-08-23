import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Flag from "../common/Flag";
import Social from "../common/Social";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-top">
        <Social
          href="https://www.linkedin.com/in/maciej-gawrysiak"
          text="Linkedin"
        />
        <Social href="https://github.com/MASSHUU12" text="GitHub" />
        <Social href="https://t.me/MASSHUU" text="Telegram" />
      </div>
      <div className="footer-middle">
        <span>Maciej Gawrysiak</span>
        <Social href="mailto:gawrysiak.maciej@pm.me" text="Email" />
        <Link to="header" spy smooth>
          {t("top")}
        </Link>
      </div>
      <div className="footer-bottom">
        <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
        <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
      </div>
    </footer>
  );
};

export default Footer;
