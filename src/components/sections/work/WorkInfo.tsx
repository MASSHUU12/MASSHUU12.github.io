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

  // Common animation config
  const slideInConfig = {
    to: {
      y: 0,
      opacity: 1,
    },
    from: {
      y: 100,
      opacity: 0,
    },
    reset: true,
    reverse: reverse,
  };

  // Animations of the appearance of sections.
  const background = useSpring({
    to: { y: 0 },
    from: { y: window.innerHeight },
    reset: true,
    reverse: reverse,
    onRest: closeAnim,
  });

  const element = useSpring({
    to: {
      scaleX: 1,
      opacity: 1,
    },
    from: {
      scaleX: 0,
      opacity: 0,
    },
    reset: true,
    reverse: reverse,
    delay: 250,
  });

  const backButton = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    reset: true,
    reverse: reverse,
    delay: 500,
  });

  // Delay 500
  const delay500 = useSpring({
    ...slideInConfig,
    delay: 500,
  });

  // Delay 600
  const delay600 = useSpring({
    ...slideInConfig,
    delay: 600,
  });

  // Delay 700
  const labels = useSpring({
    ...slideInConfig,
    delay: 700,
  });

  return (
    // Although it seems that this div is unnecessary,
    // it is unfortunately required.
    // Its presence nullifies errors with the animation and display of the element.
    <div className="work-info">
      <animated.section className="work-info-container" style={background}>
        <animated.div className="work-info-element" style={element}>
          {/* Back button */}
          <animated.div style={backButton}>
            <Icon
              className="work-info-container-back"
              icon="ic:round-arrow-back-ios-new"
              color="#4a4a4a"
              width="48"
              onClick={() => {
                // Close window.
                setReverse(true);

                // Remove class from body to prevent from scrolling page.
                document.querySelector("body")!.className = "";
              }}
            />
          </animated.div>
          {/* Basic info section */}
          <section>
            <div className="work-info-details">
              <animated.h1 style={delay500}>{item.title}</animated.h1>
              {item.leftLabel ? (
                <animated.div style={delay600}>
                  {item.leftLabel.map((label, index) => {
                    return <span key={index}>{t(label)}</span>;
                  })}
                </animated.div>
              ) : (
                ""
              )}
              {/* Labels */}
              {item.labels ? (
                <animated.div style={labels} className="work-info-labels">
                  {item.labels.map((label, index) => {
                    return <span key={index}>{t(label)}</span>;
                  })}
                </animated.div>
              ) : (
                ""
              )}
            </div>
            {/* Links */}
            <animated.div style={delay500} className="work-info-details-links">
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
            </animated.div>
          </section>
          {/* Description section */}
          <div className="work-info-desc">
            <animated.h3 style={delay500}>Description</animated.h3>
            <animated.p style={delay600}>{t(item.description)}</animated.p>
          </div>
        </animated.div>
      </animated.section>
    </div>
  );
};

export default WorkInfo;
