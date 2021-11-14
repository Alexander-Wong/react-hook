import React from 'react';

import { useStyles } from './ControlledSelect.styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const ControlledSelect = ({ label, labelId, options, handleChange, value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        className={classes.select}
        value={value}
        onChange={({ target }) => handleChange(target.value)}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ControlledSelect;
