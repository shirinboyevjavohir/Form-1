import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "../slices/slices";

export const store = configureStore({
  reducer: {
    mainModal: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
