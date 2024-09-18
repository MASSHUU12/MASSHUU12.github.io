import { usePopupsStore } from "@/app/store";
import TransitionButton from "@/components/common/TransitionButton";
import Scroll from "@/helpers/Scroll";
import { keyframes, Stack, SxProps, Theme, Typography } from "@mui/material";
import { JSX } from "preact";
import { useTranslation } from "react-i18next";

function Main(): JSX.Element {
  const { t } = useTranslation();
  const togglePopups = usePopupsStore(state => state.toggle);

  const slideToLeftAnimation = keyframes({
    "0%": {
      transform: "translateX(100px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0px)",
      opacity: 1,
    },
  });

  const setupAnimation = (delay: number): SxProps<Theme> => {
    return {
      transform: "translateY(100px)",
      opacity: 0,
      animation: `${slideToLeftAnimation} 750ms`,
      animationDelay: `${delay}ms`,
      animationFillMode: "forwards",
    };
  };

  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={1}
        sx={{ height: "100svh" }}>
        <Typography
          variant="h3"
          component="h1"
          color="primary.contrastText"
          sx={setupAnimation(300)}>
          {t("meHello")}
          <Typography variant="h3" component="span" color="lightYellow">
            {" "}
            Maciej Gawrysiak
          </Typography>
          .
        </Typography>
        <Typography variant="h6" color="gray" sx={setupAnimation(450)}>
          {t("meTitle")}
        </Typography>
        <Stack direction="row" gap={3}>
          <TransitionButton
            text={t("hAbout")}
            action={() => togglePopups("about")}
            delay={100}
          />
          <TransitionButton
            text={t("hWorks")}
            action={() => Scroll.intoView({ target: "#works" })}
            delay={250}
          />
          <TransitionButton
            text="CV"
            action={() =>
              window.open(
                "https://drive.proton.me/urls/3JCRFVVAEG#PUR7N5brZpv3",
                "_blank",
              )
            }
            delay={400}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Main;
