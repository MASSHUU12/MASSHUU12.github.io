import { Icon } from "@iconify/react";
import { useState } from "preact/hooks";
import { useTranslation } from "react-i18next";
import { FunctionComponent, JSX } from "preact";
import { animated, useSpring } from "@react-spring/web";

import {
  workBackgroundAnimation,
  workSlideInAnimation,
} from "src/animations/workAnims";
import { backgroundAnim } from "src/animations/commonAnims";

import Social from "common/Social";
import Scroll from "helpers/Scroll";
import ProjectImage from "./ProjectImage";
import { InfoToggleProps } from "src/typing/interfaces";

/**
 * Main component displaying detailed information about the project
 *
 * @param {InfoToggleProps} { item, setToggle }
 * @return {*}  {JSX.Element}
 */
const ProjectInfo: FunctionComponent<InfoToggleProps> = ({
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
    reverse,
  };

  // Animations of the appearance of sections.
  const background = useSpring({
    ...workBackgroundAnimation(reverse, closeAnim),
  });

  const backButton = useSpring({
    ...backgroundAnim,
    reverse,
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
    <div class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20">
      <animated.section
        className="w-full h-full bg-white_custom overflow-scroll px-[15%] max-md:px-[5%]"
        style={background}>
        {/* Back button */}
        <animated.div style={backButton}>
          <Icon
            className="mt-4"
            icon="ic:round-arrow-back-ios-new"
            color="#4a4a4a"
            width="32"
            onClick={() => {
              // Close window.
              setReverse(true);

              Scroll.enable();
            }}
          />
        </animated.div>
        <section class="flex flex-row justify-between max-md:flex-col">
          <div>
            <animated.h1 style={delay400} class="text-plum text-4xl">
              {item.title}
            </animated.h1>
            {item.labels_left && (
              <animated.div style={delay500}>
                {item.labels_left.map((label, index) => {
                  return (
                    <span key={index} class="text-blue_gray font-thin">
                      {t(label)}
                    </span>
                  );
                })}
              </animated.div>
            )}
            {/* Labels */}
            {item.labels && (
              <animated.div style={labels} class="my-4 flex flex-wrap gap-3">
                {item.labels.map((label, index) => {
                  return (
                    <span
                      key={index}
                      class="text-white_custom bg-gray px-2 py-1 rounded">
                      {t(label)}
                    </span>
                  );
                })}
              </animated.div>
            )}
          </div>
          {/* Links */}
          <animated.div style={delay400} class="max-md:mb-4">
            {item.links.map((object, index) => {
              return (
                <Social
                  href={object.link}
                  text={t(object.name)}
                  key={index}
                  classes="text-plum flex items-center no-underline w-fit gap-3">
                  <Icon
                    icon={
                      object.type === "github"
                        ? "akar-icons:github-fill"
                        : "mdi:web"
                    }
                    width="24"
                    color="#1a1920"
                  />
                </Social>
              );
            })}
          </animated.div>
        </section>
        {/* Description section */}
        <div>
          <animated.h3 style={delay400} class="text-2xl">
            Description
          </animated.h3>
          <animated.p style={delay500}>{t(item.description)}</animated.p>
        </div>
        {/* Images */}
        <animated.div
          style={delay700}
          className="my-8 flex flex-wrap gap-4 max-md:justify-center">
          {item.images.map((image, index) => (
            <ProjectImage
              key={index}
              image={image}
              title={item.title}
              classes="h-[50vh] cursor-pointer max-md:h-[auto] max-md:w-[90vw] max-md:mb-4"
            />
          ))}
        </animated.div>
      </animated.section>
    </div>
  );
};

export default ProjectInfo;
