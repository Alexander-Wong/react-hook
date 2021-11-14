import React, { useEffect, useRef, useState } from 'react';
import useVehiclesData from '../hooks/useVehiclesData';
import { validateForm } from '../utils/form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Headline from '../components/Headline';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RaqSummary from '../components/RaqSummary/RaqSummary';
import ControlledSelect from '../components/ControlledSelect/ControlledSelect';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  formElement: {
    margin: theme.spacing(1),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
  submitBtn: {
    height: '50px'
  },
  uncontrolledInput: {
    boxSizing: 'border-box',
    padding: theme.spacing(1)
  }
}));

const ControlledRaqPage = () => {
  const classes = useStyles();
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({});

  const uncontrolledInputRef = useRef(null);

  const { error, isLoading, data: vehicles } = useVehiclesData();

  useEffect(() => {
    if (vehicles) {
      const initialVehicle = vehicles[0];

      setSelectedVehicle(initialVehicle);
      setSelectedColor(initialVehicle.exteriorColors[0]);
    }
  }, [vehicles]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const personalInfo = {
      firstName,
      lastName,
      email
    };

    const validateResult = validateForm(personalInfo);

    if (validateResult.isValid) {
      setErrors({});

      console.log({
        vehicle: {
          name: selectedVehicle.name,
          color: selectedColor.name,
          price: selectedColor.price
        },
        personalInfo,
        uncontrolledInput: uncontrolledInputRef.current.value
      });
    } else {
      setErrors(validateResult.errors);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Headline text="Request A Quote - Controlled" />
      <section className={classes.container}>
        <form noValidate onSubmit={handleSubmit}>
          <h3>Vehicle Information</h3>
          <ControlledSelect
            label="Vehicle"
            labelId="vehicle-label"
            options={vehicles}
            value={selectedVehicle}
            handleChange={(targetVehicle) => {
              setSelectedVehicle(targetVehicle);
              setSelectedColor(targetVehicle.exteriorColors[0]);
            }}
          />
          {selectedVehicle && (
            <ControlledSelect
              label="Color"
              labelId="color-label"
              options={selectedVehicle.exteriorColors}
              value={selectedColor}
              handleChange={(targetColor) => setSelectedColor(targetColor)}
            />
          )}
          <h3>Personal Information</h3>
          <TextField
            error={!!errors.firstName}
            className={classes.formElement}
            label="First Name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
            helperText={errors.firstName?.message}
            variant="outlined"
          />
          <TextField
            error={!!errors.lastName}
            className={classes.formElement}
            label="Last Name"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            helperText={errors.lastName?.message}
            variant="outlined"
          />
          <TextField
            error={!!errors.email}
            className={classes.formElement}
            label="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            helperText={errors.email?.message}
            variant="outlined"
          />
          <div>
            <input
              type="text"
              placeholder="Uncontrolled"
              ref={uncontrolledInputRef}
              className={`${classes.formElement} ${classes.uncontrolledInput}`}
            />
          </div>
          <Button type="submit" className={`${classes.formElement} ${classes.submitBtn}`} color="primary" variant="contained">
            Submit
          </Button>
        </form>
        <RaqSummary
          selectedColor={selectedColor}
          selectedVehicle={selectedVehicle}
        />
      </section>
    </>
  );
};

export default ControlledRaqPage;
