import React, { useContext } from "react"
import { Context } from "./context/context"

export const Favorite = (props) => {
    const {deleteWeapon} = useContext(Context)
    
    return(
        <div className="weaponOrganizer">
            <div className="headerClass">
                {props.name}
            </div>
            <div className="headerClass">
                <button onClick={() => deleteWeapon(props._id)}>Remove from Favorites</button>
            </div>
        </div>
    )
}