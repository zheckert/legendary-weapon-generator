import React from "react"
import { bluntData, bladedData, adjectiveData, bluntTypeData, bladedTypeData, suffixData } from "./index"

//how much of this should be moved to index.js? HMM

export const Generator = () => {
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
    let legendaryweapon = `${type} ${adjective} ${weapon} of ${suffix}`
    
    return(
        <div>
            {legendaryweapon}
        </div>
    )
}