import { Grid, Paper, Avatar, Checkbox, FormLabel, Typography, RadioGroup, TextField, FormControlLabel, Radio, Button, Link } from '@mui/material';

import React from 'react'
import { makeStyles } from '@mui/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '30px 20px',
        width: 320,
        margin: '20px auto',
        [theme.breakpoints.down("md")]: {
            height: "100vh"
        },

    },
    item: {
        marginBottom: theme.spacing(2),
    },
    grid: {
        marginTop: theme.spacing(10),
    },

}))
export const Signin = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.grid}>
            <Paper elevation={20} className={classes.paper}>
                <Grid align={"center"}>
                    <Avatar style={{ margin: "10px", color: "green" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2 style={{ margin: "10px" }}>SignIn</h2>

                </Grid>
                <form>
                    <div className={classes.item}>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            size="small"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField
                            id="standard-basic"
                            label="Password"
                            size="small"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={classes.item}>
                        <FormControlLabel
                            control={<Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember Me"
                        />
                    </div>


                    <div className={classes.button}>
                        <Button type="submit" variant='contained' color="primary" fullWidth>Login</Button>
                    </div>
                    <div className={classes.item} style={{marginTop:"5px"}}>
                        <Typography>
                            <Link>
                                Forgot Password
                            </Link>
                        </Typography>
                        <Typography style={{paddingTop:"4px"}}>
                            Do you Have account?
                            <Link>
                                SignUp
                            </Link>
                        </Typography>
                    </div>
                    
                    {/* <div className={classes.item}>
                        <FormLabel component="legend">Who can comment?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel
                                value="Everybody"
                                control={<Radio size="small" />}
                                label="Everybody"
                            />
                            <FormControlLabel
                                value="My Friends"
                                control={<Radio size="small" />}
                                label="My Friends"
                            />
                            <FormControlLabel
                                value="Nobody"
                                control={<Radio size="small" />}
                                label="Nobody"
                            />
                            <FormControlLabel
                                value="Custom"
                                disabled
                                control={<Radio size="small" />}
                                label="Custom (Premium)"
                            />
                        </RadioGroup>
                        </div> */}
                </form>
            </Paper>
        </Grid>
    )

}