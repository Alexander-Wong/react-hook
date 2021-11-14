import { useQuery } from 'react-query';

const useVehiclesData = () => {
  return useQuery('vehiclesData', async () => {
    const response = await fetch('https://run.mocky.io/v3/e955fc3a-a665-48a9-8471-8a9bc095581a');
    return response.json();
  });
};

export default useVehiclesData;
