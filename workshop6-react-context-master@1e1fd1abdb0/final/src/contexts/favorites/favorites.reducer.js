export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITE':
      const exists = state.some((fav) => fav.id === action.payload.id);

      if (exists) {
        return state.filter((fav) => fav.id !== action.payload.id);
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
};
