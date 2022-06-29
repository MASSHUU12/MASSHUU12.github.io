import { useTranslation } from "react-i18next";
import { useAppSelector } from "../hooks";
import WorkItem from "../components/WorkItem";

const Work = () => {
  const { t } = useTranslation();

  const work = useAppSelector((state) => state.work.value);

  return (
    <div id="work" className="work-container">
      {work.map((item, index) => {
        return (
          <WorkItem
            key={index}
            labels={item.labels}
            title={item.title}
            description={t(item.description)}
            repo={item.repo}
            mockup={item.mockup}
            site={item.site}
            teamwork={item.teamwork}
          />
        );
      })}
    </div>
  );
};

export default Work;
