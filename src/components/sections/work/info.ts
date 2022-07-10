import CutItMobile from "./images/cutItMobile.webp";
import CutIt from "./images/cutIt.webp";
import sendNote from "./images/sendNote.webp";
import KolobrzegHotele from "./images/kolobrzegHotele.webp";
import Pralka from "./images/pralka.webp";

export const info = [
  {
    title: "Cut.It",
    short_description: "Link shortener.",
    description: "A simple link shortener available in English and Polish.",
    labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
    teamwork: false,
    github: "https://github.com/MASSHUU12/Cut.It",
    website: "",
    image: CutIt,
  },
  {
    title: "Cut.It Mobile",
    short_description: "Mobile link shortener.",
    description:
      "A mobile application that shortens links, using the Cut.It API.",
    labels: ["React Native", "Laravel API"],
    teamwork: false,
    github: "https://github.com/MASSHUU12/Cut.It-mobile",
    website: "",
    image: CutItMobile,
  },
  {
    title: "SendNote",
    short_description: "Secure note sharing.",
    description:
      "SendNote is a service that allows you to share confidential information quickly and securely.",
    labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
    teamwork: false,
    github: "https://github.com/MASSHUU12/SendNote",
    website: "",
    image: sendNote,
  },
  {
    title: "KolobrzegHotele",
    short_description: "Kolobrzeg accommodation search engine.",
    description:
      "Accommodation search engine in Kolobrzeg based on user preferences (the city has disabled the API on which the site's core functionality was based).",
    labels: ["Laravel", "Bing Maps API", "Kołobrzeg OpenData", "SCSS"],
    teamwork: true,
    github: "https://github.com/MASSHUU12/project-k",
    website: "http://jakubdev.vxm.pl/",
    image: KolobrzegHotele,
  },
  {
    title: "Pralka",
    short_description: "Second-hand appliance store.",
    description:
      "A fully functional online store created during an internship at technical college.",
    labels: ["PHP", "PayPal", "SCSS"],
    teamwork: true,
    github: "https://github.com/MASSHUU12/praktyka-pralka",
    website: "",
    image: Pralka,
  },
];
