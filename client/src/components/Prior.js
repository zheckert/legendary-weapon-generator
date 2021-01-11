import React, { useContext, useEffect } from "react"
import { Context } from "../context"
import { Favorite } from "./Favorite"

export const Prior = () => {
    const {favorites, getWeapons} = useContext(Context)

    useEffect(() => {
        getWeapons()
    }, [getWeapons])

    return(        
        <div>
            {favorites.map(weapon => 
                <Favorite
                    {...weapon}
                    key={weapon._id}
                />
            )}
        </div>
    )
}