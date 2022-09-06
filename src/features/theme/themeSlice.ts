import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface themeState { value: string };

const initialState: themeState = { value: 'numbers' }

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setNumbersTheme: (state) => { state.value = 'numbers' },
    setIconsTheme: (state) => { state.value = 'icons' }
  },
}); 

export const { setNumbersTheme, setIconsTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.state.value;

export default themeSlice.reducer;