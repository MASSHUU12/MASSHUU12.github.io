import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";

// Bypasses bug with missing types
const reactIsVisible = require("react-is-visible");

const email = "gawrysiak.maciej@pm.com";
const telegram = "t.me/MASSHUU";

const Contact = () => {
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
    <animated.div
      style={styles}
      ref={nodeRef}
      id="contact"
      className="contact-container"
    >
      <div className="contact-content">
        <h1>{t("contact")}:</h1>
        <p>
          <Icon icon="akar-icons:envelope" width="32" />
          <a href={`mailto:${email}`} rel="noreferrer">
            {email}
          </a>
        </p>
        <p>
          <Icon icon="bx:bxl-telegram" width="32" />
          <a href={`https:${telegram}`} target="_blank" rel="noreferrer">
            {telegram}
          </a>
        </p>
        <p>
          <Icon icon="akar-icons:github-fill" width="32" />
          <a
            href="https://github.com/MASSHUU12"
            target="_blank"
            rel="noreferrer"
          >
            MASSHUU12
          </a>
        </p>
        <p>
          <Icon icon="brandico:linkedin-rect" width="32" />
          <a
            href="https://linkedin.com/in/maciej-gawrysiak"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </animated.div>
  );
};

export default Contact;
