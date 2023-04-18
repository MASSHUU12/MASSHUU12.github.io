import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

import { mobileMenuAnimation } from "src/animations/mobileMenuAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

import { toggleAbout } from "features/aboutSlice";
import { toggleCV } from "features/cvSlice";
import { toggleMobileMenuReverse } from "features/mobileMenuSlice";
import Scroll from "@masshuu/scroll-utilities";

/**
 * Component with link for MobileMenu component
 *
 * @return {*}  {JSX.Element}
 */
const MobileMenuLinks: FunctionComponent<any> = (): JSX.Element => {
  const toggle = useAppSelector(state => state.mobileMenu);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const closeMenu = (): void => {
    dispatch(toggleMobileMenuReverse(true));
    Scroll.enable();
  };

  const animConfig = {
    ...mobileMenuAnimation,
    reverse: toggle.reverse,
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
          dispatch(toggleAbout(true));
          Scroll.disable();
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
          dispatch(toggleCV(true));
          Scroll.disable();
        }}>
        CV
      </animated.button>
    </>
  );
};

export default MobileMenuLinks;
