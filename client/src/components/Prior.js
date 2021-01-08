import React, { useContext } from "react"
import { Context } from "../context"

export const Prior = () => {
    const {favorites} = useContext(Context)
    let savedFavorites = favorites.map(fav => <div>{fav.name}</div>)
    return(
        <div>
            {savedFavorites}
        </div>
    )
}