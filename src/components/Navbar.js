import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutButton from '../components/LogoutButton';
import Profile from '../components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: '16px',
  },
  title: {
    flexGrow: 1
  },
  image: {
    borderRadius: '50%'
  },
  logout: {
    color: 'white'
  },
  name: {
    fontSize: '14px',
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="purple">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Medipay
          </Typography>
          <SearchBar />
          <Avatar src={user.picture} alt={user.name}/>
          <Typography variant="h2" className={classes.name}>
            {user.name}
          </Typography>
          <LogoutButton className={classes.logout}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;