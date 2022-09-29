import CutItMobile from "./images/cutItMobile.webp";
import CutIt from "./images/cutIt.webp";
import KolobrzegHotele from "./images/kolobrzegHotele.webp";
import Pralka from "./images/pralka.webp";
import NewLife from "./images/newLife.webp";

import BookAppMain from "./images/bookapp_main.webp";
import BookAppSearch from "./images/bookapp_search.webp";

export const info = [
  {
    title: "Bookapp (WIP)",
    short_description: "w5Short",
    description: "w5Long",
    labels: ["React Native", "TypeScript", "SQLite", "Redux"],
    leftLabel: ["wTeam"],
    images: [BookAppMain, BookAppSearch],
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/bookapp",
      },
    ],
  },
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
    images: [NewLife],
    links: [],
  },
  {
    title: "Cut.It",
    short_description: "w2Short",
    description: "w2Long",
    labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
    leftLabel: [],
    images: [CutIt],
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
    images: [CutItMobile],
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
    images: [KolobrzegHotele],
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
    title: "Pralka",
    short_description: "w6Short",
    description: "w6Long",
    labels: ["PHP", "PayPal", "SCSS"],
    leftLabel: ["wTeam"],
    images: [Pralka],
    links: [
      {
        name: "wSource",
        link: "https://github.com/MASSHUU12/praktyka-pralka",
      },
    ],
  },
];
