import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./features/state/stateSlice";
import themeReducer from "./features/theme/themeSlice";
import playersReducer from "./features/players/playersSlice";
import gridSizeReducer from "./features/gridSize/gridSizeSlice";
import gridReducer from "./features/grid/gridSlice";
import matchedReducer from "./features/matched/matchedSlice";

export const store = configureStore({
  reducer : {
    state: stateReducer,
    theme: themeReducer,
    players: playersReducer,
    gridSize: gridSizeReducer,
    grid: gridReducer,
    matched: matchedReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;