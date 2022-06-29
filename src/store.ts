import { configureStore } from "@reduxjs/toolkit";
import experienceReducer from "./features/experienceSlice";
import informationReducer from "./features/informationSlice";

const store = configureStore({
  reducer: {
    experience: experienceReducer,
    information: informationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
