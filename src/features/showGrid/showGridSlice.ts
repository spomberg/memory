import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface ShowGridState { value: boolean };

const initialState: ShowGridState = { value: false }

export const showGridSlice = createSlice({
  name: 'showGrid',
  initialState,
  reducers: {
    showGrid: (state) => { state.value = true },
    hideGrid: (state) => { state.value = false }
  },
}); 

export const { showGrid, hideGrid } = showGridSlice.actions;

export const selectGridStart = (state: RootState) => state.showGrid.value;

export default showGridSlice.reducer;