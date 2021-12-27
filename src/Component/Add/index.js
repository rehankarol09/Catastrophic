import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  IconButton
} from "@mui/material";
import { AddOutlined, Delete } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import CustomizedSnackbars from '../Snackbar/index'
const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: "490px !important",
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));



export const Add = (props) => {
  const classes = useStyles();
  const [OpenModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
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
      <Modal open={OpenModal}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
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
                onClick={(e) => (setOpenAlert(true))}
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
      <CustomizedSnackbars
        openAlert={openAlert}
        handleClose={handleClose}
        handleClick={handleClick}
      />
    </>
  );
};

