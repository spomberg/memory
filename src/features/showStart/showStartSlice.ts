import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface ShowStartState { value: boolean };

const initialState: ShowStartState = { value: true }

export const showStartSlice = createSlice({
  name: 'showStart',
  initialState,
  reducers: {
    showStart: (state) => { state.value = true },
    hideStart: (state) => { state.value = false }
  },
}); 

export const { showStart, hideStart } = showStartSlice.actions;

export const selectShowStart = (state: RootState) => state.showStart.value;

export default showStartSlice.reducer;