import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "preact";

import { mobileMenuAnimation } from "src/animations/mobileMenuAnims";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

import { toggleAbout } from "features/aboutSlice";
import { toggleCV } from "features/cvSlice";
import { toggleMobileMenuReverse } from "features/mobileMenuSlice";

import { scroll } from "utils/preventScroll";
import { scrollIntoView } from "utils/scrollIntoView";

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
    // Close menu.
    dispatch(toggleMobileMenuReverse(true));

    // Enable page scrolling.
    scroll.enable();
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
      <Icon
        onClick={() => closeMenu()}
        icon="carbon:close"
        color="white"
        width="48"
        height="48"
      />
      {/* About link */}
      <animated.button
        style={about}
        onClick={() => {
          // Close menu.
          closeMenu();

          dispatch(toggleAbout(true));
        }}>
        {t("hAbout")}
      </animated.button>
      {/* Works link */}
      <animated.button
        style={works}
        onClick={(e: MouseEvent) => scrollIntoView({ e: e, to: "works" })}>
        {t("hWorks")}
      </animated.button>
      {/* CV link */}
      <animated.button
        style={cv}
        onClick={() => {
          // Close menu.
          closeMenu();

          dispatch(toggleCV(true));
        }}>
        CV
      </animated.button>
    </>
  );
};

export default MobileMenuLinks;
