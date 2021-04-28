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
}));

function Home() {
    const classes = useStyles();

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    // const [
    //     search,
    //     setSearch,
    //     errorMessage,
    //     isSearchButtonDisabled,
    //     handleOnSubmit,
    // ] = ()

    // function handleOnSubmit(e) {
    //     e.preventDefault();
    //     console.log(search);
        
    // }

    useEffect(() => {

    }, []);

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
                    onSubmit={null}
                >
                    <FormControl>
                        <InputLabel htmlFor="component-email">Search a coin!</InputLabel>
                        <Input
                            id="component-search"
                            name="search"
                            value={null}
                            onChange={null}
                        />
                        <FormHelperText id="component-error-text">
                            {}
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
    );
}



export default Home
