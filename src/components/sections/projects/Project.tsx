import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

import { workItemAnimation } from "src/animations/workAnims";
import { InfoProps } from "src/interfaces/interfaces";
import ProjectInfo from "./ProjectInfo";

/**
 * Project
 *
 * @param {InfoProps} { item, keyID }
 * @return {*}  {JSX.Element}
 */
const Project: FunctionComponent<InfoProps> = ({
  item,
  keyID,
}: InfoProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [animPlayed, setAnimPlayed] = useState(false);

  const { t } = useTranslation();

  // Item animation.
  const styles = useSpring(workItemAnimation(animPlayed, mouseOver, toggle));

  // Checks whether the observed changes require running an animation.
  const observerCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach(entry => {
      // If item is visible play animation.
      if (entry.isIntersecting) {
        setAnimPlayed(true);
      }
    });
  };

  useEffect(() => {
    // Create observer which will be checking if item is visible.
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.15, // Consider item 'visible' if 15% of it is shown.
    });

    // Look for items.
    observer.observe(document.querySelector(`#w${keyID}`)!);
  }, [keyID, animPlayed]);

  return (
    <>
      <animated.div
        style={styles}
        className="w-[55vw] max-h-[20vw] mb-8 flex flex-row justify-center cursor-pointer p-8 rounded-md max-md:relative max-md:w-[85vw] max-md:h-[45vh] max-md:max-h-[unset] max-md:mb-6 max-md:p-0 max-md:overflow-hidden"
        id={`w${keyID}`}
        onClick={() => {
          // Open window.
          setToggle(!toggle);
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        <div className="w-[60%] flex flex-col justify-center max-md:w-full max-md:bg-[unset] max-md:shadow-lg max-md:pl-6">
          {item.teamwork && (
            <h3 class="text-xs mb-3 text-light_yellow max-md:text-white_custom">
              {t("wTeam")}
            </h3>
          )}
          <h2 class="text-xl mb-4 text-aqua max-md:text-light_yellow">
            {t(item.title)}
          </h2>
          <p class="text-sm p-5 shadow-lg bg-light_yellow text-blue_gray max-md:text-white_custom max-md:bg-[unset] max-md:shadow-none max-md:p-0 max-md:mr-4 font-semibold">
            {t(item.short_desc)}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            {item.labels.map((label, index) => {
              return (
                <span class="text-gray" key={index}>
                  {t(label)}
                </span>
              );
            })}
          </div>
        </div>
        <div class="w-[75%] relative -left-8 -z-10 flex justify-center items-center max-md:absolute max-md:h-full max-md:w-full max-md:left-0 max-md:after:absolute max-md:after:w-full max-md:after:h-full max-md:after:bg-gradient-to-b max-md:after:from-transparent max-md:after:via-black/50 max-md:after:to-zinc-900">
          <img
            class="w-full grayscale shadow-lg duration-300 transition-[filter] hover:grayscale-0 active:grayscale-0 max-md:h-full max-md:w-fit max-md:filter-none"
            src={`/assets/projects/${item.images[0]}`}
            alt={`${item.title}'s project image`}
          />
        </div>
      </animated.div>
      {toggle && <ProjectInfo item={item} setToggle={setToggle} />}
    </>
  );
};

export default Project;
