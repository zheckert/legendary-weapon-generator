import React from "react"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	about: {
        margin: theme.spacing(1),
        textAlign: "center"
	}
}))

export const About = () => {

    const classes = useStyles()

    return(
        <Typography variant="h6" className={(classes.about)}>
            Hey! My name is Zach. See this project on GitHub <a href="https://github.com/zheckert/legendary-weapon-generator" rel="noopener noreferrer" target="_blank"> HERE</a> or visit my personal site <a href="https://zachheckert.com/" rel="noopener noreferrer" target="_blank"> HERE</a>.
        </Typography>
    )
}