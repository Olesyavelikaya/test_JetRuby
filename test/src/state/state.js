import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tiles: [],
  selectedTiles: [],
  matchedTiles: [],
  isGameOver: false,
};

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
];

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initializeTiles(state, action) {
      let tiles = colors.concat(colors).sort(() => Math.random() - 0.5);
      state.tiles = tiles.map((color, index) => ({
        id: index,
        color,
        isOpen: false,
      }));
    },
    selectTile(state, action) {
      const tileId = action.payload;
      const tile = state.tiles.find((t) => t.id === tileId);
      if (!tile.isOpen && state.selectedTiles.length < 2) {
        tile.isOpen = true;
        state.selectedTiles.push(tile);
      }
    },
    checkMatch(state) {
      const [firstTile, secondTile] = state.selectedTiles;
      if (firstTile.color === secondTile.color) {
        state.matchedTiles.push(firstTile.id, secondTile.id);
      } else {
        state.tiles.forEach((tile) => {
          if (tile.id === firstTile.id || tile.id === secondTile.id) {
            tile.isOpen = false;
          }
        });
      }
      state.selectedTiles = [];
      state.isGameOver = state.matchedTiles.length === state.tiles.length;
    },
    resetGame(state) {
      state.tiles = [];
      state.selectedTiles = [];
      state.matchedTiles = [];
      state.isGameOver = false;
    },
  },
});

export { gameSlice };
