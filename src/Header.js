import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import "./Header.css"


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#808080',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 100,
        padding: '0 30px',
        alignContent: 'center',
        display:'flex',
    },
    title: {
        color: 'white',
        fontSize: '4.25rem',
    },
    cartIcon: {
        position: 'absolute',
        top: theme.spacing(4),
        right: theme.spacing(3),
        transform: 'scale(1.8)',
        color: 'white'
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="relative" className={classes.root}>
            <Typography align={"center"} className={classes.title}>
                ShopEase
            </Typography>
            <Typography className={classes.cartIcon}>
                <IconButton aria-label="add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </Typography>
        </AppBar>
    );
}

export default Header;
