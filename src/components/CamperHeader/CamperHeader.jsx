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
import { svgIcons } from '../../data/svgIcons';

export const CamperHeader = ({
  price,
  name,
  favorite,
  rating,
  reviews,
  location,
}) => {
  const favoriteCatalog = useSelector(getFavorites);
  const catalog = useSelector(getCatalog);
  const CAMPER_ID = 'data-camperid';
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
      <div className={style.secondLineWrapper}>
        <SVGRender
          className={style.starIcon}
          svgString={svgIcons.star.svgIcon}
        />
        <p
          className={style.textReviews}
        >{`${rating}(${reviews.length} Reviews)`}</p>
        <SVGRender
          className={style.locationIcon}
          svgString={svgIcons.location.svgIcon}
        />
        <p className={style.textLocation}>{location}</p>
      </div>
    </>
  );
};
