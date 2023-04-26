import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";

import Popup from "cmp/common/Popup";
import Social from "cmp/common/Social";
import { usePopupsStore } from "src/app/store";

/**
 * About popup
 *
 * @return {*}  {JSX.Element}
 */
const About: FunctionComponent<any> = (): JSX.Element => {
  const aboutOpened = usePopupsStore(state => state.aboutOpened);

  const { t } = useTranslation();

  return (
    <>
      {aboutOpened && (
        <Popup popup="aboutOpened">
          <>
            <h1 class="text-3xl text-plum">{t("hAbout")}.</h1>
            <span class="text-sm text-blue_gray italic">{t("meTitle")}</span>
            <p>{t("meDescription")}</p>
          </>
          <div class="flex flex-col gap-3 mt-4">
            <Social
              href="mailto:gawrysiak.maciej@proton.me"
              text="gawrysiak.maciej@proton.me">
              <Icon icon="ic:outline-alternate-email" width="24" />
            </Social>
            <Social href="https://github.com/MASSHUU12" text="MASSHUU12">
              <Icon icon="brandico:github" width="24" />
            </Social>
            <Social href="https://t.me/MASSHUU" text="MASSHUU">
              <Icon icon="akar-icons:telegram-fill" width="24" />
            </Social>
            <Social
              href="https://linkedin.com/in/maciej-gawrysiak"
              text="Linkedin">
              <Icon icon="brandico:linkedin-rect" width="24" />
            </Social>
          </div>
        </Popup>
      )}
    </>
  );
};

export default About;
