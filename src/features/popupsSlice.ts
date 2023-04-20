import { createSlice } from "@reduxjs/toolkit";

export const popupsSlice = createSlice({
  name: "popups",
  initialState: {
    value: {
      aboutOpened: false,
    },
  },
  reducers: {
    toggle: (state, action: { payload: "aboutOpened" }): void => {
      state.value[action.payload] = !state.value[action.payload];
    },
  },
});

export const { toggle } = popupsSlice.actions;
export default popupsSlice.reducer;
