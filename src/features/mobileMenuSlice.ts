import { createSlice } from "@reduxjs/toolkit";

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    value: false,
    reverse: false,
  },
  reducers: {
    toggleMobileMenu: (
      state,
      action: {
        payload: boolean;
        type: string;
      },
    ): void => {
      state.value = action.payload;
      state.reverse = action.payload ? false : true;
    },
    toggleMobileMenuReverse: (state, action): void => {
      state.reverse = action.payload;
    },
  },
});

export const { toggleMobileMenu, toggleMobileMenuReverse } =
  mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
