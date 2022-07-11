import CutItMobile from "./images/cutItMobile.webp";
import CutIt from "./images/cutIt.webp";
import sendNote from "./images/sendNote.webp";
import KolobrzegHotele from "./images/kolobrzegHotele.webp";
import Pralka from "./images/pralka.webp";
import NewLife from "./images/newLife.webp";

export const info = [
  {
    title: "New Life",
    short_description: "newLife",
    description: "newLifeDesc",
    labels: [
      "Laravel API",
      "MariaDB",
      "Docker",
      "React Native",
      "TypeScript",
      "Python",
      "Redux",
    ],
    teamwork: false,
    wip: true,
    github: "",
    website: "",
    image: NewLife,
  },
  {
    title: "Cut.It",
    short_description: "linkShortener",
    description: "cutItDesc",
    labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
    teamwork: false,
    wip: false,
    github: "https://github.com/MASSHUU12/Cut.It",
    website: "",
    image: CutIt,
  },
  {
    title: "Cut.It Mobile",
    short_description: "mobileLinkShortener",
    description: "cutItMobileDesc",
    labels: ["React Native", "Laravel API"],
    teamwork: false,
    wip: false,
    github: "https://github.com/MASSHUU12/Cut.It-mobile",
    website: "",
    image: CutItMobile,
  },
  {
    title: "KolobrzegHotele",
    short_description: "searchEngine",
    description: "kolobrzegHoteleDesc",
    labels: ["Laravel", "Bing Maps", "Kołobrzeg OpenData", "SCSS"],
    teamwork: true,
    wip: false,
    github: "https://github.com/MASSHUU12/project-k",
    website: "http://jakubdev.vxm.pl/",
    image: KolobrzegHotele,
  },
  {
    title: "SendNote",
    short_description: "secureSharing",
    description: "sendNoteDesc",
    labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
    teamwork: false,
    wip: false,
    github: "https://github.com/MASSHUU12/SendNote",
    website: "",
    image: sendNote,
  },
  {
    title: "Pralka",
    short_description: "secondHandStore",
    description: "pralkaDesc",
    labels: ["PHP", "PayPal", "SCSS"],
    teamwork: true,
    wip: false,
    github: "https://github.com/MASSHUU12/praktyka-pralka",
    website: "",
    image: Pralka,
  },
];
