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
  });
  const background = useSpring({
    to: { y: 0 },
    from: { y: window.innerHeight },
    reset: true,
    reverse: reverse,
    onRest: closeAnim,
  });

  return (
    // Although it seems that this div is unnecessary,
    // it is unfortunately required.
    // Its presence nullifies errors with the animation and display of the element.
    <div className="work-info">
      <animated.section className="work-info-container" style={background}>
        {/* Back button */}
        <Icon
          className="work-info-container-back"
          icon="ic:round-arrow-back-ios-new"
          color="white"
          width="64"
          onClick={() => setReverse(true)}
        />
        <div className="work-info-element">
          {/* Basic info section */}
          <section>
            <div className="work-info-details">
              <h1>{item.title}</h1>
              {item.leftLabel ? (
                <div>
                  {item.leftLabel.map((label, index) => {
                    return <span key={index}>{t(label)}</span>;
                  })}
                </div>
              ) : (
                ""
              )}
              {/* Labels */}
              {item.labels ? (
                <div className="work-info-labels">
                  {item.labels.map((label, index) => {
                    return <span key={index}>{t(label)}</span>;
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            {/* Links */}
            <div className="work-info-details-links">
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
                    color="#1a1920"
                    key={index}
                  />
                );
              })}
            </div>
          </section>
          {/* Description section */}
          <div className="work-info-desc">
            <h3>Description</h3>
            <p>{t(item.description)}</p>
          </div>
        </div>
      </animated.section>
    </div>
  );
};

export default WorkInfo;
