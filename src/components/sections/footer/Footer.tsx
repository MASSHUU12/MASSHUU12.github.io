import { useTranslation } from "react-i18next";
import Flag from "../../common/Flag";
import Social from "../../common/Social";
import Scroll from "../../common/Scroll";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="bgjar-attribution">
        Free SVG Background by{" "}
        <a target="_blank" rel="noreferrer" href="https://bgjar.com">
          BGJar
        </a>
      </div>
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
        <Scroll text={t("fTop")} to="header" />
      </div>
      <div className="footer-bottom">
        <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
        <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
      </div>
    </footer>
  );
};

export default Footer;
