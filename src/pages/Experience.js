import React from "react";
import ExperienceSection from "../components/ExperienceSection";

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <ExperienceSection
          icon={"bi:code-slash"}
          title={"Front End"}
          items={{
            HTML: [],
            CSS: ["SCSS"],
            JavaScript: ["React*", "jQuery", "Vue.js*"],
          }}
        />
        <ExperienceSection
          icon={"bi:code-slash"}
          title={"Back End"}
          items={{
            PHP: ["Laravel", "Composer"],
            "Node.js*": ["NPM", "React Native*"],
            JavaScript: ["React", "jQuery", "Vue.js*"],
          }}
        />
        <ExperienceSection
          icon={"bi:code-slash"}
          title={"Other"}
          items={{
            Python: [],
            "C++": [],
          }}
        />
        <ExperienceSection
          icon={"bi:code-slash"}
          title={"Tools"}
          items={{
            GitHub: [],
            "GitHub Desktop": [],
            Photoshop: [],
            Figma: [],
            Blender: [],
            "DaVinci Resolve": [],
          }}
        />
      </div>
      <span className="experience-disclaimer">
        *I don't have much experience with such labeled items
      </span>
    </>
  );
};

export default Experience;
