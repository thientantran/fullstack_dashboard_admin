import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239c72c000187",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  // chú ý tên phải đúng
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

const globalSliceReducer = globalSlice.reducer;
export default globalSliceReducer;
