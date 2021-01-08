import React, { useContext } from "react"
import { Context } from "../context"

export const Current = (props) => {
    const {weapons, generator, addFavorite} = useContext(Context)

    return(
        <>
        <div>
            {weapons}
        </div>
            <div>
                <button onClick={() => generator()}>Generate</button>
                <button onClick={() => addFavorite()}>Save to Favorites</button>
            </div>
        </>
    )
}