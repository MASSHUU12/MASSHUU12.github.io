import { Icon } from "@iconify/react";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoToggleProps } from "../../../interfaces/interfaces";
import Social from "../../common/Social";

const WorkInfo = ({ item, setToggle }: InfoToggleProps): JSX.Element => {
  const [reverse, setReverse] = useState(false);
  const { t } = useTranslation();

  const closeAnim = () => {
    reverse && setToggle(false);
  };

  // Animation of the appearance of sections with details.
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
          {item.leftLabel.map((label, index) => {
            return <span key={index}>{t(label)}</span>;
          })}
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
          {/* Label display. */}
          {item.labels.map((label, index) => {
            return (
              <span key={index} className="common-right-label">
                {label}
              </span>
            );
          })}
        </div>
        <div className="common-right-links">
          {/* Link display. */}
          {item.links.map((object, index) => {
            return (
              <Social
                href={object.link}
                text={t(object.name)}
                icon={
                  object.name === "sourceCode"
                    ? "akar-icons:github-fill"
                    : "mdi:web"
                }
                key={index}
              />
            );
          })}
        </div>
      </animated.div>
    </animated.section>
  );
};

export default WorkInfo;
