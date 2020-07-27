
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {text} from '@storybook/addon-knobs'
const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

function handleClick(event) {
  event.preventDefault();
  alert('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  const classes = useStyles();
  const headername = text("Main Heading", "Material-UI");
const subheader = text("Sub Heading","Core");
const breadcrumbheader = text("BreadCrumb Heading","BreadCrumb");
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            {headername}
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            {subheader}
          </Link>
          <Typography color="textPrimary">{breadcrumbheader}</Typography>
        </Breadcrumbs>
      </Paper>
      <br />
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            {headername}
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            {subheader}
          </Link>
          <Link
            color="textPrimary"
            href="/components/breadcrumbs/"
            onClick={handleClick}
            aria-current="page"
          >
            {breadcrumbheader}
          </Link>
        </Breadcrumbs>
      </Paper>
    </div>
  );
}
