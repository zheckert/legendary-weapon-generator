import React, { useContext } from "react"
import { Context } from "../context"

export const Favorite = (props) => {
    const {deleteWeapon} = useContext(Context)

    return(
        <div>
            {props.name}
            <button onClick={() => deleteWeapon(props._id)}>Remove from Favorites</button>
        </div>
    )
}