import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  value: [
    {
      to: "header",
      name: "Home",
    },
    {
      to: "about",
      name: "about",
    },
    {
      to: "contact",
      name: "contact",
    },
    {
      to: "experience",
      name: "experience",
    },
    {
      to: "work",
      name: "work",
    },
  ],
};

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {},
});

// export const {  } = informationSlice.actions;

export const selectSideBar = (state: RootState) => state.sidebar.value;

export default sideBarSlice.reducer;
