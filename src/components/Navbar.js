import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: '16px'
  },
  title: {
    flexGrow: 1
  },
  image: {
    borderRadius: '50%'
  }
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Medipay
          </Typography>
          <IconButton color="inherit">
              <img src={require('../assets/img/logomedipay.png')} height="40px" className={classes.image}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;