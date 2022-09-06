import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./features/state/stateSlice";
import themeReducer from "./features/theme/themeSlice";
import playersReducer from "./features/players/playersSlice";

export const store = configureStore({
  reducer : {
    state: stateReducer,
    theme: themeReducer,
    players: playersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;