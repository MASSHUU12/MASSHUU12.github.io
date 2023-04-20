import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../features/aboutSlice";
import cvReducer from "../features/cvSlice";
import mobileMenuReducer from "../features/mobileMenuSlice";
import popupsReducer from "../features/popupsSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    cv: cvReducer,
    mobileMenu: mobileMenuReducer,
    popups: popupsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
