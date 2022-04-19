import React from "react";
import { Icon } from "@iconify/react";
import ExperienceItem from "./ExperienceItem";
import ExperienceDescription from "./ExperienceDescription";

const ExperienceSection = ({ icon, title, items }) => {
  return (
    <div className="experience-section">
      <div className="experience-head">
        <Icon icon={icon} width="32" />
        <span>{title}</span>
      </div>
      <div className="experience-body">
        {Object.entries(items)?.map(([key, value], index) => {
          return <ExperienceItem key={index} name={key} description={value} />;
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
