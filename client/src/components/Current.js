import React, { useContext } from "react"
import { Context } from "./context/context"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    buttonStyler: {
        margin: theme.spacing(1)
	}
}))

export const Current = () => {
    const {weapon, generator, addFavorites} = useContext(Context)
    const user = localStorage.getItem("user")
    const id = JSON.parse(user)._id
    
    const classes = useStyles()

    return(
        <div className="centerClass">
            <div className="headerClass">
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div className="weaponDisplay">
                {weapon}
            </div>
            <div className="headerClass">
                <Button variant="contained" color="secondary" className={(classes.buttonStyler)} onClick={() => generator()}>Generate</Button>
                <Button variant="outlined" color="secondary" onClick={() => addFavorites(weapon, id)}>Save to Favorites</Button>
            </div>
        </div>
    )
}