import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";

// Bypasses bug with missing types
const reactIsVisible = require("react-is-visible");

const About = () => {
  const { t } = useTranslation();

  const nodeRef = useRef(null);
  const isVisible = reactIsVisible.useIsVisible(nodeRef);

  const styles = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 24,
    },
    delay: 75,
  });

  return (
    <animated.div id="about" className="about-container" style={styles}>
      <div ref={nodeRef} className="about-content">
        <h1>{t("more")}:</h1>
        <p>{t("description")}.</p>
        <p>{t("description2")}.</p>
        <p>{t("description3")}.</p>
        <p>{t("description4")}.</p>
      </div>
    </animated.div>
  );
};

export default About;
