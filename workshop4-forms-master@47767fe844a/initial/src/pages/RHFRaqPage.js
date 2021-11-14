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
  const { error, isLoading, data: vehicles } = useVehiclesData();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Headline text="Request A Quote - RHF" />
      <section className={classes.container}></section>
    </>
  );
};

export default RHFRaqPage;
