import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import useVehiclesData from '../hooks/useVehiclesData';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Headline from '../components/Headline';
import Loader from '../components/Loader';
import Error from '../components/Error';
import RaqSummary from '../components/RaqSummary/RaqSummary';
import UncontrolledSelect from '../components/UncontrolledSelect/UncontrolledSelect';

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
  }
}));

const RHFRaqPage = () => {
  const classes = useStyles();
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { error, isLoading, data: vehicles } = useVehiclesData();

  const methods = useForm();
  const { control, errors, handleSubmit, register, setValue } = methods;

  useEffect(() => {
    if (vehicles) {
      const initialVehicle = vehicles[0];
      setSelectedVehicle(initialVehicle);
      setSelectedColor(initialVehicle.exteriorColors[0]);
    }
  }, [vehicles]);

  const onSubmit = (formData) => {
    const { vehicle, color, firstName, lastName, email } = formData;

    console.log({
      vehicle: {
        name: vehicle.name,
        color: color.name,
        price: color.price
      },
      personalInfo: {
        firstName,
        lastName,
        email
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Headline text="Request A Quote - RHF" />
      <section className={classes.container}>
        <FormProvider {...methods}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <h3>Vehicle Information</h3>
            <UncontrolledSelect
              name="vehicle"
              label="Vehicle"
              labelId="vehicle-label"
              defaultValue={vehicles[0]}
              options={vehicles}
              handleChange={(targetVehicle) => {
                setValue('color', targetVehicle.exteriorColors[0]);
                setSelectedVehicle(targetVehicle);
                setSelectedColor(targetVehicle.exteriorColors[0]);
              }}
            />
            {selectedVehicle && (
              <UncontrolledSelect
                name="color"
                label="Color"
                labelId="color-label"
                defaultValue={selectedVehicle.exteriorColors[0]}
                options={selectedVehicle.exteriorColors}
                handleChange={(targetColor) => setSelectedColor(targetColor)}
              />
            )}
            <h3>Personal Information</h3>
            <TextField
              error={!!errors.firstName}
              inputRef={register({ required: 'First name is required!' })}
              name="firstName"
              label="First Name"
              defaultValue=""
              className={classes.formElement}
              variant="outlined"
              helperText={errors.firstName?.message}
            />
            <TextField
              error={!!errors.lastName}
              inputRef={register({ required: 'Last name is required!' })}
              name="lastName"
              label="Last Name"
              defaultValue=""
              className={classes.formElement}
              variant="outlined"
              helperText={errors.lastName?.message}
            />
            <TextField
              error={!!errors.email}
              inputRef={register({ required: 'Email is required!' })}
              name="email"
              label="Email"
              defaultValue=""
              className={classes.formElement}
              variant="outlined"
              helperText={errors.email?.message}
            />
            <Button
              type="submit"
              color="primary"
              className={`${classes.formElement} ${classes.submitBtn}`}
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </FormProvider>

        <RaqSummary
          selectedColor={selectedColor}
          selectedVehicle={selectedVehicle}
        />
      </section>
      <DevTool control={control} />
    </>
  );
};

export default RHFRaqPage;
