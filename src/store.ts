import { configureStore } from "@reduxjs/toolkit";
import experienceReducer from "./features/experienceSlice";
import informationReducer from "./features/informationSlice";
import workReducer from "./features/workSlice";
import sideBarReducer from "./features/sideBarSlice";

const store = configureStore({
  reducer: {
    experience: experienceReducer,
    information: informationReducer,
    work: workReducer,
    sidebar: sideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
