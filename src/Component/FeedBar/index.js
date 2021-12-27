import React from 'react';
import { Post } from '../Post';
import { Container } from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles=makeStyles((theme)=>({
    container:{
         paddingTop:theme.spacing(10)
    },
    item:{
      display:"flex",
      alignItems:"center"
    }

}))
export const FeedBar = (props) => {
  const classes = useStyles();
  return(
    <>
      <Container className={classes.container}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            
      </Container>
    </>
   )

 }