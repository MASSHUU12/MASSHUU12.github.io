import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

import { aboutLeftAnim } from "src/animations/aboutAnims";
import { useAppSelector } from "src/app/hooks";

/**
 * Left part of about component
 *
 * @return {*}  {JSX.Element}
 */
const AboutLeft: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.about);
  const { t } = useTranslation();

  // Component animation
  const anim = useSpring({
    ...aboutLeftAnim,
    reverse: toggle.reverse,
  });

  return (
    <animated.div
      class="bg-white_custom p-3 flex-1 md:min-h-[30%] md:max-w-[30%] md:p-12"
      style={anim}>
      <h1 class="text-3xl text-plum">{t("hAbout")}.</h1>
      <span class="text-sm text-blue_gray italic">{t("meTitle")}</span>
      <p>{t("meDescription")}</p>
    </animated.div>
  );
};

export default AboutLeft;
