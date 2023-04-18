import { Icon } from "@iconify/react";
import { FunctionComponent } from "preact";
import { useTranslation } from "react-i18next";

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
          <Social href="mailto:gawrysiak.maciej@pm.me" text="Email">
            <Icon icon="ic:outline-alternate-email" width="32" />
          </Social>
          <Social href="https://github.com/MASSHUU12" text="GitHub">
            <Icon icon="brandico:github" width="32" />
          </Social>
          <Social
            href="https://www.linkedin.com/in/maciej-gawrysiak"
            text="Linkedin">
            <Icon icon="brandico:linkedin-rect" width="32" />
          </Social>
          <Social href="https://t.me/MASSHUU" text="Telegram">
            <Icon icon="akar-icons:telegram-fill" width="32" />
          </Social>
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
