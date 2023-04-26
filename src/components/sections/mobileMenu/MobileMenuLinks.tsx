import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "helpers/Scroll";
import { usePopupsStore } from "src/app/store";
import { mobileMenuAnimation } from "src/animations/mobileMenuAnims";

/**
 * Component with link for MobileMenu component.
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenuLinks: FunctionComponent<any> = (): JSX.Element => {
  const toggle = usePopupsStore(state => state.toggle);
  const { t } = useTranslation();

  const about = useSpring({
    ...mobileMenuAnimation,
    delay: 200,
  });

  const works = useSpring({
    ...mobileMenuAnimation,
    delay: 300,
  });

  const cv = useSpring({
    ...mobileMenuAnimation,
    delay: 400,
  });

  return (
    <>
      {/* Close button */}
      <div class="absolute top-4 right-4">
        <Icon
          onClick={() => toggle("mobileMenuOpened")}
          icon="carbon:close"
          color="white"
          width="64"
        />
      </div>
      {/* About link */}
      <animated.button
        style={about}
        class="text-3xl text-white_custom"
        onClick={() => {
          toggle("mobileMenuOpened");
          toggle("aboutOpened");
        }}>
        {t("hAbout")}
      </animated.button>
      {/* Works link */}
      <animated.button
        style={works}
        class="text-3xl text-white_custom"
        onClick={(e: MouseEvent) => {
          toggle("mobileMenuOpened");
          Scroll.intoView({ target: "#works" });
        }}>
        {t("hWorks")}
      </animated.button>
      {/* CV link */}
      <animated.button
        style={cv}
        class="text-3xl text-white_custom"
        onClick={() => {
          toggle("mobileMenuOpened");
          toggle("cvOpened");
        }}>
        CV
      </animated.button>
    </>
  );
};

export default MobileMenuLinks;
