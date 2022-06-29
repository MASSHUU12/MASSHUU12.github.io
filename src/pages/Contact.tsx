import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";
import { useAppSelector } from "../hooks";

// Bypasses bug with missing types
const reactIsVisible = require("react-is-visible");

const Contact = () => {
  const info = useAppSelector((state) => state.information.value);

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
        {info.map((item, index) => {
          return (
            <p key={index}>
              <Icon icon={item.icon} width="32" />
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </p>
          );
        })}
      </div>
    </animated.div>
  );
};

export default Contact;
