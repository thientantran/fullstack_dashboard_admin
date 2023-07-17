import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  mode: "dark",
};

export const globalSlice = createSlice({
  name: "global",
  initalState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

const globalSliceReducer = globalSlice.reducer;
export default globalSliceReducer;
