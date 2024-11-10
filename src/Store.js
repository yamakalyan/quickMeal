import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./features/drawer";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
  },
});
