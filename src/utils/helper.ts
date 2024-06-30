import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    // Map over the column
    for (let col = 0; col < MAX_COLS; col++) {
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col,
            isWall: false,
            isPath:false,
            isStart: row === startTile.row && col === startTile.col,
            distance: Infinity,
            isTraversed: false,
            parent: null,
        })
    }
    return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        // Push on to the grid

        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
}