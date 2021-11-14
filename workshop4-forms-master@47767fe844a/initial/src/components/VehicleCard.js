import React from 'react';

const VehicleCard = ({ colorData }) => {
  return (
    <section className="content__section">
      <img src={colorData.img} alt={colorData.name} />
      <h2>{colorData.price}</h2>
      <div>
        <strong>Exterior Color:</strong> {colorData.name}
      </div>
    </section>
  );
};

export default VehicleCard;
