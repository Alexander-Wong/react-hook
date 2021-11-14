import React from 'react';
import VehicleColorsItem from './VehicleColorsItem';

function VehicleColorsList (props) {

  return (
    <div className="colors">
      {props.colorData.map((color, index) => {
       return <VehicleColorsItem 
        key={color.colorId} 
        index ={index}
        color={color} 
        currentColor={props.currentColor}
        updateCurrentColor = {props.updateCurrentColor} />
      })};
    </div>
  );
}

export default VehicleColorsList;