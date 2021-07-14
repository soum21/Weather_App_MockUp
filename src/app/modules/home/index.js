import React, { useState, useContext, useEffect, useCallback } from 'react';
import {
  Grid,
  makeStyles,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';
import { Context } from '../../configs/context';
import { navigate } from '@reach/router';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AppLayout from '../../components/appLayout';
import { Settings, HttpService, setWeatherUrl } from '../../configs/services';
import * as types from '../../configs/redux/actionTypes';
import styles from './styles';

const useStyles = makeStyles(styles, { classNamePrefix: 'HomePage' });
const cities = [
  {
    value: 'Kuala Lumpur',
    label: 'Kuala Lumpur'
  },
  {
    value: 'Singapore',
    label: 'Singapore'
  },
  {
    value: 'Paris',
    label: 'Paris'
  },
  {
    value: 'Dhaka',
    label: 'Dhaka'
  }
];
function Home() {
  const classes = useStyles();

  const [state, dispatch] = useContext(Context);

  const [inputState, setState] = useState({
    apiValue: Settings.DEFAULT_API_KEY,
    city: cities[0].value
  });

  const [checked, setCheck] = useState(false);

  const [inputError, setInputError] = useState(false);

  const { apiValue, city } = inputState;

  const handleChange = (event) => {
    setInputError(false);
    setState({ ...inputState, [event.target.name]: event.target.value });
  };

  const handleChecked = (event) => {
    setCheck(!checked);
  };

  const onSuccess = useCallback(
    (res) => {
      dispatch({ type: types.GET_WEATHER_SUCCESS, weather: res });
    },
    [dispatch]
  );

  const onError = useCallback(
    (err) => {
      dispatch({ type: types.ERROR_WEATHER_DATA, error: { errorCode: err.status, errorMsg: err.msg } });
    },
    [dispatch]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let queryUrl = setWeatherUrl(apiValue, city);
      HttpService.open(queryUrl)
        .then((res) => onSuccess(res))
        .catch((err) => onError(err));
    },
    [apiValue, city, onError, onSuccess]
  );

  useEffect(() => {
    const doNavigation = () => {
      if (state.weather && state.weather.length !== 0) {
        navigate('/detail');
      }
      if (state.error && state.error.length !== 0) {
        setInputError(true);
      }
    };
    doNavigation();
  }, [state]);

  return (
    <AppLayout>
      <Grid container spacing={0} align="center" justifyContent="center" direction="column">
        <h3>EbWorx Weather App</h3>
      </Grid>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.inputDiv}>
          <TextField
            error={!apiValue}
            id="apiValue"
            name="apiValue"
            label={
              <Typography variant="subtitle2" display="block">
                Your API Key
              </Typography>
            }
            defaultValue={apiValue}
            onChange={handleChange}
            helperText={!apiValue ? 'Please enter API key.' : inputError ? state.error.errorMsg : null}
            disabled={!checked}
            className={classes.textField}
          />
        </div>
        <div className={classes.checkBox}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChecked}
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="enableEdit"
              />
            }
            label={
              <Typography variant="subtitle2" display="block">
                Edit API Key
              </Typography>
            }
          />
        </div>
        <div className={classes.inputDiv}>
          <TextField
            id="city"
            name="city"
            select
            label={
              <Typography variant="subtitle2" display="block">
                City Name
              </Typography>
            }
            value={city}
            onChange={handleChange}
            helperText="Please select your city"
            className={classes.textField}>
            {cities.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.inputDiv}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.submitButton}
            disabled={!apiValue ? true : false}>
            Submit
          </Button>
        </div>
      </form>
    </AppLayout>
  );
}

export default Home;
