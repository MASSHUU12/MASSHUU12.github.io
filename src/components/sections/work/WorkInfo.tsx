import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoToggleProps } from "../../../interfaces/interfaces";

const WorkInfo = ({ item, setToggle }: InfoToggleProps): JSX.Element => {
  const [reverse, setReverse] = useState(false);
  const { t } = useTranslation();

  const closeAnim = () => {
    reverse && setToggle(false);
  };

  const left = useSpring({
    to: { x: 0 },
    from: { x: -window.innerWidth * 0.5 },
    reset: true,
    reverse: reverse,
  });
  const right = useSpring({
    to: { x: 0 },
    from: { x: window.innerWidth * 0.5 },
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
      onClick={() => setReverse(true)}
    >
      <animated.div className="common-left" style={left}>
        <h1>{item.title}.</h1>
        <div className="common-left-labels">
          {item.leftLabel && <span>{t(item.leftLabel)}</span>}
        </div>
        <p>{t(item.description)}</p>
      </animated.div>
      <animated.div className="common-right" style={right}>
        <div className="common-right-header">
          <h1>{t("details")}.</h1>
          <Icon
            onClick={() => setReverse(true)}
            icon="carbon:close"
            color="white"
            width="48"
            height="48"
          />
        </div>
        <div className="common-right-labels">
          {item.labels.map((label, index) => {
            return (
              <span key={index} className="common-right-label">
                {label}
              </span>
            );
          })}
        </div>
        <div className="common-right-links">
          {item.github && (
            <a href={item.github} target="_blank" rel="noreferrer">
              <Icon icon="mdi:web" color="white" width="32" />
              <span>{t("sourceCode")}</span>
            </a>
          )}
          {item.website && (
            <a href={item.website} target="_blank" rel="noreferrer">
              <Icon icon="mdi:web" color="white" width="32" />
              <span>{t("website")}</span>
            </a>
          )}
        </div>
      </animated.div>
    </animated.section>
  );
};

export default WorkInfo;
