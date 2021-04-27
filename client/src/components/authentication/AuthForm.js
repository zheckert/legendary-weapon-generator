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

export const AuthForm = (props) => {
    
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

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
        // {toggle ? onSubmit={e => handleLogin(e)} : onSubmit={e => handleSignup(e)}}
            <AppBar position="sticky" className={(classes.appBar)}>  

            {toggle ?
                    <form onSubmit={e => handleSignup(e)}>
                    <input
                        type="text"
                        value={inputs.username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        value={inputs.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                        
                            <Button variant="contained" color="secondary" type="submit">Sign Up</Button>
                        
                        <p className={(classes.error)}>{errorMessage}</p>
                    </form>
                :
                    <form onSubmit={e => handleLogin(e)}>
                    <input
                        type="text"
                        value={inputs.username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        value={inputs.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                        
                            <Button variant="contained" color="secondary" type="submit" >Log In</Button>
                        
                        <p className={(classes.error)}>{errorMessage}</p>
                    </form>
            }          
                {/* <form onSubmit={e => handleSignup(e)}>
                    <input
                        type="text"
                        value={inputs.username}
                        name="username"
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        value={inputs.password}
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                        {toggle ?
                            <Button variant="contained" color="secondary" type="submit">Sign Up</Button>
                                :
                            <Button variant="contained" color="secondary" type="submit" >Log In</Button>
                        }
                        <p className={(classes.error)}>{errorMessage}</p>
                </form> */}
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