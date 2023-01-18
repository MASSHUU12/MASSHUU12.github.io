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
    <animated.div className="about-left" style={anim}>
      <h1>{t("hAbout")}.</h1>
      <span>{t("meTitle")}</span>
      <p>{t("meDescription")}</p>
    </animated.div>
  );
};

export default AboutLeft;
