import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface PlayersState { value: number };

const initialState: PlayersState = { value: 0 }

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state, actions) => { state.value = actions.payload }
  },
}); 

export const { setPlayers } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.state.value;

export default playersSlice.reducer;