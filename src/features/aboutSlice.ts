import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    value: false,
    reverse: false,
  },
  reducers: {
    toggleAbout: (
      state,
      action: {
        payload: boolean;
        type: string;
      },
    ): void => {
      state.value = action.payload;
      state.reverse = action.payload ? false : true;
    },
    toggleReverse: (state, action): void => {
      state.reverse = action.payload;
    },
  },
});

export const { toggleAbout, toggleReverse } = aboutSlice.actions;
export default aboutSlice.reducer;
