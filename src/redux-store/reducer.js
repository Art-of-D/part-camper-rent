import { catalogReducer } from './catalog/catalogSlice';
import favoritesReducer from './favorites/favoritesReducer';

export const reducer = {
  catalog: catalogReducer,
  favorites: favoritesReducer,
};
