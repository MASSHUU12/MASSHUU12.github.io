import ExperienceSection from "../components/ExperienceSection";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks";

const Experience = () => {
  const { t } = useTranslation();

  const exp = useAppSelector((state) => state.experience.value);

  return (
    <>
      <div id="experience" className="experience-container">
        <ExperienceSection
          icon={exp.frontend.icon}
          title={exp.frontend.title}
          items={exp.frontend.items}
        />
        <ExperienceSection
          icon={exp.backend.icon}
          title={exp.backend.title}
          items={exp.backend.items}
        />
        <ExperienceSection
          icon={exp.other.icon}
          title={t(exp.other.title)}
          items={exp.other.items}
        />
        <ExperienceSection
          icon={exp.tools.icon}
          title={t(exp.tools.title)}
          items={exp.tools.items}
        />
      </div>
      <div className="experience-disclaimer">
        <span>*{t("iDontHave")}</span>
      </div>
    </>
  );
};

export default Experience;
