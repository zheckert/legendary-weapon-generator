import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export const UserProvider = (props) => {
    const initialState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        news: [],
        errorMessage: ""
    }

    const [userState, setUserState] = useState(initialState)

    const signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const { user, token } = response.data
                console.log(localStorage)
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(error => handleAuthError(error.response.data.errorMessage))
    }

    const login = (credentials) => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                //load all weapons on login here
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(error => handleAuthError(error.response.data.errorMessage))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            weapons: []
        })
    }

    const handleAuthError = (errorMessage) => {
        setUserState(prevState => ({
            ...prevState,
            errorMessage
        }))
    }

    const removeAuthError = () => {
        setUserState(prevState => ({
            ...prevState,
            errorMessage: ""
        }))
    }

    return(
        <UserContext.Provider value={{...userState, signup, login, logout, removeAuthError,}}>
            { props.children }
        </UserContext.Provider>
    )
}