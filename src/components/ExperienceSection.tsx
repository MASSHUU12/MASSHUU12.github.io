import { Icon } from "@iconify/react";
import ExperienceItem from "./ExperienceItem";
import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";

// Bypasses bug with missing types
const reactIsVisible = require("react-is-visible");

interface Props {
  icon: string;
  title: string;
  items: Record<string, Array<string | never>>;
}

const ExperienceSection = ({ icon, title, items }: Props): JSX.Element => {
  const nodeRef = useRef(null);
  const isVisible = reactIsVisible.useIsVisible(nodeRef);

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
