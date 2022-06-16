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
            HTML: [],
            CSS: ["SCSS"],
            JavaScript: ["React", "React Native", "TypeScript", "jQuery"],
          }}
        />
        <ExperienceSection
          icon={"bi:file-earmark-code"}
          title={"Back End"}
          items={{
            PHP: ["Laravel", "Composer"],
            "Node.js*": ["NPM"],
          }}
        />
        <ExperienceSection
          icon={"carbon:screen"}
          title={t("other")}
          items={{
            Python: [],
            "C++*": [],
          }}
        />
        <ExperienceSection
          icon={"fluent:window-dev-tools-24-regular"}
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
