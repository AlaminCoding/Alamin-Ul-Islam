import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/store/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
