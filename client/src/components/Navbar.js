import React, { useContext } from "react"
import { UserContext } from "../components/context/UserProvider"
import { Link } from '@material-ui/core';
import { Button } from "@material-ui/core"

import AppBar from "@material-ui/core/AppBar"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	appBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
        padding: theme.spacing(1.25)
	},
    buttonStyler: {
        margin: theme.spacing(1)
	}
}))

export const Navbar = () => {

    const classes = useStyles()

    const { logout } = useContext(UserContext)

    return(
        <AppBar position="sticky"  className={(classes.appBar)}>
            <div>
                <Button variant="outlined" color="secondary" href="/" component={Link} className={(classes.buttonStyler)}>
                    Profile
                </Button>
                <Button variant="outlined" color="secondary" href="/about" component={Link} className={(classes.buttonStyler)}>
                    About
                </Button>
                <Button variant="contained" color="secondary" onClick={() => logout()}>Logout</Button>
            </div>
        </AppBar>
        
    )
}