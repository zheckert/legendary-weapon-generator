import React, { useContext } from "react"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "../context"


export const Current = () => {
    const {weapons, generator, addFavorites} = useContext(Context)
    // const gitHub = { FontAwesomeIcon }

    return(
        <div>
            <div className="headerClass">
                <h1>Ye Olde Weapon Generator</h1>
            </div>
            <div className="headerClass">
                <h3>By Zach</h3>
                {/* <p>{ gitHub }</p> */}
            </div>
            <div className="weaponDisplay">
                {weapons}
            </div>
            <div className="headerClass">
                <button onClick={() => generator()}>Generate</button>
                <button onClick={() => addFavorites(weapons)}>Save to Favorites</button>
            </div>
        </div>
    )
}