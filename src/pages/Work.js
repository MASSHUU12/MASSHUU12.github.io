import React from "react";
import Pralka from "../img/pralka-mockup.png";
import WorkItem from "../components/WorkItem";
import SendNote from "../img/sendnote-mockup.png";
import CutItMobile from "../img/cutit-mobile-mockup.png";
import KolobrzegHotele from "../img/kolobrzeghotele-mockup.png";
const Work = () => {
  return (
    <div className="basic-layout work-container">
      <WorkItem
        labels={["React Native", "Laravel API"]}
        title={"Cut.It Mobile"}
        description={
          "A mobile application that shortens links, using the Cut.It API."
        }
        repo={"https://github.com/MASSHUU12/Cut.It-mobile"}
        mockup={CutItMobile}
      />
      <WorkItem
        labels={["Laravel", "jQuery", "MariaDB"]}
        title={"SendNote"}
        description={
          "SendNote is a free online service that lets you share sensitive information quickly and securely."
        }
        repo={"https://github.com/MASSHUU12/SendNote"}
        mockup={SendNote}
      />
      <WorkItem
        labels={["Laravel", "Bing Maps API", "Kołobrzeg OpenData"]}
        title={"KolobrzegHotele"}
        description={
          "Search engine for accommodation in Kolobrzeg. Based on user preferences such as distance from the sea or from playgrounds."
        }
        repo={"https://github.com/MASSHUU12/project-k"}
        mockup={KolobrzegHotele}
        site={"http://jakubdev.vxm.pl"}
        teamwork={true}
      />
      <WorkItem
        labels={["Pure PHP", "PayPal Integration"]}
        title={"Pralka"}
        description={
          "A fully functional online store created during an internship at technical college."
        }
        repo={"https://github.com/MASSHUU12/praktyka-pralka"}
        mockup={Pralka}
        teamwork={true}
      />
    </div>
  );
};

export default Work;
