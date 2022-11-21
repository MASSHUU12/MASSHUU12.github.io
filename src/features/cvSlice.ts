import { createSlice } from "@reduxjs/toolkit";

export const cvSlice = createSlice({
  name: "cv",
  initialState: {
    value: false,
    reverse: false,
  },
  reducers: {
    toggleCV: (
      state,
      action: {
        payload: boolean;
        type: string;
      },
    ): void => {
      state.value = action.payload;
      state.reverse = action.payload ? false : true;
    },
    toggleCVReverse: (state, action): void => {
      state.reverse = action.payload;
    },
  },
});

export const { toggleCV, toggleCVReverse } = cvSlice.actions;
export default cvSlice.reducer;
