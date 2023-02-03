import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    activateLightTheme: (state) => {
      state.value = true;
    },
    activateDarkTheme: (state) => {
      state.value = false;
    },
  },
});

export const { activateLightTheme, activateDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
