import React from "react";

const ExperienceDescription = ({ name, isNotOn }) => {
  return (
    <>
      {name?.map((item, index) => {
        return (
          <div
            className={`experience-item experience-description ${
              !isNotOn && "experience-description-active"
            }`}
            key={index}
          >
            {/* <div className="experience-description experience-item" key={index}> */}
            <div className="experience-item-title">
              <span>{item}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExperienceDescription;
