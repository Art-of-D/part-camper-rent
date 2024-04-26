import style from './Popup.module.css';
import { CamperImage } from '../CamperImage/CamperImage';
import { PopupHeader } from './PopupHeader/PopupHeader';
import { v4 as uuidv4 } from 'uuid';
import { PopupFeatures } from './PopupFeatures/PopupFeatures';
import { PopupReviews } from './PopupReviews/PopupReviews';
import { useEffect, useRef, useState } from 'react';
import { PopupBooking } from './PopupBooking/PopupBooking';

export const Popup = ({ closePopup, camper, handleClickOutside }) => {
  const {
    _id,
    name,
    price,
    adults,
    beds,
    children,
    hob,
    rating,
    reviews,
    location,
    description,
    details,
    gallery,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;
  const popupRef = useRef(null);
  const [activeSection, setActiveSection] = useState('features');
  const toggleSection = () => {
    setActiveSection(activeSection === 'features' ? 'reviews' : 'features');
  };

  useEffect(() => {
    const handleClick = event => {
      if (popupRef.current === event.target) {
        handleClickOutside();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClickOutside, popupRef]);

  return (
    <div ref={popupRef} className={style.popupOverlay}>
      <div className={style.popupWrapper}>
        <div className={style.closeButton} onClick={closePopup}></div>
        <div className={style.camperInfoWrapper} data-camperid={_id}>
          <PopupHeader
            name={name}
            price={price}
            location={location}
            rating={rating}
            reviews={reviews}
          />
        </div>
        <div className={style.scrollPart}>
          <ul className={style.camperImgList}>
            {gallery.map((img, index) => {
              return (
                <li key={uuidv4()}>
                  <CamperImage img={img} alt={`${name}-${index}`} />
                </li>
              );
            })}
          </ul>
          <p className={style.textDescription}>{description}</p>
          <ul className={style.featuresReviewsList}>
            <li
              key={uuidv4()}
              className={style.featuresReviews}
              onClick={toggleSection}
            >
              <h3
                className={`${style.header3} ${
                  activeSection === 'features' ? style.header3Active : ''
                }`}
              >
                Features
              </h3>
            </li>
            <li
              key={uuidv4()}
              className={style.featuresReviews}
              onClick={toggleSection}
            >
              <h3
                className={`${style.header3} ${
                  activeSection === 'reviews' ? style.header3Active : ''
                }`}
                onClick={toggleSection}
              >
                Reviews
              </h3>
            </li>
          </ul>
          <div className={style.popupBottom}>
            {activeSection === 'features' && (
              <PopupFeatures
                details={details}
                form={form}
                length={length}
                width={width}
                height={height}
                tank={tank}
                consumption={consumption}
                adults={adults}
                beds={beds}
                childrenPlace={children}
                hob={hob}
              />
            )}
            {activeSection === 'reviews' && <PopupReviews reviews={reviews} />}
            <PopupBooking />
          </div>
        </div>
      </div>
    </div>
  );
};
