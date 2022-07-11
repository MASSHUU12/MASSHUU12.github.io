import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const About = ({ setToggle }: Props): JSX.Element => {
  const [reverse, setReverse] = useState(false);
  const { t } = useTranslation();

  const closeAnim = () => {
    reverse && setToggle(false);
  };

  const left = useSpring({
    to: { y: 0 },
    from: { y: -window.innerHeight * 0.75 },
    reset: true,
    reverse: reverse,
  });
  const right = useSpring({
    to: { y: 0 },
    from: { y: window.innerHeight * 0.75 },
    reset: true,
    reverse: reverse,
    onRest: closeAnim,
  });
  const background = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: reverse,
  });

  return (
    <animated.section
      style={background}
      className="common-container"
      onClick={() => setReverse(!reverse)}
    >
      <animated.div className="common-left" style={left}>
        <h1>{t("aboutMe")}.</h1>
        <span>{t("title")}</span>
        <p>
          {t("iAm")} <strong>{t("title")}</strong>. {t("weird")} {t("notOnly")}{" "}
          <strong>{t("solving")}</strong> {t("problems")}
          <strong>{t("finding")}</strong> {t("solutions")} {t("whenImNot")}{" "}
          <strong>{t("code")}</strong>, {t("playingWith")}{" "}
          <strong>{t("cat")}</strong>.
        </p>
      </animated.div>
      <animated.div className="common-right" style={right}>
        <div className="common-right-header">
          <h1>{t("contact")}.</h1>
          <Icon
            onClick={() => setReverse(!reverse)}
            icon="carbon:close"
            color="white"
            width="48"
            height="48"
          />
        </div>
        <div className="common-right-links">
          <a
            href="mailto:gawrysiak.maciej@pm.com"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="ic:outline-alternate-email"
              color="white"
              width="32"
              height="32"
            />
            <span>gawrysiak.maciej@pm.me</span>
          </a>
          <a
            href="https://github.com/MASSHUU12"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="brandico:github" color="white" width="32" height="32" />
            <span>MASSHUU12</span>
          </a>
          <a href="https://t.me/MASSHUU" target="_blank" rel="noreferrer">
            <Icon
              icon="akar-icons:telegram-fill"
              color="white"
              width="32"
              height="32"
            />
            <span>MASSHUU</span>
          </a>
          <a
            href="https://linkedin.com/in/maciej-gawrysiak"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="brandico:linkedin-rect"
              color="white"
              width="32"
              height="32"
            />
            <span>Linkedin</span>
          </a>
        </div>
      </animated.div>
    </animated.section>
  );
};

export default About;
