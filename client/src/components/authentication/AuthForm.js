import React from "react"
import { Button } from "@material-ui/core"

import AppBar from "@material-ui/core/AppBar"

export const AuthForm = (props) => {
    const {
        handleChange,
        handleSubmit,
        buttonText,
        errorMessage,
        inputs : {
            username,
            password
        }
    } = props

    //style the error message, don't forget thank you

    return(
        <AppBar>
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
            {/* material ui button needs some work here */}
            <Button variant="contained" color="secondary">{ buttonText }</Button>
            <button>{ buttonText }</button>
            <p>{errorMessage}</p>
            </form>
        </AppBar>
        
    )
}