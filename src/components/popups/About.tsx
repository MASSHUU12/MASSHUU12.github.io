import { usePopupsStore } from "@/app/store";
import Popup from "@/components/common/Popup";
import Social from "@/components/common/Social";
import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import { JSX } from "preact";
import { useTranslation } from "react-i18next";

function About(): JSX.Element {
  const { t } = useTranslation();
  const about = usePopupsStore(state => state.about);

  return (
    <>
      {about && (
        <Popup>
          <>
            <Typography variant="h4" color="plum">
              {t("hAbout")}.
            </Typography>
            <Typography
              variant="caption"
              color="textPrimary"
              sx={{ fontStyle: "italic" }}>
              {t("meTitle")}
            </Typography>
            <Typography variant="body1" mt={1}>
              {t("meDescription")}
            </Typography>
          </>
          <Stack direction="column" gap={2}>
            <Social
              href="mailto:gawrysiak.maciej@proton.me"
              text="gawrysiak.maciej@proton.me">
              <Icon icon="ic:outline-alternate-email" width="24" />
            </Social>
            <Social href="https://github.com/MASSHUU12" text="MASSHUU12">
              <Icon icon="brandico:github" width="24" />
            </Social>
            <Social href="https://leetcode.com/MASSHUU/" text="MASSHUU">
              <Icon icon="simple-icons:leetcode" width="24" />
            </Social>
            <Social href="https://t.me/MASSHUU" text="MASSHUU">
              <Icon icon="akar-icons:telegram-fill" width="24" />
            </Social>
            <Social
              href="https://linkedin.com/in/maciej-gawrysiak"
              text="Linkedin">
              <Icon icon="brandico:linkedin-rect" width="24" />
            </Social>
          </Stack>
        </Popup>
      )}
    </>
  );
}

export default About;
