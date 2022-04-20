import React from "react";
import CutIt from "../img/cutit-mockup.webp";
import Pralka from "../img/pralka-mockup.webp";
import WorkItem from "../components/WorkItem";
import SendNote from "../img/sendnote-mockup.webp";
import CutItMobile from "../img/cutit-mobile-mockup.webp";
import KolobrzegHotele from "../img/kolobrzeghotele-mockup.webp";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <div id="work" className="work-container">
      <WorkItem
        labels={["React Native", "Laravel API"]}
        title={"Cut.It Mobile"}
        description={t("cutItMobileDesc")}
        repo={"https://github.com/MASSHUU12/Cut.It-mobile"}
        mockup={CutItMobile}
      />
      <WorkItem
        labels={["Laravel", "MariaDB", "jQuery", "SCSS"]}
        title={"Cut.It"}
        description={t("cutItDesc")}
        repo={"https://github.com/MASSHUU12/Cut.It"}
        mockup={CutIt}
      />
      <WorkItem
        labels={["Laravel", "jQuery", "MariaDB", "SCSS"]}
        title={"SendNote"}
        description={t("sendNoteDesc")}
        repo={"https://github.com/MASSHUU12/SendNote"}
        mockup={SendNote}
      />
      <WorkItem
        labels={["Laravel", "Bing Maps API", "Kołobrzeg OpenData", "SCSS"]}
        title={"KolobrzegHotele"}
        description={t("kolobrzegHoteleDesc")}
        repo={"https://github.com/MASSHUU12/project-k"}
        mockup={KolobrzegHotele}
        site={"http://jakubdev.vxm.pl"}
        teamwork={true}
      />
      <WorkItem
        labels={["Pure PHP", "PayPal Integration", "SCSS"]}
        title={"Pralka"}
        description={t("pralkaDesc")}
        repo={"https://github.com/MASSHUU12/praktyka-pralka"}
        mockup={Pralka}
        teamwork={true}
      />
    </div>
  );
};

export default Work;
