import { SVGRender } from '../../SVGRender/SVGRender';
import style from './CatalogDetails.module.css';
import { useSelector } from 'react-redux';
import { getCatalog } from '../../../redux-store/catalog/selectors';

export const CatalogDetails = ({ type, svgIcon, name, camperId }) => {
  const catalog = useSelector(getCatalog);
  const specialDetails = ['adults', 'beds'];
  const special = 'adults';

  const getSpecialValue = () => {
    if (specialDetails.includes(name)) {
      const camper = catalog.find(camper => camper._id === camperId);
      if (camper) {
        switch (name) {
          case special:
            return `${camper[name]} ${name}`;
          default:
            return `${camper.details[name]} ${name}`;
        }
      }
    }
    return null;
  };

  const specialValue = getSpecialValue();
  return (
    <div className={style[type + 'Div']}>
      <SVGRender className={style[type + 'SVG']} svgString={svgIcon} />
      <label className={style[type + 'Label']} htmlFor={name}>
        {specialValue !== null ? specialValue : name}
      </label>
    </div>
  );
};
