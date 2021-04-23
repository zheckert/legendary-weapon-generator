import React, { useState, useContext } from "react"
import { Button } from "@material-ui/core"
import { UserContext } from "../context/UserProvider.js"

import AppBar from "@material-ui/core/AppBar"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	appBar: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-end",
        padding: theme.spacing(1.25)
	},
    error: {
        color: "#FF0038",
    }
}))

const initialInputs = { username: "", password: "" }

export const AuthForm = (props) => {
    const[inputs, setInputs] = useState(initialInputs)
    const[toggle, setToggle] = useState(false)
    const classes = useStyles()

    const { signup, login, errorMessage, removeAuthError } = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const {
        inputs : {
            username,
            password
        }
    } = props

    const toggleForm = () => {
        setToggle(prev => !prev)
        removeAuthError()
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
            <AppBar position="sticky" className={(classes.appBar)}>            
                <form>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        value={password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                        {toggle ?
                            <Button variant="contained" color="secondary" type="submit" onSubmit={() => handleSignup()}>Sign Up</Button>
                                :
                            <Button variant="contained" color="secondary" type="submit" onSubmit={() => handleLogin()}>Log In</Button>
                        }
                        <p className={(classes.error)}>{errorMessage}</p>
                </form>
                <div>
                    {toggle ? 
                        <p onClick={toggleForm}>Already have an account?</p>
                        :
                        <p onClick={toggleForm}>Don't have an account?</p>
                    }
                </div>
            </AppBar>
        
        
    )
}