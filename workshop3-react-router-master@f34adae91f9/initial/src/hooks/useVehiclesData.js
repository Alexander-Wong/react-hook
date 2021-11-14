import { useQuery } from 'react-query';

const useVehiclesData = (model) => {
  let url ='';

  switch (model) {
    case 'tundra': 
      url = 'https://run.mocky.io/v3/4844a8a8-f61c-4ac7-88be-618a202de5d0';
      break;
    case 'rav4':
      url = 'https://run.mocky.io/v3/e955fc3a-a665-48a9-8471-8a9bc095581a'
      break;
    default:
      break;
  }

  return useQuery('vehiclesData' + model, async () => {
    const response = await fetch(url);
    return response.json();
  });
};

export default useVehiclesData;
