
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

export default function PropsExamples() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Box color="text.primary">
    {props => <Button {...props} />}
    </Box>
    
    </div>
  );
}








