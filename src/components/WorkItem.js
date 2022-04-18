import React from "react";

const WorkItem = ({
  labels,
  title,
  description,
  repo,
  mockup,
  site = false,
  teamwork = false,
}) => {
  return (
    <div className="work-section">
      <div className="work-section-left">
        <div className="work-section-left-text">
          {teamwork === false ? null : <span>Teamwork</span>}
          <div className="work-section-left-labels">
            {labels.map((item, index) => {
              return <span className="work-section-left-label">{item}</span>;
            })}
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="work-section-left-buttons">
          <button className="button-main button-main-alt">
            <a href={repo} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </button>
          {site === false ? null : (
            <button className="button-main button-main-alt">
              <a href={site} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </button>
          )}
        </div>
      </div>
      <div className="work-section-right mobile-mockup">
        <img src={mockup} alt={title} />
      </div>
    </div>
  );
};

export default WorkItem;
