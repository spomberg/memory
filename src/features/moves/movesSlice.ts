import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface movesState { value: number };

const initialState: movesState = { value: 0 }

export const movesSlice = createSlice({
  name: 'moves',
  initialState,
  reducers: {
    incrementMoves: (state) => { state.value++ },
    resetMoves: (state) => { state.value = 0 }
  },
}); 

export const { incrementMoves, resetMoves } = movesSlice.actions;

export const selectMoves = (state: RootState) => state.moves.value;

export default movesSlice.reducer;