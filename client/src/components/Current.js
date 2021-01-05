import React, { useContext } from "react"
import { Context } from "../context"

export const Current = () => {
    const {Generator} = useContext(Context)
    return(
        <div>
            <button onClick={() => Generator}>Generate</button>
        </div>
    )
}