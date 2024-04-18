import { catalogReducer } from './catalog/catalogSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

export const reducer = {
  catalog: catalogReducer,
  favorites: favoritesReducer,
};
