import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface timerState { value: string };

const initialState: timerState = { value: '' }

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action) => { state.value = action.payload }
  },
}); 

export const { setTimer } = timerSlice.actions;

export const selectTimer = (state: RootState) => state.timer.value;

export default timerSlice.reducer;