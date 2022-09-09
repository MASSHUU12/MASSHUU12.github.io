import { useState, useEffect } from "react";
import WorkInfo from "./WorkInfo";
import { useTranslation } from "react-i18next";
import { InfoProps } from "../../../interfaces/interfaces";
import { useSpring, animated } from "@react-spring/web";

const Work = ({ item, keyID }: InfoProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const { t } = useTranslation();
  const [animPlayed, setAnimPlayed] = useState(false);

  // Item animation.
  const styles = useSpring({
    opacity: animPlayed ? 1 : 0,
    y: animPlayed ? 0 : 100,
    scale: mouseOver ? 1.1 : 1,
    reset: true,
  });

  // Checks whether the observed changes require running an animation.
  const observerCallback = (entries: IntersectionObserverEntry[]): void => {
    entries.forEach((entry) => {
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
        onClick={() => setToggle(!toggle)}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <h2>{t(item.title)}</h2>
        <p>{t(item.short_description)}</p>
        <div className="works-section-labels">
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
