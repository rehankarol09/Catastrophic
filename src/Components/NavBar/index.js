import { AppBar, Toolbar, makeStyles, Typography, InputBase, Badge } from '@material-ui/core'
import { alpha } from '@material-ui/core/styles';
import { Cancel, Search, } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    root: {
        top:0,
        boxShadow: "none",
        backgroundColor: "#4a148c",
        
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('md')]: {
            display: "none",
        },
        [theme.breakpoints.down('md')]: {
            display: (props) => props.open ? "flex" : "none",
            width: "60%"
        },
    },
    input: {
        marginLeft: theme.spacing(2),
        color: "snow"
    },
    icons: {
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex",
    },
    batch: {
        marginRight: theme.spacing(2),
        color: "white"
    },
    searchbutton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    },
    cancel: {
        [theme.breakpoints.up('md')]: {
            display: "none",
        }
    }


}));

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });

    return (
        <>
            <AppBar className={classes.root} position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography>
                        SkyDive.In
                    </Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='Searching...' className={classes.input} />
                        <Cancel className={classes.cancel} onClick={(e) => (setOpen(false))} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchbutton} onClick={(e) => (setOpen(true))} />
                        <Badge badgeContent={4} color="secondary" className={classes.batch} >
                            <MailIcon color="white" />
                        </Badge>
                        <Badge badgeContent={4} color="secondary" className={classes.batch}>
                            <NotificationsIcon color="white" />
                        </Badge>
                    </div>
                </Toolbar>
            </AppBar>
        </>

    )

}
