import { style } from './Popup.module.css';
import { CamperImage } from '../CamperImage/CamperImage';
import { CamperHeader } from '../CamperHeader/CamperHeader';

export const Popup = ({
  _id,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  gallery,
}) => {
  return (
    <div className={style.popupOverlay}>
      <div className={style.popupWrapper}>
        <button className={style.closeButton}></button>
        <div className={style.camperInfoWrapper}>
          <CamperHeader
            name={name}
            price={price}
            location={location}
            rating={rating}
            reviews={reviews}
          />
          {gallery.map((img, index) => {
            <CamperImage src={img} alt={`${name}-${index}`} />;
          })}

          <p className={style.textDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};
