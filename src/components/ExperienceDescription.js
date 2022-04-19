import React from "react";

const ExperienceDescription = ({ name }) => {
  return (
    <>
      {name?.map((item, index) => {
        return (
          <div className="experience-description experience-item" key={index}>
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
