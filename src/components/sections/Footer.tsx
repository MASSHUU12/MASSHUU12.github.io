import Flag from "@/components/common/Flag";
import Social from "@/components/common/Social";
import { Icon } from "@iconify/react";
import { Stack, Typography } from "@mui/material";
import { JSX } from "preact";

function Footer(): JSX.Element {
  return (
    <footer class="pb-4">
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 3, md: 0 }}>
        <Stack direction="column" gap={3}>
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
        </Stack>
        <Stack direction="row" alignItems="flex-end" gap={2}>
          <Flag flag="twemoji:flag-for-flag-poland" locale="pl" />
          <Flag flag="twemoji:flag-for-flag-united-states" locale="en" />
        </Stack>
      </Stack>
      <hr class="my-4 text-dim" />
      <Typography variant="subtitle1" color="primary.contrastText">
        Maciej Gawrysiak
      </Typography>
    </footer>
  );
}

export default Footer;
