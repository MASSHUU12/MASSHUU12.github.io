import { Icon } from "@iconify/react";
import ExperienceItem from "./ExperienceItem";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";
import { useIsVisible } from "react-is-visible";

const ExperienceSection = ({ icon, title, items }) => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  const styles = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 24,
    },
    delay: 75,
  });

  return (
    <animated.div style={styles} ref={nodeRef} className="experience-section">
      <div className="experience-head">
        <Icon icon={icon} width="32" />
        <span>{title}</span>
      </div>
      <div className="experience-body">
        {/* Maps the data provided by Experience.js */}
        {Object.entries(items)?.map(([key, value], index) => {
          return <ExperienceItem key={index} name={key} description={value} />;
        })}
      </div>
    </animated.div>
  );
};

export default ExperienceSection;
