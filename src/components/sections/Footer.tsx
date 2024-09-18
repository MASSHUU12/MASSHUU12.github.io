import Flag from "@/components/common/Flag";
import Social from "@/components/common/Social";
import { Icon } from "@iconify/react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { JSX } from "preact";

function Footer(): JSX.Element {
  return (
    <Box component="footer" sx={{ pb: 1 }}>
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 3, md: 0 }}>
        <Stack direction="column" gap={2}>
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
      <Divider sx={{ marginY: 1 }} aria-hidden="true" />
      <Typography variant="subtitle1" color="primary.contrastText">
        Maciej Gawrysiak
      </Typography>
    </Box>
  );
}

export default Footer;
