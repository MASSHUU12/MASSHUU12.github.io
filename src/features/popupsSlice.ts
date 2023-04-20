import { createSlice } from "@reduxjs/toolkit";
import { popups } from "src/types";

export const popupsSlice = createSlice({
  name: "popups",
  initialState: {
    aboutOpened: false,
    cvOpened: false,
  },
  reducers: {
    toggle: (state, action: { payload: popups }): void => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { toggle } = popupsSlice.actions;
export default popupsSlice.reducer;
