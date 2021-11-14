import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';

import useVehicleData from '../hooks/useVehicleData';
import { useFavoritesContext } from '../hooks/useFavoritesContext';

import Headline from '../components/Headline';
import Loader from '../components/Loader';
import Error from '../components/Error';
import VehicleCard from '../components/VehicleCard';
import VehicleColorsList from '../components/VehicleColorsList';

const VehicleDetailsPage = () => {
  let { vehicleId } = useParams();
  const [selectedColor, setSelectedColor] = useState({});
  const { error, isLoading, data } = useVehicleData(vehicleId);
  const { favoritesState, favoritesDispatch } = useFavoritesContext();

  const isFavorite = favoritesState.some((fav) => fav.id === data?.id);
  const favoritesBtnText = isFavorite
    ? 'Remove from Favorites'
    : 'Add to Favorites';

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
      <Button
        variant="contained"
        color="primary"
        startIcon={<FavoriteIcon />}
        onClick={() => {
          favoritesDispatch({
            type: 'UPDATE_FAVORITE',
            payload: data
          });
        }}
      >
        {favoritesBtnText}
      </Button>
    </>
  );
};

export default VehicleDetailsPage;
