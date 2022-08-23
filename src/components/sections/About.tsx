import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleAbout, toggleReverse } from "../../features/aboutSlice";
import Social from "../common/Social";

const About = (): JSX.Element => {
  const toggle = useAppSelector((state) => state.about);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const closeAnim = () => {
    toggle.reverse && dispatch(toggleAbout(false));
  };

  const left = useSpring({
    to: { y: 0 },
    from: { y: -window.innerHeight * 0.75 },
    reset: true,
    reverse: toggle.reverse,
  });
  const right = useSpring({
    to: { y: 0 },
    from: { y: window.innerHeight * 0.75 },
    reset: true,
    reverse: toggle.reverse,
    onRest: closeAnim,
  });
  const background = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: toggle.reverse,
  });

  return (
    <>
      {toggle.value && (
        <animated.section
          style={background}
          className="common-container"
          onClick={() => dispatch(toggleReverse(true))}
        >
          <animated.div className="common-left" style={left}>
            <h1>{t("aboutMe")}.</h1>
            <span>{t("title")}</span>
            <p>
              {t("iAm")} <strong>{t("title")}</strong>. {t("weird")}{" "}
              {t("notOnly")} <strong>{t("solving")}</strong> {t("problems")}
              <strong>{t("finding")}</strong> {t("solutions")} {t("whenImNot")}{" "}
              <strong>{t("code")}</strong>, {t("playingWith")}{" "}
              <strong>{t("cat")}</strong>.
            </p>
          </animated.div>
          <animated.div className="common-right" style={right}>
            <div className="common-right-header">
              <h1>{t("contact")}.</h1>
              <Icon
                onClick={() => dispatch(toggleReverse(true))}
                icon="carbon:close"
                color="white"
                width="48"
                height="48"
              />
            </div>
            <div className="common-right-links">
              <Social
                href="mailto:gawrysiak.maciej@pm.com"
                text="gawrysiak.maciej@pm.me"
                icon="ic:outline-alternate-email"
              />
              <Social
                href="https://github.com/MASSHUU12"
                text="MASSHUU12"
                icon="brandico:github"
              />
              <Social
                href="https://t.me/MASSHUU"
                text="MASSHUU"
                icon="akar-icons:telegram-fill"
              />
              <Social
                href="https://linkedin.com/in/maciej-gawrysiak"
                text="Linkedin"
                icon="brandico:linkedin-rect"
              />
            </div>
          </animated.div>
        </animated.section>
      )}
    </>
  );
};

export default About;
