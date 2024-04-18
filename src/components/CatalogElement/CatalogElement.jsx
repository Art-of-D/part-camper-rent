import style from './CatalogElement.module.css';
import { SVGRender } from '../SVGRender/SVGRender';
import { svgIcons } from '../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';
import { CatalogDetails } from './CatalogDetails/CatalogDetails';

import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { CamperHeader } from '../CamperHeader/CamperHeader';
import { CamperImage } from '../CamperImage/CamperImage';

export const CatalogElement = ({ favorite, camper }) => {
  const { _id, name, price, rating, reviews, location, description, gallery } =
    camper;
  const [isOpen, setIsOpen] = useState(false);
  const TYPE = 'details';
  const CAMPER_ID = 'data-camperid';
  const detailsList = [
    'adults',
    'transmission',
    'engine',
    'kitchen',
    'beds',
    'airCooler',
  ];

  const handleClick = () => {
    console.log('open');
    openPopup();
  };

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <li className={style.listElement} data-camperid={_id}>
        <CamperImage className={style.camperImg} src={gallery[0]} alt={name} />
        <div className={style.camperInfoWrapper}>
          <div>
            <CamperHeader
              name={name}
              price={price}
              location={location}
              favorite={favorite}
              rating={rating}
              reviews={reviews}
            />
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
          </div>
          <p className={style.textDescription}>{description}</p>
          <div className={style.detailsWrapper}>
            {detailsList.map(key => {
              const { svgIcon, name } = svgIcons[key];
              return (
                <CatalogDetails
                  key={uuidv4()}
                  type={TYPE}
                  name={name}
                  svgIcon={svgIcon}
                  camperId={_id}
                />
              );
            })}
          </div>
          <button className={style.camperButton} onClick={handleClick}>
            Show more
          </button>
        </div>
      </li>
      {isOpen && <Popup camper={camper} />}
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
