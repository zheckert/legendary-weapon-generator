import React, { useContext } from "react"
import { Context } from "../context"

export const Prior = () => {
    const {favorite} = useContext(Context)

    return(
        <div>
            {favorite}
        </div>
    )
}