import React from 'react';
import { Backdrop, makeStyles } from '@material-ui/core';
import LoadingImage from '../../assets/images/loading.gif';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  wrapper: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    flexDirection: 'column'
  },
  loadingIcon: {
    width: 50,
    height: 50
  }
});

export default function Loading({ show = true }) {
  const classes = useStyles();
  return (
    <Backdrop open={show} className={classes.wrapper}>
      <img className={classes.loadingIcon} src={LoadingImage} alt={'Loading'} />
    </Backdrop>
  );
}

Loading.propTypes = {
  show: PropTypes.bool
};
