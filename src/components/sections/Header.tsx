import { useSpring, animated, config } from "@react-spring/web";
import { toggleAbout } from "../../features/aboutSlice";
import { toggleCV } from "../../features/cvSlice";
import { useAppDispatch } from "../../app/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

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

  const works = useSpring({
    ...animConfig,
    delay: 300,
  });

  const contact = useSpring({
    ...animConfig,
    delay: 450,
  });

  const cv = useSpring({
    ...animConfig,
    delay: 600,
  });

  return (
    <header id="header">
      <animated.div style={works}>
        <Link to="works" spy smooth rel="noreferrer">
          {t("works")}
        </Link>
      </animated.div>
      <animated.div style={contact}>
        <Link
          to="contact"
          spy
          smooth
          rel="noreferrer"
          onClick={() => dispatch(toggleAbout(true))}
        >
          {t("contact")}
        </Link>
      </animated.div>
      <animated.button style={cv} onClick={() => dispatch(toggleCV(true))}>
        CV
      </animated.button>
    </header>
  );
};

export default Header;
