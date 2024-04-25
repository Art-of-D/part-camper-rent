import { catalogReducer } from './catalog/catalogSlice';
import favoritesReducer from './favorites/favoritesReducer';
import filterReducer from './filter/filterReducer';

export const reducer = {
  catalog: catalogReducer,
  favorites: favoritesReducer,
  filters: filterReducer,
};
