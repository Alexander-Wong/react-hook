import React from 'react';
import VehicleColorsItem from '../components/VehicleColorsItem';

const VehicleColorsList = ({
  colorsData,
  selectedColorId,
  handleSelectColor
}) => {
  return (
    <section className="content__section">
      {colorsData.map((color) => {
        return (
          <VehicleColorsItem
            key={color.id}
            colorData={color}
            isSelected={color.id === selectedColorId}
            handleSelectColor={handleSelectColor}
          />
        );
      })}
    </section>
  );
};

export default VehicleColorsList;
