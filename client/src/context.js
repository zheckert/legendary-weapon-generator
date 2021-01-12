import React, { useState } from "react"
import axios from "axios"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "./components/index"

//what if we linked into an API to find adjectives? Something like this: http://www.datamuse.com/api/

const Context = React.createContext()

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

    const getWeapons = () => {
        axios.get("/weapon")
            .then(response => setFavorites(response.data))
            .catch(error => console.log(error))
    }

    const addFavorites = (addFavorite) => {
        if(favorites.some(fav => fav.name === weapons)){
            alert("Weapon is already a favorite!")
        }else{
            axios.post("/weapon", {name: addFavorite})
            .then(response => {
                setFavorites(prevFavorites => [...prevFavorites, response.data])      
            })  
            .catch(error => console.log(error))
        }
    }

    const deleteWeapon = (weaponId) => {
        axios.delete(`/weapon/${weaponId}`)
            .then(response => {
                setFavorites(prevFavorites => prevFavorites.filter(weapon => weapon._id !== weaponId))
            })
            .catch(error => console.log(error))
    }

    return(
        <Context.Provider value={{weapons, favorites, generator, getWeapons, addFavorites, deleteWeapon}}>
            {props.children}
        </Context.Provider>
    )
}

export { Context }