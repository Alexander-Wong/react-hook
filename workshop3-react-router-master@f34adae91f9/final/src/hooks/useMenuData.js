
import {useLocation} from "react-router-dom";

const useMenuData = (ignoreCurrentPath = false) => {

  let location = useLocation();

  const linkItems = [
    {
      id: 'vs',
      name: 'Vehicle Selection',
      url: '/'
    },
    {
      id: 'tundra',
      name: '2021 Tundra',
      url: '/vehicle/tundra'
    },
    {
      id: 'rav4',
      name: '2020 Rav4',
      url: '/vehicle/rav4'
    },
    {
      id: 'raq',
      name: 'Request a Quote',
      url: '/raq',
    }
  ]
  .filter(item => {
    return ignoreCurrentPath ? item.url !== location.pathname : true;
  });;

  return linkItems;
};

export default useMenuData;
