import { useQuery } from 'react-query';

const useVehiclesData = () => {
  return useQuery('vehicles', async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/b2466bf6-3319-46ce-8750-a253e8597779'
    );
    return response.json();
  });
};

export default useVehiclesData;
