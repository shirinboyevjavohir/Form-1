import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  activeStep: 1,
};

const slices = createSlice({
  name: "main",
  initialState,
  reducers: {
    setMainModal: (state, action) => {
      state.visible = action.payload;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
  },
});

export const { setMainModal, setActiveStep } = slices.actions;
export const mainReducer = slices.reducer;
