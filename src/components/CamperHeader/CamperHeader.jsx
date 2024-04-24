import { SVGRender } from '../SVGRender/SVGRender';
import style from './CamperHeader.module.css';
import { svgIcons } from '../../data/svgIcons';
import { CamperFavorite } from './CapmerFavorite/CamperFavorite';

export const CamperHeader = ({ camper }) => {
  const { price, name, rating, reviews, location } = camper;
  return (
    <>
      <div className={style.firstLineWrapper}>
        <h2 className={style.header2}>{name}</h2>
        <div className={style.firstLineInnerWrapper}>
          <h2 className={style.header2}>{`€${price},00`}</h2>
          <CamperFavorite camper={camper} />
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
