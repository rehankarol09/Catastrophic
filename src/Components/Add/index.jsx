import React, { useState } from 'react';
import { Tooltip, IconButton, Button, makeStyles, Modal, Container, TextField, FormControl, MenuItem, FormLabel,Radio,RadioGroup,FormControlLabel,Snackbar} from '@material-ui/core';
import { AddOutlined, Delete } from '@material-ui/icons';
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    iconButton: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 590,
        background: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down('md')]: {
            height: "100vh",
            width: "100vw"
        }
    },
    textfield: {
        width: "100%"
    },
    form: {
        padding: theme.spacing(3)
    },
    item: {
        marginBottom: theme.spacing(4)
    }
}))


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export const Add = (props) => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenAlert(false);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <div className={classes.iconButton}>
                <Tooltip title="Add">
                    <IconButton >
                        <AddOutlined style={{ color: "red" }} onClick={(e) => { (setOpenModal(true)) }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton>
                        <Delete style={{ color: "rgba(255,0,0,0.5)" }} />
                    </IconButton>
                </Tooltip>
            </div>
            <div>
                <Modal open={openModal}>
                    <Container className={classes.container}>
                        <form className={classes.form}>
                            <div className={classes.item}>
                                <TextField id="standard-basic" label="Title" variant="standard" className={classes.textfield} />
                            </div>
                            <div className={classes.item}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Multiline Placeholder"
                                    placeholder="Placeholder"
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                    size='small'
                                    className={classes.textfield}
                                />
                            </div>
                            <div className={classes.item}>
                                <TextField select label="Visibility" value="Public">
                                    <MenuItem value="Public">Public</MenuItem>
                                    <MenuItem value="Private">Private</MenuItem>
                                    <MenuItem value="Unlisted">Unlisted</MenuItem>
                                </TextField>
                            </div>
                            <div className={classes.item}>
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
                            </div>
                            <div className={classes.item}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    style={{ marginRight: 20 }}
                                    onClick={() => setOpenAlert(true)}
                                >
                                    Create
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => setOpenModal(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Container>
                </Modal>
            </div>
            <Snackbar
                open={openAlert}
                autoHideDuration={4000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </>
    )
}
