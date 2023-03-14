import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

import Flag from "common/Flag";
import Social from "common/Social";

import "./Style.scss";

/**
 * Footer component
 *
 * @return {*}  {JSX.Element}
 */
const Footer: FunctionComponent<any> = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer>
      <div class="foot-grid">
        <div class="foot-links">
          <Social
            href="https://www.linkedin.com/in/maciej-gawrysiak"
            text="Linkedin"
          />
          <Social href="https://github.com/MASSHUU12" text="GitHub" />
          <Social href="https://t.me/MASSHUU" text="Telegram" />
          <Social href="mailto:gawrysiak.maciej@pm.me" text="Email" />
        </div>
        <div class="foot-flags">
          <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
          <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
        </div>
      </div>
      <hr />
      <div class="foot-btm">
        <span>Maciej Gawrysiak</span>
      </div>
    </footer>
  );
};

export default Footer;
