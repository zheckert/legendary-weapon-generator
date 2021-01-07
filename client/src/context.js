import React, { useState } from "react"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "./components/index"
const Context = React.createContext()

export const ContextProvider = (props) => {

    const [weapons, setWeapons] = useState("")

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
        setWeapons(`${type} ${adjective} ${weapon} of ${suffix}`)
    }

    return(
        <Context.Provider value={{generator, weapons}}>
            {props.children}
        </Context.Provider>
    )
}

export { Context }