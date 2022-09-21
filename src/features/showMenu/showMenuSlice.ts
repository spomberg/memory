import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface ShowMenuState { value: boolean };

const initialState: ShowMenuState = { value: false }

export const showMenuSlice = createSlice({
  name: 'showMenu',
  initialState,
  reducers: {
    showMenu: (state) => { state.value = true },
    hideMenu: (state) => { state.value = false }
  },
}); 

export const { showMenu, hideMenu } = showMenuSlice.actions;

export const selectShowMenu = (state: RootState) => state.showMenu.value;

export default showMenuSlice.reducer;