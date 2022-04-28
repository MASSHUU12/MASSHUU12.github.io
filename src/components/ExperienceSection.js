import { Icon } from "@iconify/react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection = ({ icon, title, items }) => {
  return (
    <div className="experience-section">
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
    </div>
  );
};

export default ExperienceSection;
