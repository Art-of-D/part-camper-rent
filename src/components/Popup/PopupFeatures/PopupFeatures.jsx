//import { SVGRender } from '../../SVGRender/SVGRender';
import style from './PopupFeatures.module.css';
import { svgIcons } from '../../../data/svgIcons';
import { CamperDetails } from '../../CamperDetails/CamperDetails';
import { v4 as uuidv4 } from 'uuid';

export const PopupFeatures = ({
  _id,
  form,
  length,
  width,
  height,
  tank,
  consumption,
  details,
  adults,
  children,
}) => {
  return (
    <>
      <div className={style.detailsWrapper}>
        <ul className={style.detailsList}>
          {Object.keys({ ...details, adults, children }).map(key => {
            const { svgIcon, name } = svgIcons[key];
            return (
              <CamperDetails
                key={uuidv4()}
                name={name}
                svgIcon={svgIcon}
                camperId={_id}
              />
            );
          })}
        </ul>
        <h3 className={style.header3}>Vehicle details</h3>
        <ul className={style.vehicleDetailsList}>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p className={style.textVehicleDetails}>Form</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{form}</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p>Length</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{length}</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p className={style.textVehicleDetails}>Width</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{width}</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p className={style.textVehicleDetails}>Height</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{height}</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p className={style.textVehicleDetails}>Tank</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{tank}</p>
              </li>
            </ul>
          </li>
          <li>
            <ul className={style.vehicleDetailsInnerList}>
              <li>
                <p className={style.textVehicleDetails}>Consumption</p>
              </li>
              <li>
                <p className={style.textVehicleDetails}>{consumption}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
