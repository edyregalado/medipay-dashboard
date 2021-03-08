import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const PurpleButton = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "#B765D2",
    '&:hover': {
      backgroundColor: purple[700],
    }
  },
}))(Button);

const LogoutButton = () => {
  const { logout } = useAuth0();
  const classes = useStyles();

  return (
    <PurpleButton onClick={() => logout()}
      width="50px"
      variant="contained"
      className={classes.margin}>
      Logout
    </PurpleButton>
  )
};

export default LogoutButton;