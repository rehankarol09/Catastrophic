import React from "react";
import { NavBar } from './Component/Navbar';
import { LeftBar } from './Component/LefBar'
import { RightBar } from './Component/RightBar'
import { FeedBar } from './Component/FeedBar'
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './App.css'
import { Add } from "./Component/Add";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Signup } from './Component/Signup/index';
import { Signin } from '././Component/Signin/index';
import TableComponent from "./Component/Table";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  }

}))
export const App = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid grid="true" item sm={7} xs={10}>
          <FeedBar />
        </Grid>
        <Grid grid="true" item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </>

  )

}