import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface tilesState { value: any[] };

const initialState: tilesState = { value: [] }

export const tilesSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    addTiles: (state, actions) => { state.value = [...state.value, actions.payload] },
    resetTiles: (state) => { state.value = [] }
  },
}); 

export const { addTiles, resetTiles } = tilesSlice.actions;

export const selectTiles = (state: RootState) => state.tiles.value;

export default tilesSlice.reducer;