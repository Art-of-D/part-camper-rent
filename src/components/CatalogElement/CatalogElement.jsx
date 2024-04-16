import { useRef } from 'react';
import style from './CatalogElement.module.css';
import { SVGRender } from '../SVGRender/SVGRender';
import { svgIcons } from '../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';
import { CatalogDetails } from './CatalogDetails/CatalogDetails';

export const CatalogElement = ({
  camper: {
    _id = null,
    name = '',
    price = 0,
    rating = 0,
    reviews = [],
    location = '',
    description = '',
    details = {},
    gallery = [],
  },
}) => {
  //const type = 'details';
  return (
    <>
      <li className={style.listElement} camperId={_id}>
        <img className={style.camperImg} src={gallery[0]} alt={name} />
        <div className={style.camperInfoWrapper}>
          <div className={style.firstLineWrapper}>
            <h2 className={style.header2}>{name}</h2>
            <div className={style.firstLineInnerWrapper}>
              <h2 className={style.header2}>{`€${price}`}</h2>
              <SVGRender
                className={style.favoriteIcon}
                svgString={svgIcons.favorite.svgIcon}
              />
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
          <p className={style.textDescription}>{description}</p>
          <div className={style.detailsWrapper}></div>
          <button className={style.camperButton}>Show more</button>
        </div>
      </li>
    </>
  );
};
/*
{Object.keys(details).map(key => {
  if (svgIcons.hasOwnProperty(key)) {
    const { svgIcon, name } = svgIcons[key];
    return (
      <CatalogDetails
        key={uuidv4()}
        type={type}
        svgIcon={svgIcon}
        name={name}
      />
    );
  }
  return;
})}*/
