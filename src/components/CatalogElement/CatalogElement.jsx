import style from './CatalogElement.module.css';
import { svgIcons } from '../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';
import { CamperDetails } from '../CamperDetails/CamperDetails';

import { useEffect, useState } from 'react';
import { Popup } from '../Popup/Popup';
import { CamperHeader } from '../CamperHeader/CamperHeader';
import { CamperImage } from '../CamperImage/CamperImage';

export const CatalogElement = ({ camper }) => {
  const {
    adults,
    name,
    description,
    transmission,
    engine,
    kitchen,
    beds,
    details: { AC },
    gallery,
  } = camper;

  const [isOpen, setIsOpen] = useState(false);

  const details = { adults, transmission, engine, kitchen, beds, AC };

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleClick = () => {
    openPopup();
  };

  const handleClose = () => {
    closePopup();
  };

  const handleClickOutside = () => {
    closePopup();
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc, false);
    } else {
      document.removeEventListener('keydown', handleEsc, false);
    }
  }, [isOpen, closePopup]);

  return (
    <>
      <li className={style.listElement}>
        <CamperImage img={gallery[0]} alt={name} />
        <div className={style.camperInfoWrapper}>
          <CamperHeader camper={camper} />
          <p className={style.textDescription}>{description}</p>
          <ul className={style.detailsList}>
            {Object.keys(details).map(key => {
              const { svgIcon, name } = svgIcons[key];
              return (
                <CamperDetails
                  key={uuidv4()}
                  name={name}
                  svgIcon={svgIcon}
                  camper={camper}
                />
              );
            })}
          </ul>
          <button className={style.camperButton} onClick={handleClick}>
            Show more
          </button>
        </div>
      </li>
      {isOpen && (
        <Popup
          camper={camper}
          closePopup={handleClose}
          handleClickOutside={handleClickOutside}
        />
      )}
    </>
  );
};
