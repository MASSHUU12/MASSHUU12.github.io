import CutItMobile from "./images/cutItMobile.webp";
import CutIt from "./images/cutIt.webp";
import sendNote from "./images/sendNote.webp";
import KolobrzegHotele from "./images/kolobrzegHotele.webp";
import Pralka from "./images/pralka.webp";
import NewLife from "./images/newLife.webp";

export const info = [
  {
    title: "New Life",
    short_description: "w1Short",
    description: "w1Long",
    labels: [
      "Laravel",
      "Express.js",
      "MariaDB",
      "Docker",
      "TypeScript",
      "React Native",
      "Redux",
    ],
    leftLabel: ["wSus", "wShare"],
    image: NewLife,
    links: [],
  },
  {
    title: "Cut.It",
    short_description: "w2Short",
    description: "w2Long",
    labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
    leftLabel: [],
    image: CutIt,
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/Cut.It",
      },
    ],
  },
  {
    title: "Cut.It Mobile",
    short_description: "w3Short",
    description: "w3Long",
    labels: ["React Native", "Laravel API"],
    leftLabel: [],
    image: CutItMobile,
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/Cut.It-mobile",
      },
    ],
  },
  {
    title: "KolobrzegHotele",
    short_description: "w4Short",
    description: "w4Long",
    labels: ["Laravel", "Bing Maps", "Kołobrzeg OpenData", "SCSS"],
    leftLabel: ["wTeam"],
    image: KolobrzegHotele,
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/project-k",
      },
      {
        name: "wSite",
        link: "http://jakubdev.vxm.pl/",
      },
    ],
  },
  {
    title: "SendNote",
    short_description: "w5Short",
    description: "w5Long",
    labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
    leftLabel: [],
    image: sendNote,
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/SendNote",
      },
    ],
  },
  {
    title: "Pralka",
    short_description: "w6Short",
    description: "w6Long",
    labels: ["PHP", "PayPal", "SCSS"],
    leftLabel: ["wTeam"],
    image: Pralka,
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/praktyka-pralka",
      },
    ],
  },
];
