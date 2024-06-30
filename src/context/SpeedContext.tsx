import { ReactNode, createContext, useState } from "react";
import { SpeedType } from "../utils/types";


export interface SpeedContextInterface{
    speed :SpeedType;
    //returns a void --remember
    setSpeed:(speed:SpeedType)=>void
}

export const SpeedContext = createContext<SpeedContextInterface|undefined>(undefined);

export const SpeedProvider =({children}:{children:ReactNode})=>{
    const [speed,setSpeed] = useState<SpeedType>(0.5);

    return(
        <SpeedContext.Provider value={{speed,setSpeed}}>
            {children}
        </SpeedContext.Provider>
    )
}