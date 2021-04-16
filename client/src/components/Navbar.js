import React, { useContext } from "react"
import { UserContext } from "../components/context/UserProvider"

import { Link } from "react-router-dom"
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

export const Navbar = () => {

    const classes = useStyles()

    const { logout } = useContext(UserContext)

    return(
        <AppBar position="sticky"  className={(classes.appBar)}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Button variant="contained" color="secondary " onClick={() => logout()}>Logout</Button>
            </div>
        </AppBar>
        
    )
}