import React from 'react';
import { Card, Typograpy, CardContent, CardActions, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    background: '#6A8BF2'
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white'
  }
}));

function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          {props.title}
        </Typography>
        <Typography className={classes.text}>
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;