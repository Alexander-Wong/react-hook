import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import useVehicleData from '../hooks/useVehicleData';

import Headline from '../components/Headline';
import Loader from '../components/Loader';
import Error from '../components/Error';
import VehicleCard from '../components/VehicleCard';
import VehicleColorsList from '../components/VehicleColorsList';

const VehicleDetailsPage = () => {
  let { vehicleId } = useParams();
  const [selectedColor, setSelectedColor] = useState({});
  const { error, isLoading, data } = useVehicleData(vehicleId);

  const handleSelectColor = useCallback(
    (colorData) => setSelectedColor(colorData),
    [setSelectedColor]
  );

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
      <Headline text={data.name} />
      <VehicleCard colorData={selectedColor} />
      <VehicleColorsList
        colorsData={data.exteriorColors}
        selectedColorId={selectedColor.id}
        handleSelectColor={handleSelectColor}
      />
    </>
  );
};

export default VehicleDetailsPage;
