import React, { useContext } from "react"
import { UserContext } from "../components/context/UserProvider"
import { Link } from "react-router-dom"

export const Navbar = () => {

    const { logout } = useContext(UserContext)

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={() => logout()}>
                Logout
            </button>
        </div>
    )
}