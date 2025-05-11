import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../slices/noteSlice.js";

const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

export default store;
