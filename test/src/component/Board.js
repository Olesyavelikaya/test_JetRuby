import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeTiles,
  selectTile,
  checkMatch,
  resetGame,
} from "../state/context";
import {
  selectTiles,
  SelelectSelectedTiles,
  SelectIsGameOver,
} from "../state/context";
import Tile from "./Tile";

const BoardTile = () => {
  const dispatch = useDispatch();

  const tiles = useSelector(selectTiles);
  const selectedTiles = useSelector(SelelectSelectedTiles);
  const isGameOver = useSelector(SelectIsGameOver);
  console.log(selectTiles);

  useEffect(() => {
    dispatch(initializeTiles());
  }, [dispatch]);

  useEffect(() => {
    if (selectedTiles.length === 2) {
      setTimeout(() => dispatch(checkMatch()), 500);
    }
  }, [selectedTiles, dispatch]);

  const handleTileClick = (tileId) => {
    if (selectedTiles.length < 2) {
      dispatch(selectTile(tileId));
    }
  };

  const handleRestart = () => {
    dispatch(resetGame());
    dispatch(initializeTiles());
  };

  return (
    <>
      <h2 className="title-board">Найди одинаковые пары</h2>
      <div className="board">
        {isGameOver ? (
          <div>
            <div className="game-over">You won!</div>
            <button className="button-restart" onClick={handleRestart}>
              Restart
            </button>
          </div>
        ) : (
          tiles.map((tile) => (
            <Tile key={tile.id} tile={tile} onClick={handleTileClick} />
          ))
        )}
      </div>
    </>
  );
};

export default BoardTile;
