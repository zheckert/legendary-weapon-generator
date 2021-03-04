import React, { useContext } from "react"
import { UserContext } from "../components/context/UserProvider"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"

export const Navbar = () => {

    const { logout } = useContext(UserContext)

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Button onClick={() => logout()}>Logout</Button>
            <button onClick={() => logout()}>
                Logout
            </button>
        </div>
    )
}