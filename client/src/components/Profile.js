import React from "react"
import { Favorites } from "./Favorites"
import { Current } from "./Current"


export const Profile = () => {

    return(
        <div>
            <div className="publicClass">
                <Current />
            </div>
            <div>
                <Favorites />
            </div>
        </div>
        
    )
}