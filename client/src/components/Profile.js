import React, { useContext } from "react"
import { Context } from "./context/context"
import { Favorites } from "./Favorites"
import { Current } from "./Current"


export const Profile = () => {

    const { generator, weapons, addFavorites } = useContext(Context)

    return(
        <div>
            {/* <div>
                {weapons}
                <button onClick={() => addFavorites(weapons)}>Save to Favorites</button>
                <button onClick={() => generator()}>Generate!</button>  
            </div> */}
            <div>
                <Current />
            </div>
            <div>
                <Favorites />
            </div>
        </div>
        
    )
}