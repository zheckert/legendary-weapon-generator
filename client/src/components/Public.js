import React, { useContext } from "react"
import { Context } from "./context/context"
import { Button } from "@material-ui/core"

export const Public = () => {
    const { generator, weapon } = useContext(Context)
    
    return(
        <div div className="publicClass">
            
            <div>
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            {/* <div className="contentCenterer"> */}
            <div>
                <div className="weaponDisplay">
                    {weapon}
                </div>
                <div className="weaponDisplay2">
                    <Button variant="contained" color="primary" onClick={() => generator()}>Generate!</Button>
                </div>
            </div>
            
            {/* This will be used when I integrate the project with an api!!!<div>
                <button>Feeling crazy?</button>
            </div> */}
            
        </div>
        
    )
}

