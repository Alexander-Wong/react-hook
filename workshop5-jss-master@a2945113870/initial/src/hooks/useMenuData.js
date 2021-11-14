import { useLocation } from 'react-router-dom';

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
      url: '/vehicle/tundra',
      RAQUrl: '/raq-rhf?vehicle=tundra',
      isVehicle: true,
      image: 'https://www.toyota.com//config/pub/3d/toyota/1006410/1000868/Exterior/1/864_477_PNG/586c2fe-040d198-bf0b531-32103b0-dab8df2-0bbf97d-2a4c208-60a038f-bb854ab-9d54d10-0e5c9a8-84a239b-bdbfe7f-cefafde-c1b0c3e-66a2f16-3751615-aba1d8f-dd53cb9.png',
      text: 'Tundra comes standard with a tow hitch receiver, auxiliary engine oil and transmission'
    },
    {
      id: 'rav4',
      name: '2020 Rav4',
      url: '/vehicle/rav4',
      RAQUrl: '/raq-rhf?vehicle=rav4',
      isVehicle: true,
      image: 'https://www.toyota.com/config/pub/3d/toyota/1006410/1000863/exterior/1/380_214_PNG/2bcc2b7-b08a004-aeb20d5-3345378-522d205-3022bd5-326a570-1d41b68-c484786-ce674c1-2041342-1d1a087-d0ea3e7-6568bb1-9876c26-75a8d7d-2e81e93-40ab77b-e3ca04f.png',
      text: 'RAV4 features standard Multi-Terrain Select (MTS) on All-Wheel Drive (AWD) gas models.'
    },
    {
      id: 'raqRHF',
      name: 'Request a Quote - RHF',
      url: '/raq-rhf'
    },
    {
      id: 'raqControlled',
      name: 'Request a Quote - Controlled',
      url: '/raq-controlled'
    }
  ].filter((item) => {
    return ignoreCurrentPath ? item.url !== location.pathname : true;
  });

  return linkItems;
};

export default useMenuData;
