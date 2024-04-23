import { SVGRender } from '../SVGRender/SVGRender';
import style from './CamperHeader.module.css';
import { svgIcons } from '../../data/svgIcons';
import { useState } from 'react';

export const CamperHeader = ({
  handleAddFavorite,
  handleDeleteFavorite,
  camperId,
  price,
  name,
  favorite,
  rating,
  reviews,
  location,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      handleAddFavorite(camperId);
    } else {
      handleDeleteFavorite(camperId);
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
