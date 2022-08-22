import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Flag from "../common/Flag";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-top">
        <a
          href="https://www.linkedin.com/in/maciej-gawrysiak/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/MASSHUU12/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="https://t.me/MASSHUU/" target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
      <div className="footer-middle">
        <p>Maciej Gawrysiak</p>
        <span>•</span>
        <a href="mailto:gawrysiak.maciej@pm.me">Email</a>
        <span>•</span>
        <Link to="header" spy smooth>
          {t("top")}
        </Link>
      </div>
      <div className="footer-bottom">
        <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
        <span>•</span>
        <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
      </div>
    </footer>
  );
};

export default Footer;
