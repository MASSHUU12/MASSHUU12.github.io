import { useTranslation } from "react-i18next";

const WorkItem = ({
  labels,
  title,
  description,
  repo,
  mockup,
  site = false,
  teamwork = false,
}) => {
  const { t } = useTranslation();

  return (
    <div className="work-section">
      <div className="work-section-left">
        <div className="work-section-left-text">
          {/** If the page was created in a group, the following information is displayed */}
          {teamwork === false ? null : <span>{t("teamwork")}</span>}
          <div className="work-section-left-labels">
            {/* Maps passed labels */}
            {labels.map((item, index) => {
              return (
                <span key={index} className="work-section-left-label">
                  {item}
                </span>
              );
            })}
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="work-section-left-buttons">
          <a className="work-btn" href={repo} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {/* If the website is hosted, its link is shown */}
          {site === false ? null : (
            <a
              className="work-btn"
              href={site}
              target="_blank"
              rel="noreferrer"
            >
              {t("visitSite")}
            </a>
          )}
        </div>
      </div>
      <div className="work-section-right">
        <img src={mockup} alt={title} />
      </div>
    </div>
  );
};

export default WorkItem;
