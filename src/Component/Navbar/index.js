import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Badge, InputBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { Notifications, Search, MailOutline } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';


const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    root: {
        top: 0,
        boxShadow: "none",
        backgroundColor: "purple !important",
        

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
            display: "none !important",
        }
    },
    cancelbutton: {
        [theme.breakpoints.up('md')]: {
            display: "none !important",
        }
    }
}));

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });

    return (
        <AppBar className={classes.root} position='fixed'>
            <Toolbar className={classes.toolbar}>
                <Typography>
                    SkyDive.In
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder='Searching...' className={classes.input} />
                    <CancelIcon className={classes.cancelbutton} onClick={(e) => (setOpen(false))} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchbutton} onClick={(e) => (setOpen(true))} />
                    <Badge badgeContent={4} color="secondary" className={classes.batch} >
                        <MailOutline color="white" />
                    </Badge>
                    <Badge badgeContent={4} color="secondary" className={classes.batch}>
                        <Notifications color="white" />
                    </Badge>
                </div>
            </Toolbar>
        </AppBar>
    )

}