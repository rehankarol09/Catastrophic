import { Grid, Paper, Avatar, Checkbox, FormLabel, Typography, RadioGroup, TextField, FormControlLabel, Radio, Button } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '30px 20px',
        width: 320,
        margin: '20px auto'
    },
    item: {
        marginBottom: theme.spacing(2),
    },
    grid:{
        marginTop:theme.spacing(10)
    }
}))
export const Signup = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.grid}>
            <Paper elevation={20} className={classes.paper}>
                <Grid align={"center"}>
                    <Avatar style={{ margin: "10px", color: "green" }}>
                        <AddCircleOutlinedIcon />
                    </Avatar>
                    <h2 style={{ margin: "10px" }}>Signin</h2>
                    <Typography variant="caption" style={{fontWeight:"bold"}}>Fill in the Form</Typography>
                </Grid>
                <form>
                    <div className={classes.item}>
                        <TextField
                            id="standard-basic"
                            label="First Name"
                            size="small"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField
                            id="standard-basic"
                            label="Last Name"
                            size="small"
                            style={{ width: "100%" }}
                        />
                    </div>
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
                        <TextField
                            id="standard-basic"
                            label="Confirm Password"
                            size="small"
                            style={{ width: "100%" }}
                        />
                    </div>
                  
                    <div className={classes.item} >
                        <FormControlLabel control={<Checkbox  />}  label="I accept all terms and conditions" />
                    </div>
                    <div className={classes.button}>
                        <Button type="submit" variant='outlined' color="primary">SignUp</Button>
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