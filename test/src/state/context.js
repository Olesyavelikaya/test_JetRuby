import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./state";

export const { initializeTiles, selectTile, checkMatch, resetGame } =
  gameSlice.actions;
export const reducer = {
  gameSlice: gameSlice.reducer,
};

export const store = configureStore({
  reducer,
});

export const selectTiles = (state) => state.gameSlice.tiles;
export const SelelectSelectedTiles = (state) => state.gameSlice.selectedTiles;
export const SelectIsGameOver = (state) => state.gameSlice.isGameOver;
