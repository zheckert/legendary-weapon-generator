import React, { useState } from "react"
import axios from "axios"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "./components/index"

const Context = React.createContext()

//next steps- 
// apply a key to every generated weapon
// make a delete button for each instantiated weapon and a corresponding function
// currently weapon types are backwards (i.e. blunt weapon prefixes are being applied to bladed weapons) EZPZ FIX <=

export const ContextProvider = (props) => {

    const [weapons, setWeapons] = useState("")
    const [favorites, setFavorites] = useState([])

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
    }

    const addFavorites = (addFavorite) => {
        console.log(addFavorite)
        axios.post("/weapon", {name: addFavorite})
            .then(response => {
                console.log(response.data)
                setFavorites(prevFavorites => [...prevFavorites, response.data])
            })
            .catch(error => console.log(error))
    }

    return(
        <Context.Provider value={{weapons, favorites, generator, addFavorites}}>
            {props.children}
        </Context.Provider>
    )
}

export { Context }