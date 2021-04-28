import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Button,
    CircularProgress,
    Snackbar,
    Grid,
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";



const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: 350,
        },
    },
}))

function Signup() {
    const classes = useStyles()

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    function handleOnSubmit(e) {
        e.preventDefault()
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "30vh" }}
        >
            <Grid item xs={12}>
                <form
                    className={classes.root}
                    autoComplete="on"
                    onsubmit={handleOnSubmit}
                >
                    <FormControl error={null}>
                        <InputLabel htmlFor="component-email">Email</InputLabel>
                        <Input
                            id="component-email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={null}
                        />
                        <FormHelperText id="component-error-text">
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl error={null}>
                        <InputLabel htmlFor="component-username">Username</InputLabel>
                        <Input
                            id="component-username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onBlur={null}
                        />
                        <FormHelperText id="component-error-text">
                            {}
                        </FormHelperText>
                    </FormControl>

                    <br />
                    <FormControl error={null}>
                        <InputLabel htmlFor="component-firstName">First Name</InputLabel>
                        <Input
                            id="component-firstName"
                            name="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={null}
                        />
                        <FormHelperText id="component-error-text">
                            {}
                        </FormHelperText>
                    </FormControl>

                    <br />
                    <FormControl error={null}>
                        <InputLabel htmlFor="component-lastName">Last Name</InputLabel>
                        <Input
                            id="component-lastName"
                            name="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={null}
                        />
                        <FormHelperText id="component-error-text">
                            {null}
                        </FormHelperText>
                    </FormControl>

                    <br />
                    <FormControl error={null}>
                        <InputLabel htmlFor="component-password">Password</InputLabel>
                        <Input
                            type="password"
                            id="component-password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={null}
                        />
                        <FormHelperText id="component-error-text">
                            
                        </FormHelperText>
                    </FormControl>

                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={null}
                    >
                        Submit
            </Button>
                </form>
            </Grid>
        </Grid>
    )
}



export default Signup
