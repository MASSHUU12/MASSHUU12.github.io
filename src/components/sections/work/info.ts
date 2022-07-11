import CutItMobile from "./images/cutItMobile.webp";
import CutIt from "./images/cutIt.webp";
import sendNote from "./images/sendNote.webp";
import KolobrzegHotele from "./images/kolobrzegHotele.webp";
import Pralka from "./images/pralka.webp";

export const info = [
  {
    title: "Cut.It",
    short_description: "Link shortener.",
    description:
      "A simple link shortener without any weird features, ads, etc. Allows you to generate a QR code for your site. Unused links are removed from the database after a certain period of time.",
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
      "Like the web version, it allows for link shortening, and QR code generation. The application requires the web version to function, as it uses its API.",
    labels: ["React Native", "Laravel API"],
    teamwork: false,
    github: "https://github.com/MASSHUU12/Cut.It-mobile",
    website: "",
    image: CutItMobile,
  },
  {
    title: "KolobrzegHotele",
    short_description: "Kolobrzeg accommodation search engine.",
    description:
      "KolobrzegHotels is a search engine for accommodation in this city. The site was created for a competition, but unfortunately the city turned off the API that the site used, so most of the features no longer work. Accommodations were searched based on several categories and how important they were to the user. E.g., if proximity to the beach was most important to someone, and the rest was irrelevant, the proposed accommodations were as close to the beach as possible.",
    labels: ["Laravel", "Bing Maps API", "Kołobrzeg OpenData", "SCSS"],
    teamwork: true,
    github: "https://github.com/MASSHUU12/project-k",
    website: "http://jakubdev.vxm.pl/",
    image: KolobrzegHotele,
  },
  {
    title: "SendNote",
    short_description: "Secure note sharing.",
    description:
      "SendNote is a service that allows you to share confidential information quickly and securely. Allows you to protect a note with a password, set the rules under which it is to be deleted, such as after the maximum number of views, or the date (rules can be combined).",
    labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
    teamwork: false,
    github: "https://github.com/MASSHUU12/SendNote",
    website: "",
    image: sendNote,
  },
  {
    title: "Pralka",
    short_description: "Second-hand appliance store.",
    description:
      "This website was created for a vocational training at a technical school and shows a store with used household appliances. Users can add listings, and buy items thanks to PayPal integration.",
    labels: ["PHP", "PayPal", "SCSS"],
    teamwork: true,
    github: "https://github.com/MASSHUU12/praktyka-pralka",
    website: "",
    image: Pralka,
  },
];
