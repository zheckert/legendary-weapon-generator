import React, { useState, useContext } from "react"
import {AuthForm} from "./AuthForm"
import { UserContext } from "../context/UserProvider.js"

const initialInputs = { username: "", password: "" }

export const Auth = () => {
    const[inputs, setInputs] = useState(initialInputs)
    const[toggle, setToggle] = useState(false)

    const { signup, login } = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    const handleSignup = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }

    return(
        
        <div>
            {toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                    />
                </>
            :
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}                        
                    />
                </>
            }
        </div>
    )
}
