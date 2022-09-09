import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface currentPlayerState { value: number };

const initialState: currentPlayerState = { value: 0 }

export const currentPlayerSlice = createSlice({
  name: 'currentPlayer',
  initialState,
  reducers: {
    nextPlayer: (state, actions) => {
      if (state.value < actions.payload - 1) {
        state.value++; 
      } else state.value = 0;
    },
    resetPlayer: (state) => { state.value = 0 }
  }
}); 

export const { nextPlayer, resetPlayer } = currentPlayerSlice.actions;

export const selectCurrentPlayer = (state: RootState) => state.currentPlayer.value;

export default currentPlayerSlice.reducer;