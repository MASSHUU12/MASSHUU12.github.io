import { useSpring, animated, config } from "@react-spring/web";
import { toggleAbout } from "../../features/aboutSlice";
import { toggleCV } from "../../features/cvSlice";
import { useAppDispatch } from "../../app/hooks";
import { useTranslation } from "react-i18next";
import Scroll from "../common/Scroll";

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
        onClick={() => dispatch(toggleAbout(true))}
      >
        {t("aboutMe")}
      </animated.button>
      <animated.div style={works}>
        <Scroll text={t("works")} to="works" />
      </animated.div>
      <animated.button style={cv} onClick={() => dispatch(toggleCV(true))}>
        CV
      </animated.button>
    </header>
  );
};

export default Header;
