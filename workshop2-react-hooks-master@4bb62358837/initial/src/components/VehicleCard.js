import React from 'react';

const VehicleCard = ({ vehicleData }) => {
  return (
    <section className="content__section">
      <img src={vehicleData.img} alt={vehicleData.colorName} />
      <h2>{vehicleData.price}</h2>
      <div><strong>Exterior Color:</strong> {vehicleData.colorName}</div>
    </section>
  );
};

export default VehicleCard;
