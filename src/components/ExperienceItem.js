import React from "react";
import { Icon } from "@iconify/react";

const ExperienceItem = ({ name, description }) => {
  return (
    <div className="experience-item">
      <div className="experience-item-title">
        <span>{name}</span>
      </div>
      <div className="experience-btn">
        <Icon icon="dashicons:arrow-down-alt2" width="32" />
      </div>
      {/* // <div className="experience-item-title" style={{ padding: "5px" }}>
        //   <span>{name}</span>
        // </div> */}
    </div>
  );
};

export default ExperienceItem;
