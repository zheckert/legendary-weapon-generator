import React from "react"
import { Button } from "@material-ui/core"

import AppBar from "@material-ui/core/AppBar"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	appBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
        padding: theme.spacing(1.25)
	}
}))

export const AuthForm = (props) => {

    const classes = useStyles()

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
            {/* material ui button needs some work here */}
                <Button variant="contained" color="secondary" type="submit">{ buttonText }</Button>
                {/* <p>{errorMessage}</p> */}
            </form>
        </AppBar>
        
    )
}