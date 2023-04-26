import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";

import Scroll from "helpers/Scroll";
import { mobileMenuAnimation } from "src/animations/mobileMenuAnims";
import { usePopupsStore } from "src/app/store";

/**
 * Component with link for MobileMenu component
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenuLinks: FunctionComponent<any> = (): JSX.Element => {
  const toggle = usePopupsStore(state => state.toggle);
  const toggleMobile = usePopupsStore(state => state.mobileMenu);
  const toggleMobileMenuReverse = usePopupsStore(
    state => state.toggleMobileMenuReverse,
  );

  const { t } = useTranslation();

  const closeMenu = (): void => {
    toggleMobileMenuReverse(true);
    Scroll.enable();
  };

  const animConfig = {
    ...mobileMenuAnimation,
    reverse: toggleMobile.reverse,
  };

  const about = useSpring({
    ...animConfig,
    delay: 200,
  });

  const works = useSpring({
    ...animConfig,
    delay: 300,
  });

  const cv = useSpring({
    ...animConfig,
    delay: 400,
  });

  return (
    <>
      {/* Close button */}
      <div class="absolute top-4 right-4">
        <Icon
          onClick={() => closeMenu()}
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
          closeMenu();
          toggle("aboutOpened");
        }}>
        {t("hAbout")}
      </animated.button>
      {/* Works link */}
      <animated.button
        style={works}
        class="text-3xl text-white_custom"
        onClick={(e: MouseEvent) => Scroll.intoView({ target: "#works" })}>
        {t("hWorks")}
      </animated.button>
      {/* CV link */}
      <animated.button
        style={cv}
        class="text-3xl text-white_custom"
        onClick={() => {
          closeMenu();
          toggle("cvOpened");
        }}>
        CV
      </animated.button>
    </>
  );
};

export default MobileMenuLinks;
