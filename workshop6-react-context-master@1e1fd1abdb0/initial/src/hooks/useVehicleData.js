import { useQuery } from 'react-query';

const getVehicleById = async (_, vehicleId) => {
  const response = await fetch(
    'https://run.mocky.io/v3/b2466bf6-3319-46ce-8750-a253e8597779'
  );

  const data = await response.json();
  return data.find((vehicle) => vehicle.id === vehicleId);
};

const useVehiclesData = (vehicleId) => {
  return useQuery(['vehicle', vehicleId], getVehicleById);
};

export default useVehiclesData;
