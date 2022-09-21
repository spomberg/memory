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
import tilesReducer from "./features/tiles/tilesSlice";
import indicesReducer from "./features/indices/indicesSlice";
import timerReducer from "./features/timer/timerSlice";
import showStartReducer from "./features/showStart/showStartSlice";
import showGridReducer from "./features/showGrid/showGridSlice";
import showMenuReducer from "./features/showMenu/showMenuSlice";

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
    score: scoreReducer,
    tiles: tilesReducer,
    indices: indicesReducer,
    timer: timerReducer,
    showStart: showStartReducer,
    showGrid: showGridReducer,
    showMenu: showMenuReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;