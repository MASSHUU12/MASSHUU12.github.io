import { useState } from "react";
import Button from "../../common/Button";
import WorkInfo from "./WorkInfo";
import { useTranslation } from "react-i18next";
import { InfoProps } from "../../../interfaces/interfaces";

const Work = ({ item }: InfoProps): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="works-section">
        <img loading="lazy" src={item.image} alt={t(item.title)} />
        <div className="works-section-content">
          <h2>{t(item.title)}</h2>
          <p>{t(item.short_description)}</p>
          <Button text={t("more")} action={() => setToggle(!toggle)} />
        </div>
      </div>
      {toggle && <WorkInfo item={item} setToggle={setToggle} />}
    </>
  );
};

export default Work;
