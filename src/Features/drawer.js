import { createSlice } from "@reduxjs/toolkit";

export const DrawerSlice = createSlice({
  name: "drawerSlice",
  initialState: {
    value: false,
  },
  reducers: {
    openedDrawer: (state) => {
      state.value = !state.value;
    },
  },
});

export const { openedDrawer } = DrawerSlice.actions;

export default DrawerSlice.reducer;
