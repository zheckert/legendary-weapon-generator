import React, { useContext } from "react"
import { Context } from "../context"

export const Current = (props) => {
    const {generator, weapons} = useContext(Context)

    return(
        <>
        <div>
            {weapons}
        </div>
            <div>
                <button onClick={() => generator()}>Generate</button>
            </div>
        </>
    )
}