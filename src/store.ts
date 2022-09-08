import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./features/state/stateSlice";
import themeReducer from "./features/theme/themeSlice";
import playersReducer from "./features/players/playersSlice";
import gridSizeReducer from "./features/gridSize/gridSizeSlice";
import gridReducer from "./features/grid/gridSlice";
import matchedReducer from "./features/matched/matchedSlice";
import movesReducer from "./features/moves/movesSlice";
import currentPlayerreducer from "./features/currentPlayer/currentPlayerSlice";
import scoreReducer from "./features/score/scoreSlice";

export const store = configureStore({
  reducer : {
    state: stateReducer,
    theme: themeReducer,
    players: playersReducer,
    gridSize: gridSizeReducer,
    grid: gridReducer,
    matched: matchedReducer,
    moves: movesReducer,
    currentPlayer: currentPlayerreducer,
    score: scoreReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;