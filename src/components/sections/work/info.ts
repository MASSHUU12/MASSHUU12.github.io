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
      "Laravel",
      "Express.js",
      "MariaDB",
      "Docker",
      "TypeScript",
      "React Native",
      "Redux",
    ],
    leftLabel: ["suspended", "shareSourceCode"],
    image: NewLife,
    links: [],
  },
  {
    title: "Cut.It",
    short_description: "linkShortener",
    description: "cutItDesc",
    labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
    leftLabel: [],
    image: CutIt,
    links: [
      {
        name: "sourceCode",
        link: "https://github.com/MASSHUU12/Cut.It",
      },
    ],
  },
  {
    title: "Cut.It Mobile",
    short_description: "mobileLinkShortener",
    description: "cutItMobileDesc",
    labels: ["React Native", "Laravel API"],
    leftLabel: [],
    image: CutItMobile,
    links: [
      {
        name: "sourceCode",
        link: "https://github.com/MASSHUU12/Cut.It-mobile",
      },
    ],
  },
  {
    title: "KolobrzegHotele",
    short_description: "searchEngine",
    description: "kolobrzegHoteleDesc",
    labels: ["Laravel", "Bing Maps", "Kołobrzeg OpenData", "SCSS"],
    leftLabel: ["teamwork"],
    image: KolobrzegHotele,
    links: [
      {
        name: "sourceCode",
        link: "https://github.com/MASSHUU12/project-k",
      },
      {
        name: "website",
        link: "http://jakubdev.vxm.pl/",
      },
    ],
  },
  {
    title: "SendNote",
    short_description: "secureSharing",
    description: "sendNoteDesc",
    labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
    leftLabel: [],
    image: sendNote,
    links: [
      {
        name: "sourceCode",
        link: "https://github.com/MASSHUU12/SendNote",
      },
    ],
  },
  {
    title: "Pralka",
    short_description: "secondHandStore",
    description: "pralkaDesc",
    labels: ["PHP", "PayPal", "SCSS"],
    leftLabel: ["teamwork"],
    image: Pralka,
    links: [
      {
        name: "sourceCode",
        link: "https://github.com/MASSHUU12/praktyka-pralka",
      },
    ],
  },
];
