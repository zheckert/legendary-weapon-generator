import React, { useContext } from "react"
import { Context } from "./context/context"
import { Button } from "@material-ui/core"

export const Favorite = (props) => {
    const {deleteWeapon} = useContext(Context)
    
    return(
        <div className="weaponOrganizer">
            <div className="headerClass">
                {props.name}
            </div>
            <div className="headerClass">
                <Button variant="outlined" color="secondary" onClick={() => deleteWeapon(props._id)}>Remove</Button>
            </div>
        </div>
    )
}