import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleAbout } from "../../../features/aboutSlice";
import { toggleCV } from "../../../features/cvSlice";
import {
  toggleMobileMenu,
  toggleMobileMenuReverse,
} from "../../../features/mobileMenuSlice";
import { scroll } from "../../../utils/preventScroll";
import Scroll from "../../common/Scroll";

const MobileMenu = (): JSX.Element => {
  const toggle = useAppSelector((state) => state.mobileMenu);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const closeAnim = (): void => {
    toggle.reverse && dispatch(toggleMobileMenu(false));
  };

  const closeMenu = (): void => {
    // Close menu.
    dispatch(toggleMobileMenuReverse(true));

    // Enable page scrolling.
    scroll.enable();
  };

  const animConfig = {
    to: {
      opacity: 1,
      y: 0,
    },
    from: {
      opacity: 0,
      y: 100,
    },
    reset: true,
    reverse: toggle.reverse,
  };

  const bgconfig = {
    to: {
      x: 0,
    },
    from: {
      x: window.innerWidth,
    },
    reset: true,
    reverse: toggle.reverse,
  };

  const bg = useSpring({
    ...bgconfig,
    onRest: closeAnim,
  });

  const bg2 = useSpring({
    ...bgconfig,
    delay: 150,
  });

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
      {toggle.value && (
        <animated.section style={bg} className="mobile-menu-bg">
          <animated.div style={bg2} className="mobile-menu-content">
            <Icon
              onClick={() => closeMenu()}
              icon="carbon:close"
              color="white"
              width="48"
              height="48"
            />
            <animated.button
              style={about}
              onClick={() => {
                // Close menu.
                closeMenu();

                dispatch(toggleAbout(true));
              }}
            >
              {t("hAbout")}
            </animated.button>
            <animated.div style={works} onClick={() => closeMenu()}>
              <Scroll text={t("hWorks")} to="works" />
            </animated.div>
            <animated.button
              style={cv}
              onClick={() => {
                // Close menu.
                closeMenu();

                dispatch(toggleCV(true));
              }}
            >
              CV
            </animated.button>
          </animated.div>
        </animated.section>
      )}
    </>
  );
};

export default MobileMenu;
