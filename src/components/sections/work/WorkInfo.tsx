import { Icon } from "@iconify/react";
import { animated, useSpring } from "@react-spring/web";
import { backgroundAnim } from "animations/commonAnims";
import {
  workBackgroundAnimation,
  workSlideInAnimation,
} from "animations/workAnims";
import Social from "components/common/Social";
import { InfoToggleProps } from "interfaces/interfaces";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { scroll } from "utils/preventScroll";
import WorkImage from "./WorkImage";

/**
 * Main component displaying detailed information about the project
 *
 * @param {InfoToggleProps} { item, setToggle }
 * @return {*}  {JSX.Element}
 */
const WorkInfo: React.FunctionComponent<InfoToggleProps> = ({
  item,
  setToggle,
}: InfoToggleProps): JSX.Element => {
  const [reverse, setReverse] = useState(false);
  const { t } = useTranslation();

  const closeAnim = () => {
    reverse && setToggle(false);
  };

  // Common animation config
  const slideInConfig = {
    ...workSlideInAnimation,
    reverse: reverse,
  };

  // Animations of the appearance of sections.
  const background = useSpring({
    ...workBackgroundAnimation(reverse, closeAnim),
  });

  const backButton = useSpring({
    ...backgroundAnim,
    reverse: reverse,
    delay: 400,
  });

  // Delay 400
  const delay400 = useSpring({
    ...slideInConfig,
    delay: 400,
  });

  // Delay 500
  const delay500 = useSpring({
    ...slideInConfig,
    delay: 500,
  });

  // Delay 600
  const labels = useSpring({
    ...slideInConfig,
    delay: 600,
  });

  // Delay 700
  const delay700 = useSpring({
    ...slideInConfig,
    delay: 700,
  });

  return (
    // Although it seems that this div is unnecessary,
    // it is unfortunately required.
    // Its presence nullifies errors with the animation and display of the element.
    <div className="work-info">
      <animated.section className="work-info-container" style={background}>
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

              scroll.enable();
            }}
          />
        </animated.div>
        <section className="work-info-details-container">
          <div className="work-info-details">
            <animated.h1 style={delay400}>{item.title}</animated.h1>
            {item.leftLabel ? (
              <animated.div style={delay500}>
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
          <animated.div style={delay400} className="work-info-links">
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
          <animated.h3 style={delay400}>Description</animated.h3>
          <animated.p style={delay500}>{t(item.description)}</animated.p>
        </div>
        {/* Images */}
        <animated.div style={delay700} className="work-info-images">
          {item.images.map((image, index) => (
            <WorkImage key={index} image={image} title={item.title} />
          ))}
        </animated.div>
      </animated.section>
    </div>
  );
};

export default WorkInfo;
