import React, { useContext } from "react"
import { Context } from "./context/context"

export const Public = () => {
    const { generator, weapon } = useContext(Context)
    return(
        <div div className="publicClass">
            
            <div>
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div className="weaponDisplay">
                {weapon}
            </div>
            <div>
                <button onClick={() => generator()}>Generate!</button>
            </div>
            {/* This will be used when I integrate the project with an api!!!<div>
                <button>Feeling crazy?</button>
            </div> */}
            
            
        </div>
        
    )
}

