import React from 'react';
import { useStyles } from './RaqSummary.styles';

const RaqSummary = ({ selectedColor, selectedVehicle }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3>Your Request</h3>
      {selectedVehicle && <p>{selectedVehicle.name}</p>}
      {selectedColor && (
        <>
          <img
            src={selectedColor.img}
            alt={selectedColor.name}
            className={classes.raqImage}
          />
          <p>{selectedColor.name}</p>
          <p>{selectedColor.price}</p>
        </>
      )}
    </div>
  );
};

export default RaqSummary;
