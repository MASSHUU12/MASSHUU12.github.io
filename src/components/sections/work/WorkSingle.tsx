import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

import { workItemAnimation } from "animations/workAnims";
import { InfoProps } from "interfaces/interfaces";
import WorkInfo from "./WorkInfo";

/**
 * Work item
 *
 * @param {InfoProps} { item, keyID }
 * @return {*}  {JSX.Element}
 */
const Work: FunctionComponent<InfoProps> = ({ item, keyID }): JSX.Element => {
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
        className="works-section"
        id={`w${keyID}`}
        onClick={() => {
          // Open window.
          setToggle(!toggle);

          // Give class to body to prevent from scrolling page.
          document.querySelector("body")!.className = "disable-scroll";
        }}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}>
        <h2>{t(item.title)}</h2>
        <p>{t(item.short_description)}</p>
        <div class="works-section-labels">
          {item.labels.map((label, index) => {
            return <span key={index}>{t(label)}</span>;
          })}
        </div>
      </animated.div>
      {toggle && <WorkInfo item={item} setToggle={setToggle} />}
    </>
  );
};

export default Work;
