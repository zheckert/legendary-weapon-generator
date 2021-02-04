import React, { useState } from "react"
import axios from "axios"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "../index"

//what if we linked into an API to find adjectives? Something like this: http://www.datamuse.com/api/


const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const Context = React.createContext()

export const ContextProvider = (props) => {

    const [weapon, setWeapon] = useState("")
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
        setWeapon(final)
    }

    const getWeapons = () => {
        userAxios.get("/api/weapon/user")
            .then(response => setFavorites(response.data))
            .catch(error => console.log(error))
    }

    const addFavorites = (weapon) => {
        if(favorites.some(fav => fav.name === weapon)){
            alert("Weapon is already a favorite!")
        }else{
            userAxios.post("/api/weapon", {name: weapon})
            .then(response => {
                setFavorites(prevFavorites => [...prevFavorites, response.data])      
            })  
            .catch(error => console.log(error))
        }
    }

    const deleteWeapon = (weaponId) => {
        userAxios.delete(`/weapon/${weaponId}`)
            .then(response => {
                setFavorites(prevFavorites => prevFavorites.filter(weapon => weapon._id !== weaponId))
            })
            .catch(error => console.log(error))
    }

    return(
        <Context.Provider value={{weapon, favorites, generator, getWeapons, addFavorites, deleteWeapon}}>
            {props.children}
        </Context.Provider>
    )
}

export { Context }