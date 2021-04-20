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
	}
}))

export const AuthForm = (props) => {

    const[toggle, setToggle] = useState(false)
    const classes = useStyles()

    const { signup, login, errorMessage, removeAuthError } = useContext(UserContext)

    const {
        handleChange,
        handleSubmit,
        buttonText,
        // errorMessage,
        inputs : {
            username,
            password
        }
    } = props

    const toggleForm = () => {
        setToggle(prev => !prev)
        removeAuthError()
    }

    //style the error message, don't forget thank you

    return(
        <>
        <AppBar position="sticky" className={(classes.appBar)}>            
            <form onSubmit={handleSubmit}>
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
                <Button variant="contained" color="secondary" type="submit">{ buttonText }</Button>
                <p>{errorMessage}</p>
            </form>
            <div>
                {toggle ? 
                    <p onClick={toggleForm}>Already have an account?</p>
                    :
                    <p onClick={toggleForm}>Don't have an account?</p>
                }
            </div>
        </AppBar>
        </>
        
    )
}