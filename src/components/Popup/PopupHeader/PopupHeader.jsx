import { SVGRender } from '../../SVGRender/SVGRender';
import style from './PopupHeader.module.css';
import { svgIcons } from '../../../data/svgIcons';

export const PopupHeader = ({
  price,
  name,
  favorite,
  rating,
  reviews,
  location,
}) => {
  return (
    <>
      <h2 className={style.header2}>{name}</h2>
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
      <h2 className={style.header2}>{`€${price},00`}</h2>
    </>
  );
};
