const ExperienceDescription = ({ name, isNotOn }) => {
  return (
    <>
      {/**
       * Maps each element and,
       * depending on the passed state,
       * gives it a class that displays or hides it
       */}
      {name?.map((item, index) => {
        return (
          <div
            className={`experience-item experience-description ${
              !isNotOn && "experience-description-active"
            }`}
            key={index}
          >
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
