import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface gridState { value: [] };

const initialState: gridState = { value: [] };

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setGrid: (state, actions) => { state.value = actions.payload }
  }
}); 

export const { setGrid } = gridSlice.actions;

export const selectGrid = (state: RootState) => state.grid.value;

export default gridSlice.reducer;