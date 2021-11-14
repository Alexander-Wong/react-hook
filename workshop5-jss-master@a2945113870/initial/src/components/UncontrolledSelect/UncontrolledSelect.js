import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useStyles } from './UncontrolledSelect.styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const UncontrolledSelect = ({
  name,
  label,
  labelId,
  defaultValue,
  options,
  handleChange
}) => {
  const classes = useStyles();
  const { control } = useFormContext();

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ onChange, ...rest }) => (
          <Select
            {...rest}
            labelId={labelId}
            label={label}
            className={classes.select}
            onChange={({ target }) => {
              const targetValue = target.value;

              onChange(targetValue);
              handleChange(targetValue);
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default UncontrolledSelect;
