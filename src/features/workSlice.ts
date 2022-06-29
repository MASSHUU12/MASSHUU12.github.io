import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import CutIt from "../img/cutit-mockup.webp";
import Pralka from "../img/pralka-mockup.webp";
import SendNote from "../img/sendnote-mockup.webp";
import CutItMobile from "../img/cutit-mobile-mockup.webp";
import KolobrzegHotele from "../img/kolobrzeghotele-mockup.webp";

const initialState = {
  value: [
    {
      labels: ["React Native", "Laravel API"],
      title: "Cut.It Mobile",
      description: "cutItMobileDesc",
      repo: "https://github.com/MASSHUU12/Cut.It-mobile",
      mockup: CutItMobile,
      site: "",
      teamwork: false,
    },
    {
      labels: ["Laravel", "MariaDB", "jQuery", "SCSS"],
      title: "Cut.It",
      description: "cutItDesc",
      repo: "https://github.com/MASSHUU12/Cut.It",
      mockup: CutIt,
      site: "",
      teamwork: false,
    },
    {
      labels: ["Laravel", "jQuery", "MariaDB", "SCSS"],
      title: "SendNote",
      description: "sendNoteDesc",
      repo: "https://github.com/MASSHUU12/SendNote",
      mockup: SendNote,
      site: "",
      teamwork: false,
    },
    {
      labels: ["Laravel", "Bing Maps API", "Kołobrzeg OpenData", "SCSS"],
      title: "KolobrzegHotele",
      description: "kolobrzegHoteleDesc",
      repo: "https://github.com/MASSHUU12/project-k",
      mockup: KolobrzegHotele,
      site: "http://jakubdev.vxm.pl",
      teamwork: true,
    },
    {
      labels: ["PHP", "PayPal", "SCSS"],
      title: "Pralka",
      description: "pralkaDesc",
      repo: "https://github.com/MASSHUU12/praktyka-pralka",
      mockup: Pralka,
      site: "",
      teamwork: true,
    },
  ],
};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {},
});

// export const {  } = informationSlice.actions;

export const selectWork = (state: RootState) => state.work.value;

export default workSlice.reducer;
