import React from 'react';

import { useFavoritesContext } from '../hooks/useFavoritesContext';

const FavoritesPage = () => {
  const { favoritesState } = useFavoritesContext();

  if (!favoritesState.length) {
    return <div>You don't have favorites yet!</div>;
  }

  return (
    <ul>
      {favoritesState.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}
    </ul>
  );
};

export default FavoritesPage;
