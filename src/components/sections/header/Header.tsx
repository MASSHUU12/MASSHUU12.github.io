import { useSpring, animated, config } from "@react-spring/web";
import { toggleAbout } from "../../../features/aboutSlice";
import { toggleCV } from "../../../features/cvSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useTranslation } from "react-i18next";
import Scroll from "../../common/Scroll";
import { Icon } from "@iconify/react";
import { toggleMobileMenu } from "../../../features/mobileMenuSlice";
import { scroll } from "../../../utils/preventScroll";

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const animConfig = {
    to: {
      opacity: 1,
      y: 0,
    },
    from: {
      opacity: 0,
      y: 100,
    },
    config: config.slow,
  };

  const about = useSpring({
    ...animConfig,
    delay: 300,
  });

  const works = useSpring({
    ...animConfig,
    delay: 450,
  });

  const cv = useSpring({
    ...animConfig,
    delay: 600,
  });

  return (
    <header id="header">
      <animated.button
        style={about}
        onClick={() => {
          // Open menu
          dispatch(toggleAbout(true));

          // Prevent page from scrolling.
          scroll.disable();
        }}
      >
        {t("aboutMe")}
      </animated.button>
      <animated.div style={works}>
        <Scroll text={t("works")} to="works" />
      </animated.div>
      <animated.button style={cv} onClick={() => dispatch(toggleCV(true))}>
        CV
      </animated.button>
      <Icon
        icon="charm:menu-hamburger"
        color="white"
        width="48"
        onClick={() => {
          // Open menu.
          dispatch(toggleMobileMenu(true));

          // Prevent page from scrolling.
          scroll.disable();
        }}
      />
    </header>
  );
};

export default Header;
