import React from "react";

function Tile({ tile, onClick }) {
  return (
    <div
      className={`tile ${tile.isOpen ? "open" : ""}`}
      onClick={() => onClick(tile.id)}
      style={{ backgroundColor: tile.isOpen ? tile.color : "lightgray" }}
    >
      {tile.isOpen ? "" : "?"}
    </div>
  );
}

export default Tile;
