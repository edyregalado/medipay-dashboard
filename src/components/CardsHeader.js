import React from 'react';
import { Card, Typography, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function CardsHeader(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center',
      background: props.color
    },
    text: {
      fontSize: 18,
      color: props.font
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      color: props.font
    }
  }));

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {props.icon}
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

export default CardsHeader;