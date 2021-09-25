import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    rightToolbar: {
        marginLeft: "auto",
        marginRight: '7rem'
    },
    leftToolbar: {
        marginLeft: '7rem',
        marginRight: "auto"
    },
})

export function NavigationBar() {
    const history = useHistory();
    const classes = useStyles();

    function handleHomeNavigation() {
        history.push('/');
    }
    function handleContactNavigation() {
        history.push('/contactme');
    }

    return (
        <AppBar  style = {{background: '#122c3d'}}>
            <Toolbar>
                <section className={classes.leftToolbar}>
                    <Typography variant="h4" color="inherit">
                        Eyad Esmail
                    </Typography>
                </section>
                <section className={classes.rightToolbar}>
                    <Button
                        color="inherit"
                        onClick={handleHomeNavigation}>
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        onClick={handleContactNavigation}>
                        Contact
                </Button>
                </section>
            </Toolbar>
        </AppBar>
    )
}