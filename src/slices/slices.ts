import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
};

const slices = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMainModal: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setMainModal } = slices.actions;
export const mainReducer = slices.reducer;
