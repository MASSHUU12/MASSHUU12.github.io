import Flag from "components/common/Flag";
import Social from "components/common/Social";
import { useTranslation } from "react-i18next";

/**
 * Footer component
 *
 * @return {*}  {JSX.Element}
 */
const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-links">
          <Social
            href="https://www.linkedin.com/in/maciej-gawrysiak"
            text="Linkedin"
          />
          <Social href="https://github.com/MASSHUU12" text="GitHub" />
          <Social href="https://t.me/MASSHUU" text="Telegram" />
          <Social href="mailto:gawrysiak.maciej@pm.me" text="Email" />
        </div>
        <div className="foot-flags">
          <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
          <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
        </div>
      </div>
      <hr />
      <div className="foot-btm">
        <span>Maciej Gawrysiak</span>
        <span>
          {t("fAtt")}
          <a target="_blank" rel="noreferrer" href="https://bgjar.com">
            BGJar
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
