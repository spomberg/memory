import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface matchedState { value: number[] };

const initialState: matchedState = { value: [] }

export const matchedSlice = createSlice({
  name: 'matched',
  initialState,
  reducers: {
    addMatchedTiles: (state, actions) => { state.value = [...state.value, actions.payload] },
    resetMatchedTiles: (state) => { state.value = [] }
  },
}); 

export const { addMatchedTiles, resetMatchedTiles } = matchedSlice.actions;

export const selectMatched = (state: RootState) => state.matched.value;

export default matchedSlice.reducer;