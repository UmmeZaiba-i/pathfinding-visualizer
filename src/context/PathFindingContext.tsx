import { ReactNode, createContext, useState } from 'react';
import {AlgorithmType, GridType, MazeType} from '../utils/types'
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from '../utils/constants';
import { createGrid } from '../utils/helper';
 
// 1. Step 1: CREATE PATHFINDING CONTEXT
// define the shape of the context value
// pathfinding algorithm
export interface PathFindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm:(algorithm:AlgorithmType) => void;
    maze:MazeType;
    setMaze:(maze:MazeType)=> void;
    grid:GridType;
    setGrid:(grid:GridType)=> void;
    isGraphVisualized : boolean;
    setIsGraphVisualized:(isGraphVisualized:boolean)=> void;
}

export const PathFindingContext = createContext<PathFindingContextInterface|undefined>(undefined); 

export const PathFindingProvider = ({children}: {children: ReactNode})=>{
    const [algorithm, setAlgorithm]= useState<AlgorithmType>("BFS");
    const [maze, setMaze]=useState<MazeType>("NONE");
    const [grid, setGrid]= useState<GridType>(createGrid(START_TILE_CONFIGURATION,END_TILE_CONFIGURATION));
    const [isGraphVisualized, setIsGraphVisualized]= useState<boolean>(false);

    return(
        <PathFindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized,
            }}
        >
            {children}
        </PathFindingContext.Provider>
    )
}


