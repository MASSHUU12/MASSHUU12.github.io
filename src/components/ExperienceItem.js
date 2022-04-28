import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ExperienceDescription from "./ExperienceDescription";

const ExperienceItem = ({ name, description }) => {
  const [arrowStyle, setArrowStyle] = useState("");
  const [isNotOn, setIsNotOn] = useState(true);

  const toggleDescription = () => {
    setIsNotOn(!isNotOn);

    isNotOn ? setArrowStyle("experience-btn-flip") : setArrowStyle("");
  };

  return (
    <>
      {description.length > 0 ? (
        <>
          <div className="experience-item">
            <div className="experience-item-title">
              <span>{name}</span>
            </div>
            <div className="experience-btn" onClick={toggleDescription}>
              <Icon
                className={arrowStyle}
                icon="dashicons:arrow-down-alt2"
                width="32"
              />
            </div>
          </div>
          <ExperienceDescription name={description} isNotOn={isNotOn} />
        </>
      ) : (
        <div className="experience-item">
          <div className="experience-item-title" style={{ padding: "5px" }}>
            <span>{name}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceItem;
