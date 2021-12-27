import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { BarChartOutlined, ExitToAppOutlined, HomeOutlined, Person } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  container: {
    height:"100vh",
    paddingTop: theme.spacing(10),
    backgroundColor: "#4a148c",
    color: "white",
    position:"sticky !important",
    top:0,
    [theme.breakpoints.up("md")]: {
      backgroundColor: 'white',
      color: "#555",
      border: "1px solid #607d8b"
    },
    [theme.breakpoints.down("md")]:{
      backgroundColor:"purple !important"
  }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer"
    },

  },
  text: {
    fontWeight: "bold",
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      fontSize: "20px"
    }
  },

}))
export const LeftBar = (props) => {
  const classes = useStyles();
  return (
      <Container className={classes.container}>
        <div className={classes.item}>
          <HomeOutlined className={classes.icon} />
          <Typography className={classes.text}>Home</Typography>
        </div>
        <div className={classes.item}>
          <Person className={classes.icon} />
          <Typography className={classes.text}>Category</Typography>
        </div>
        <div className={classes.item}>
          <HomeOutlined className={classes.icon} />
          <Typography className={classes.text}>Product</Typography>
        </div>
        <div className={classes.item}>
          <HomeOutlined className={classes.icon} />
          <Typography className={classes.text}>Orders</Typography>
        </div>
        <div className={classes.item}>
          <BarChartOutlined className={classes.icon} />
          <Typography className={classes.text}>Statistics</Typography>
        </div>
        <div className={classes.item}>
          <ExitToAppOutlined className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>

      </Container>
  
  )

  }