import { slideToLeftAnim } from "@/animations/slideToLeftAnim";
import { usePopupsStore } from "@/app/store";
import TransitionButton from "@/components/common/TransitionButton";
import Scroll from "@/helpers/Scroll";
import { Stack } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { JSX } from "preact";
import { useTranslation } from "react-i18next";

function Main(): JSX.Element {
  const { t } = useTranslation();
  const togglePopups = usePopupsStore(state => state.toggle);

  const nameAnimation = useSpring({
    ...slideToLeftAnim,
    delay: 300,
  });

  const titleAnimation = useSpring({
    ...slideToLeftAnim,
    delay: 450,
  });

  const AnimatedH1 = animated.h1 as any;
  const AnimatedSpan = animated.span as any;

  return (
    <>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
        sx={{ height: "100svh" }}>
        <AnimatedH1
          style={nameAnimation}
          class="text-4xl md:text-5xl text-white_custom md:text-center">
          {t("meHello")}
          <span class="text-light_yellow"> Maciej Gawrysiak</span>.
        </AnimatedH1>
        <AnimatedSpan
          style={titleAnimation}
          class="text-xl md:text-2xl text-gray">
          {t("meTitle")}
        </AnimatedSpan>
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
            action={() => window.open("/assets/gawrysiak_cv.pdf", "_blank")}
            delay={400}
          />
        </Stack>
      </Stack>
    </>
  );
}

export default Main;
