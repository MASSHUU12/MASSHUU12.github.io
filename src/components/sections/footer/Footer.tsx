import { Icon } from "@iconify/react";
import { FunctionComponent } from "preact";
import { useTranslation } from "react-i18next";

import Flag from "common/Flag";
import Social from "common/Social";

/**
 * Footer component
 *
 * @return {*}  {JSX.Element}
 */
const Footer: FunctionComponent<any> = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer class="mb-4">
      <div class="w-full flex md:flex-row md:gap-0 gap-2 flex-col justify-between font-extralight">
        <div class="flex flex-col gap-2">
          <Social href="mailto:gawrysiak.maciej@pm.me" text="Email">
            <Icon icon="ic:outline-alternate-email" width="24" />
          </Social>
          <Social href="https://github.com/MASSHUU12" text="GitHub">
            <Icon icon="brandico:github" width="24" />
          </Social>
          <Social
            href="https://www.linkedin.com/in/maciej-gawrysiak"
            text="Linkedin">
            <Icon icon="brandico:linkedin-rect" width="24" />
          </Social>
          <Social href="https://t.me/MASSHUU" text="Telegram">
            <Icon icon="akar-icons:telegram-fill" width="24" />
          </Social>
        </div>
        <div class="flex items-end gap-2">
          <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
          <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
        </div>
      </div>
      <hr class="my-4 text-dim" />
      <span class="text-white_custom">Maciej Gawrysiak</span>
    </footer>
  );
};

export default Footer;
