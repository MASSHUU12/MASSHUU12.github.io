import React from "react";
import ExperienceSection from "../components/ExperienceSection";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

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
          title={t("other")}
          items={{
            Python: [],
            "C++": [],
          }}
        />
        <ExperienceSection
          icon={"bi:code-slash"}
          title={t("tools")}
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
        <span>*{t("iDontHave")}</span>
      </div>
    </>
  );
};

export default Experience;
