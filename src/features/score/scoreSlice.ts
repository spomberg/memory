import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface scoreState { value: Array<number> };

const initialState: scoreState = { value: [] }

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    initiateScore: (state, actions) => { 
      const score = [];

      for (let index = 0; index < actions.payload; index++) {
        score.push(0);
      }

      state.value = score;
     },
    incrementScore: (state, actions) => { state.value[actions.payload]++ }
  },
}); 

export const { initiateScore, incrementScore } = scoreSlice.actions;

export const scoreMoves = (state: RootState) => state.score.value;

export default scoreSlice.reducer;