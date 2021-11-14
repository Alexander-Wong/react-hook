import React, { useState, useEffect, useCallback } from 'react';
import useVehiclesData from '../hooks/useVehiclesData';

import Headline from '../components/Headline';
import Loader from '../components/Loader';
import Error from '../components/Error';
import VehicleCard from '../components/VehicleCard';
import VehicleColorsList from '../components/VehicleColorsList';

const VehicleDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState({});
  const { error, isLoading, data } = useVehiclesData('rav4');

  const handleSelectColor = useCallback(colorData => setSelectedColor(colorData), [setSelectedColor]);

  useEffect(() => {
    data && setSelectedColor(data.exteriorColors[0]);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Headline text={data.vehicleName} />
      <VehicleCard vehicleData={selectedColor} />
      <VehicleColorsList
        colorsData={data.exteriorColors}
        selectedColorId={selectedColor.id}
        handleSelectColor={handleSelectColor} 
        />
    </>
  );
};

export default VehicleDetailsPage;
