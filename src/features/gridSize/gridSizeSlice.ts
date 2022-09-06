import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface gridSizeState { value: number };

const initialState: gridSizeState = { value: 16 }

export const gridSizeSlice = createSlice({
  name: 'gridSize',
  initialState,
  reducers: {
    setGridSize: (state, actions) => { state.value = actions.payload }
  },
}); 

export const { setGridSize } = gridSizeSlice.actions;

export const selectGridSize = (state: RootState) => state.gridSize.value;

export default gridSizeSlice.reducer;