import React from 'react'
import { Card, CardActionArea,CardMedia, CardContent,Typography,CardActions,Button, makeStyles} from '@material-ui/core'
import PostImage from "../../images/image1.jpg"

const useStyles = makeStyles((theme)=>({
   media:{
      height:250,
      [theme.breakpoints.down("md")]:{
        height:150
      }
   },
   card:{
     marginBottom:theme.spacing(5),
     border: "2px solid white",
      padding: "10px",
      borderRadius: theme.shape.borderRadius
   },
   typographycontent1:{
     fontWeight:"800"
   },
   typographycontent2:{
    fontWeight:"500"
  },

}))
export const Post = (props) => {
  const classes = useStyles();
  return(
   <>
   <Card className={classes.card}>
       <CardActionArea>
       <CardMedia
          className={classes.media}
          image={PostImage}
          alt="green iguana"
          title="MyPost"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"className={classes.typographycontent1} >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph className={classes.typographycontent2}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
       </CardActionArea>
   </Card>
   </>
   )

 }