import React, { useState, useContext } from 'react';
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
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AppLayout from '../../components/appLayout';
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
    apiValue: 'ff9f895b2e884d6680530135202710',
    city: 'Kuala Lumpur'
  });

  const [checked, setCheck] = useState(false);

  const handleChange = (event) => {
    setState({ ...inputState, [event.target.name]: event.target.value });
    console.log(inputState);
  };

  const handleChecked = (event) => {
    setCheck(!checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputState, checked);
    console.log('asd', state);
  };

  const { apiValue, city } = inputState;

  return (
    <AppLayout>
      <Grid
        container
        spacing={0}
        align="center"
        justifyContent="center"
        direction="column"
        className={classes.container}>
        <h3>EbWorx Weather App</h3>
      </Grid>
      <form onSubmit={handleSubmit}>
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
            helperText={!apiValue ? 'Please enter API key.' : null}
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
