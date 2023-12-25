import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlices from "./authSlices";

const store = configureStore({
  reducer: {
    auth: authSlices,
  },
});

export default store;
