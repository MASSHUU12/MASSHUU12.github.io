import { configureStore } from "@reduxjs/toolkit";
import experienceReducer from "./features/experience/experienceSlice";

const store = configureStore({
  reducer: {
    experience: experienceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
