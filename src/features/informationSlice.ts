import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  value: [
    {
      link: "mailto:gawrysiak.maciej@pm.com",
      title: "gawrysiak.maciej@pm.com",
      icon: "akar-icons:envelope",
    },
    {
      link: "https://t.me/MASSHUU",
      title: "t.me/MASSHUU",
      icon: "bx:bxl-telegram",
    },
    {
      link: "https://github.com/MASSHUU12",
      title: "MASSHUU12",
      icon: "akar-icons:github-fill",
    },
    {
      link: "https://linkedin.com/in/maciej-gawrysiak",
      title: "LinkedIn",
      icon: "brandico:linkedin-rect",
    },
  ],
};

export const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {},
});

// export const {  } = informationSlice.actions;

export const selectInformation = (state: RootState) => state.information.value;

export default informationSlice.reducer;
