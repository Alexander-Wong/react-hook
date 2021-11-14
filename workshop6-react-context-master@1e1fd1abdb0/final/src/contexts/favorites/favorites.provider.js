import React, { useReducer } from 'react';

import { FavoritesContext } from './favorites.context';
import { favoritesReducer } from './favorites.reducer';

export const FavoritesProvider = ({ children }) => {
  const [favoritesState, favoritesDispatch] = useReducer(favoritesReducer, []);

  return (
    <FavoritesContext.Provider value={{ favoritesState, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};
