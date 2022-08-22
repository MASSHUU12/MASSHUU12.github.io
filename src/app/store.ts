import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "../features/aboutSlice";
import cvReducer from "../features/cvSlice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    cv: cvReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
