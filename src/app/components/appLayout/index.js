import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles, { classNamePrefix: 'AppLayout' });

function AppLayout({ children }) {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={10} className={classes.paperWrapper}>
        {children}
      </Paper>
    </Grid>
  );
}

export default AppLayout;
