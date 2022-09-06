import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface StateState { value: string };

const initialState: StateState = { value: 'startPage' }

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    startGame: (state) => { state.value = 'gamePage' },
    abortGame: (state) => { state.value = 'startPage' },
    finishGame: (state) => { state.value = 'resultsPage' }
  },
}); 

export const { startGame, abortGame, finishGame } = stateSlice.actions;

export const selectState = (state: RootState) => state.state.value;

export default stateSlice.reducer;