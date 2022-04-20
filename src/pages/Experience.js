import React from "react";
import ExperienceSection from "../components/ExperienceSection";

const Experience = () => {
  return (
    <>
      <div id="experience" className="experience-container">
        <ExperienceSection
          icon={"bi:code-slash"}
          title={"Front End"}
          items={{
            "HTML 5": [],
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
      <div className="experience-disclaimer">
        <span>*I don't have much experience with such labeled items</span>
      </div>
    </>
  );
};

export default Experience;
