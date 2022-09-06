import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface gridState { value: number };

const initialState: gridState = { value: 16 }

export const gridSlice = createSlice({
  name: 'grid',
  initialState,
  reducers: {
    setGrid: (state, actions) => { state.value = actions.payload }
  },
}); 

export const { setGrid } = gridSlice.actions;

export const selectGrid = (state: RootState) => state.state.value;

export default gridSlice.reducer;