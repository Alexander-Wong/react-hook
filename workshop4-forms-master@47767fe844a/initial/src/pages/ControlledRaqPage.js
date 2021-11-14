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
  const { error, isLoading, data: vehicles } = useVehiclesData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Headline text="Request A Quote - Controlled" />
      <section className={classes.container}></section>
    </>
  );
};

export default ControlledRaqPage;
