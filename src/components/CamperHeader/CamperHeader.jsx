import { SVGRender } from '../SVGRender/SVGRender';
import style from './CamperHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteThunk,
  deleteFavoriteThunk,
} from '../../redux-store/favorites/thunks';
import { getFavorites } from '../../redux-store/favorites/selectors';
import { getCatalog } from '../../redux-store/catalog/selectors';
import { findCamper } from '../../utils/findCamper';

export const CamperHeader = ({ price, name, favorite }) => {
  const favoriteCatalog = useSelector(getFavorites);
  const catalog = useSelector(getCatalog);
  const dispatch = useDispatch();

  const handleFavoriteClick = event => {
    if (!event.target) {
      return;
    }

    const clickedElement = event.target.closest(`.${style.favoriteIcon}`);

    if (!clickedElement) return;

    const camperId = event.target
      .closest(`.${style.listElement}`)
      .getAttribute(CAMPER_ID);
    const camperToDelete = findCamper(favoriteCatalog, camperId);
    if (camperToDelete === undefined) {
      dispatch(addFavoriteThunk(findCamper(catalog, camperId)));
    } else {
      dispatch(deleteFavoriteThunk(camperToDelete._id));
    }
  };
  return (
    <>
      <div className={style.firstLineWrapper}>
        <h2 className={style.header2}>{name}</h2>
        <div className={style.firstLineInnerWrapper}>
          <h2 className={style.header2}>{`€${price},00`}</h2>
          <div onClick={handleFavoriteClick}>
            <SVGRender
              className={`${favorite ? style.favoriteIconActive : ''} ${
                style.favoriteIcon
              }`}
              svgString={svgIcons.favorite.svgIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};
