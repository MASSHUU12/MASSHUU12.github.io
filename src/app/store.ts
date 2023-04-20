import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "../features/mobileMenuSlice";
import popupsReducer from "../features/popupsSlice";

const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
    popups: popupsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
