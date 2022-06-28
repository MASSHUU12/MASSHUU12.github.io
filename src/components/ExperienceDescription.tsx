import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

interface Props {
  name: Array<string>;
  isNotOn: boolean;
}

const ExperienceDescription = ({ name, isNotOn }: Props): JSX.Element => {
  return (
    <>
      {/**
       * Maps each element and,
       * depending on the passed state,
       * gives it a class that displays or hides it
       */}
      {name?.map(
        (
          item:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined,
          index: Key | null | undefined
        ) => {
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
        }
      )}
    </>
  );
};

export default ExperienceDescription;
