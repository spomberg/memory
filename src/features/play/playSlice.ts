import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface playState { value: number[] };

const initialState: playState = { value: [] }

export const playSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    addPlay: (state, actions) => { state.value = [...state.value, actions.payload] },
    resetPlay: (state) => { state.value = [] }
  },
}); 

export const { addPlay, resetPlay } = playSlice.actions;

export const selectPlay = (state: RootState) => state.play.value;

export default playSlice.reducer;