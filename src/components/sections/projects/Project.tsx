import Social from "@/components/common/Social";
import { createImagePath } from "@/helpers/Helpers";
import { InfoProps } from "@/typing/interfaces";
import { Icon } from "@iconify/react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  keyframes,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useTranslation } from "react-i18next";

function Project({ item, keyID }: InfoProps): JSX.Element {
  const [componentSeen, setComponentSeen] = useState(false);
  const { t } = useTranslation();
  const fadein = keyframes({
    "0%": {
      transform: "translateY(75px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0px)",
      opacity: 1,
    },
  });

  const observerCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setComponentSeen(true);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Consider item visible if 15% of it is shown.
    });

    const selector = document.querySelector(`#w${keyID}`);
    if (selector === null) return;

    observer.observe(selector);
  }, [keyID, componentSeen]);

  return (
    <Accordion
      id={`w${keyID}`}
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        boxShadow: "none",
        transform: "translateY(75px)",
        opacity: 0,
        animation: componentSeen ? `${fadein} 1000ms` : undefined,
        animationFillMode: "forwards",
        transition: "scale 0.2s ease-in-out",
        "&:hover": {
          scale: 1.01,
        },
        // Remove ExpansionPanel
        "&:before": {
          display: "none",
        },
      }}>
      <AccordionSummary aria-controls={`${item.title} content`}>
        <Stack gap={1} width="100%">
          {item.teamwork && (
            <Typography variant="body2" color="lightYellow">
              {t("wTeam")}
            </Typography>
          )}
          <Typography variant="h5" color="primary.contrastText">
            {t(item.title)}
          </Typography>
          <Typography
            variant="body1"
            color="primary.main"
            bgcolor="lightYellow.main"
            sx={{ p: 1 }}>
            {t(item.short_desc)}
          </Typography>
          <Stack direction="row" gap={1}>
            {item.labels.map((label, index) => (
              <Typography variant="subtitle2" color="gray" key={index}>
                {t(label)}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <Paper
            elevation={4}
            sx={{
              maxWidth: { sx: "100%", md: "50%" },
              backgroundColor: "transparent",
            }}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={createImagePath(item.images[0])}
              loading="lazy"
              alt={`${item.title}'s project image`}
            />
          </Paper>
          <Stack gap={1}>
            {item.links.map((object, index) => (
              <Social href={object.link} text={t(object.name)} key={index}>
                <Icon
                  icon={
                    object.type === "github"
                      ? "akar-icons:github-fill"
                      : "mdi:web"
                  }
                  width="24"
                />
              </Social>
            ))}
          </Stack>
        </Stack>
        <Typography
          variant="body1"
          color="primary.contrastText"
          sx={{
            mt: 2,
          }}>
          {t(item.description)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Project;
