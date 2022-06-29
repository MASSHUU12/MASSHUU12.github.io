import { useTranslation } from "react-i18next";
import { animated, useSpring } from "@react-spring/web";
import { Key, useRef } from "react";

// Bypasses bug with missing types
const reactIsVisible = require("react-is-visible");

interface Props {
  labels: Array<string>;
  title: string;
  description: string;
  repo: string;
  mockup: string;
  site?: string;
  teamwork?: boolean;
}

const WorkItem = ({
  labels,
  title,
  description,
  repo,
  mockup,
  site = "false",
  teamwork = false,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  const nodeRef = useRef(null);
  const isVisible = reactIsVisible.useIsVisible(nodeRef);

  const styles = useSpring({
    to: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 24,
    },
    delay: 75,
  });

  return (
    <animated.div style={styles} ref={nodeRef} className="work-section">
      <div className="work-section-left">
        <div className="work-section-left-text">
          {/** If the page was created in a group, the following information is displayed */}
          {teamwork && <span>{t("teamwork")}</span>}
          <div className="work-section-left-labels">
            {/* Maps passed labels */}
            {labels.map((item: string, index: Key) => {
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
          {/* If the project is hosted, its link is shown */}
          {site != "" && (
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
    </animated.div>
  );
};

export default WorkItem;
