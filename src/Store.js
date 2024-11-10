import { configureStore } from "@reduxjs/toolkit";
import drawerSlice from "./Features/drawer";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice,
  },
});
