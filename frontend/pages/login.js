import React from 'react';
import { styled } from "@material-ui/core/styles";
import styles from "./styles/login.module.css";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ]
    },
}));

export default function Login() {
    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="stretch" spacing={0}
            className={styles.gridContainer}>
            <Grid item xs={5}>
                <div>
                    <Container className={styles.containerSpacing} style={{ paddingLeft: "130px", paddingRight: "130px" }}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch"
                        >
                            {/* Logo */}
                            <Grid item>
                                <img src="/logo.png" alt="logo" style={{ width: "64px", height: "64px" }} />
                            </Grid>

                            {/* Login Content */}
                            <Grid item>
                                <p className={styles.loginTitle}>
                                    Login
                                </p>

                                <p className={styles.loginContent}>
                                    Get back to writing!
                                </p>
                            </Grid>

                            {/* Separator */}
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="stretch"
                            >
                                <Grid item xs={4} className={styles.alignDivider}>
                                    <div style={{ justifyContent: "center", paddingRight: "5px" }}>
                                        <span className={styles.halfDivider}> </span>
                                    </div>
                                </Grid>

                                <Grid item xs={4} className={styles.dividerContent}>
                                    <p>Sign In With Email</p>
                                </Grid>

                                <Grid item xs={4} className={styles.alignDivider}>
                                    <div style={{ justifyContent: "center", paddingRight: "5px" }}>
                                        <span className={styles.halfDivider}> </span>
                                    </div>
                                </Grid>
                            </Grid>

                            {/* Form */}
                            <Grid item>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="stretch"
                                >
                                    <FormControl variant="standard">
                                        <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                            Email
                                        </InputLabel>
                                        <BootstrapInput defaultValue="mail@website.com" id="bootstrap-input" className={styles.formStyle} />
                                    </FormControl>

                                    <Grid item style={{ height: "30px" }}></Grid>

                                    <FormControl variant="standard">
                                        <InputLabel className={styles.labelStyle} shrink htmlFor="bootstrap-input">
                                            Password
                                        </InputLabel>
                                        <BootstrapInput defaultValue="*********" id="bootstrap-input" className={styles.formStyle} />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid item style={{ height: "40px" }}></Grid>

                            {/* Button */}
                            <Grid item>
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="stretch"
                                >
                                    <Grid item xs={12}>
                                        <div className={styles.loginButton}>
                                            <span className={styles.loginButtonContent}>Sign In</span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* End Remarks */}
                            <Grid item style={{ paddingTop: "44px" }}>
                                <p className={styles.registerInfo}>Not yet registered? &nbsp;<span className={styles.linkToRegister}> Create an account</span></p>

                                <p className={styles.trademark}>@2021 Bloggr all rights reserved</p>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Grid>
            <Grid item xs={7} className={styles.view} />
        </Grid>
    )
}