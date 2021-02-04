import React, { useContext } from "react"
import { Context } from "./context/context"

export const Current = () => {
    const {weapon, generator, addFavorites} = useContext(Context)
    const user = localStorage.getItem("user")
    const id = JSON.parse(user)._id

    return(
        <div>
            <div className="headerClass">
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div className="weaponDisplay">
                {weapon}
            </div>
            <div className="headerClass">
                <button onClick={() => generator()}>Generate</button>
                <button onClick={() => addFavorites(weapon, id)}>Save to Favorites</button>
            </div>
        </div>
    )
}