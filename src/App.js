import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavBar } from './Components/NavBar';
import {LeftBar} from './Components/LetfBar'
import {RightBar} from './Components/RightBar'
import {FeedBar} from './Components/Feed'
import "./App.css"
import { Add } from './Components/Add';

const useStyles=makeStyles((theme)=>({
  right:{
    [theme.breakpoints.down('md')]:{
      display:"none"
    }
  }
}))
export const App = (props) => {
  const classes = useStyles();
  return (
    <>
    <div>
    <NavBar />
       <Grid container>
           <Grid item sm={2} xs={2}>
             <LeftBar/>
           </Grid>
           <Grid Grid item sm={7} xs={10}>
              <FeedBar/>
           </Grid>
           <Grid Grid item sm={3} className={classes.right}>
           <RightBar/>
           </Grid>
       </Grid>
       <Add/>
    </div>
     
       
    </>

  )

}