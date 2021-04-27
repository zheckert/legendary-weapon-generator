import React, { useContext, useEffect } from "react"
import { Context } from "./context/context"
import { Favorite } from "./Favorite"

export const Favorites = () => {
    const {favorites, getWeapons} = useContext(Context)

    useEffect(() => {
        getWeapons()
    })

    return(     
        <>   
        <div className="headerClass">
            <h2>Favorites</h2>
        </div>
        <div className="gridClass">
            {favorites.map(weapon => 
                <Favorite
                    {...weapon}
                    key={weapon._id}
                />
            )}
        </div>
        </>
    )
}