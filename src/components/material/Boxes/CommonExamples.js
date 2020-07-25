
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function CommonExamples() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Box component="span" m={5}>
    <Button />
    </Box>
        </div>
  );
}




