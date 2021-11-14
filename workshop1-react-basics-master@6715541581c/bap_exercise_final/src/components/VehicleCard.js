import React from 'react';

function VehicleCard (props) {
      return (
        <div className="vehicle-card">
          <img src={props.vehicleData.img} alt={props.vehicleData.colorName}/>
          <VehicleCardText vehicleData={props.vehicleData} />
        </div>
      );
}

function VehicleCardText (props) {return (
      <>
        <h2 className="vehicle-price">{props.vehicleData.price}</h2>
        <div className="vehicle-price">{`Exterior Color: ${props.vehicleData.colorName}`}</div>
      </>
    );
}


export default VehicleCard;