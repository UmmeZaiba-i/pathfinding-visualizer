import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
// 2.CREATING GRID COMPONENT
export const Grid = () => {
    const { grid } = usePathFinding();

    return (
        <div
            className={twMerge(
                // Base Class
                "flex items-center flex-col justify-center border-sky-300",
                //Control Grid height 
                `lg:min-h-[${MAX_ROWS * 8}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                //Control Grid width
                `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
            )}
        >
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((tile, tileIndex) => {
                        const { isStart, isEnd, isWall, isPath, isTraversed } = tile;
                        return (
                            <Tile
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isStart={isStart}
                                isEnd={isEnd}
                                isWall={isWall}
                                isPath={isPath}
                                isTraversed={isTraversed}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}