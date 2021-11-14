import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const VehicleCard = ({ colorData }) => {
  const classes = useStyles();
  return (
    <section className="content__section">
      <img
        src={colorData.img}
        alt={colorData.name}
        className={classes.vehicleImage}
      />
      <h2>{colorData.price}</h2>
      <div>
        <strong>Exterior Color:</strong> {colorData.name}
      </div>
    </section>
  );
};

export const useStyles = makeStyles({
  vehicleImage: {
    maxWidth: '380px'
  }
});

export default VehicleCard;
