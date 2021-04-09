import React, { useContext } from "react"
import { UserContext } from "../components/context/UserProvider"

import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

import AppBar from "@material-ui/core/AppBar"

export const Navbar = () => {

    const { logout } = useContext(UserContext)

    return(
        <AppBar>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Button variant="contained" color="primary" onClick={() => logout()}>Logout</Button>
        </AppBar>
    )
}