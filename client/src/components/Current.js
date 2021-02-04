import { json } from "body-parser"
import React, { useContext } from "react"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Context } from "./context/context"


export const Current = () => {
    const {weapon, generator, addFavorites} = useContext(Context)
    // const gitHub = { FontAwesomeIcon }
    const user = localStorage.getItem("user")
    
    const id = JSON.parse(user)._id

    console.log(id)

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
                {weapon}
            </div>
            <div className="headerClass">
                <button onClick={() => generator()}>Generate</button>
                <button onClick={() => addFavorites(weapon, id)}>Save to Favorites</button>
            </div>
        </div>
    )
}