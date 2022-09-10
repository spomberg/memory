import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface indicesState { value: number[] };

const initialState: indicesState = { value: [] }

export const indicesSlice = createSlice({
  name: 'indices',
  initialState,
  reducers: {
    addIndices: (state, actions) => { state.value = [...state.value, actions.payload] },
    resetIndices: (state) => { state.value = [] }
  },
}); 

export const { addIndices, resetIndices } = indicesSlice.actions;

export const selectIndices = (state: RootState) => state.indices.value;

export default indicesSlice.reducer;