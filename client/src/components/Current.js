import React, { useContext } from "react"
import { Context } from "./context/context"
import { Button } from "@material-ui/core"

export const Current = () => {
    const {weapon, generator, addFavorites} = useContext(Context)
    const user = localStorage.getItem("user")
    const id = JSON.parse(user)._id

    return(
        <div className="centerClass">
            <div className="headerClass">
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div className="weaponDisplay">
                {weapon}
            </div>
            <div className="headerClass">
                <Button onClick={() => generator()}>Generate</Button>
                <Button onClick={() => addFavorites(weapon, id)}>Save to Favorites</Button>
            </div>
        </div>
    )
}