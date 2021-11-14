import React from 'react';
import LinkCTA from '../components/LinkCTA';
import useMenuData from '../hooks/useMenuData';
import Headline from '../components/Headline';

const VehicleSelectionPage = () => {

  const menuData = useMenuData();

  return (
    <>
      <Headline text="Vehicle Selection Page" />
      {menuData.map(link => {
        return (
          <LinkCTA link={link} key={link.id} />
        );
      })}
    </>
  );
};

export default VehicleSelectionPage;
