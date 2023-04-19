import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

import { slideToLeftAnim } from "src/animations/slideToLeftAnim";
import { useAppDispatch } from "src/app/hooks";
import Btn from "common/Btn";

import { toggleAbout } from "features/aboutSlice";
import { toggleCV } from "features/cvSlice";

import Scroll from "helpers/Scroll";

/**
 * Main section
 *
 * @return {*}  {JSX.Element}
 */
const Main: FunctionComponent<any> = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // Name animation
  const name = useSpring({
    ...slideToLeftAnim,
    delay: 300,
  });

  // Title animation
  const title = useSpring({
    ...slideToLeftAnim,
    delay: 450,
  });

  return (
    <section class="flex flex-col gap-3 justify-center items-center h-screen">
      <animated.h1 style={name} class="text-4xl md:text-5xl text-white_custom">
        {t("meHello")}
        <span class="text-light_yellow">Maciej Gawrysiak</span>.
      </animated.h1>
      <animated.span style={title} class="text-2xl text-white_custom">
        {t("meTitle")}
      </animated.span>
      <div class="hidden md:flex md:flex-wrap">
        <Btn
          text={t("hAbout")}
          action={() => {
            dispatch(toggleAbout(true));
            // scroll.disable();
            Scroll.disable();
          }}
          delay={100}
        />
        <Btn
          text={t("hWorks")}
          action={e => {
            Scroll.intoView({ target: "#works" });
          }}
          delay={250}
        />
        <Btn
          text="CV"
          action={() => {
            dispatch(toggleCV(true));
            Scroll.disable();
          }}
          delay={400}
        />
      </div>
    </section>
  );
};

export default Main;
