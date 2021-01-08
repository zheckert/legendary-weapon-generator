import React, { useState } from "react"
import axios from "axios"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "./components/index"

const Context = React.createContext()

export const ContextProvider = (props) => {

    const [weapons, setWeapons] = useState([])
    const [favorite, setFavorite] = useState("")

    const generator = () => {
        let random = (arr) => {
            return arr[Math.floor(Math.random()*arr.length)]
        }
        
        const blunt = random(bluntData)
        const bladed = random(bladedData)
        const adjective = random(adjectiveData)
        const bluntType = random(bluntTypeData)
        const bladedType = random(bladedTypeData)
        const suffix = random(suffixData)
        
        let type = (random([true, false])) ? bladed : blunt
        let weapon = (type === blunt) ? bluntType : bladedType
        let final = `${type} ${adjective} ${weapon} of ${suffix}`
        setWeapons(final)
        setFavorite(prevWeapon => [...prevWeapon, final])
    }

    const addFavorite = (addFavorite) => {
        axios.post("/weapon", addFavorite)
            .then(response => {
                setFavorite(prevFavorites => [...prevFavorites, response.data])
            })
            .catch(error => console.log(error))
    }

    return(
        <Context.Provider value={{weapons, favorite, generator, addFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export { Context }