import React, { useState, useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import AppLayout from '../../components/appLayout';
import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import * as types from '../../configs/redux/actionTypes';
import { Context } from '../../configs/context';
import PropTypes from 'prop-types';
import Loading from '../../components/loading';
import styles from './styles';

const useStyles = makeStyles(styles, { classNamePrefix: 'HomePage' });

function Detail() {
  const classes = useStyles();
  const [state, dispatch] = useContext(Context);
  const [tempCelc, setCelc] = useState(null);
  const [tempFar, setFar] = useState(null);
  const changeToFloat = (data) => {
    return parseFloat(data).toFixed(2);
  };

  useEffect(() => {
    const doSetup = () => {
      const {
        weather: { current }
      } = state;
      setCelc(current.temp_c);
      setFar(current.temp_f);
    };
    if (state.weather.length !== 0) {
      doSetup();
    }
  }, [state, tempCelc, tempFar]);

  useEffect(() => {
    return () => {
      dispatch({ type: types.RESET_HOME });
    };
  }, [dispatch]);

  if (!tempCelc) {
    return <Loading />;
  } else {
    return (
      <AppLayout>
        <Grid container spacing={0} align="center" justifyContent="center" direction="column"></Grid>
        <div className={classes.inputDiv}>
          <TextField
            defaultValue={changeToFloat(tempCelc)}
            InputProps={{
              readOnly: true
            }}
            className={classes.textField}
            label={
              <Typography variant="subtitle2" display="block">
                Celcius
              </Typography>
            }
          />
        </div>
        <div className={classes.inputDiv}>
          <TextField
            defaultValue={changeToFloat(tempFar)}
            className={classes.textField}
            InputProps={{
              readOnly: true
            }}
            label={
              <Typography variant="subtitle2" display="block">
                Farenheit
              </Typography>
            }
          />
        </div>
      </AppLayout>
    );
  }
}
Detail.propTypes = {
  id: PropTypes.any
};
export default Detail;
