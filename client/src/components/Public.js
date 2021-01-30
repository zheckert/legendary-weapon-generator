import React, { useContext } from "react"
import { Context } from "./context/context"

export const Public = () => {
    const { generator, weapons } = useContext(Context)
    return(
        <div>
            <div>
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div>
                {weapons}
            </div>
            <div>
                <button onClick={() => generator()}>Generate!</button>
            </div>
            <div>
                <button>Feeling crazy?</button>
            </div>
        </div>
        
    )
}