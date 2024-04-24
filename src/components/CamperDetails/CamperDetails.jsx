import { SVGRender } from '../SVGRender/SVGRender';
import style from './CamperDetails.module.css';

export const CamperDetails = ({ svgIcon, name, camper }) => {
  const specialDetails = [
    'beds',
    'hob',
    'airConditioner',
    'adults',
    'children',
  ];
  const special = ['adults', 'children'];

  const getRightForm = () => {
    if (specialDetails.includes(name)) {
      if (camper) {
        if (special.includes(name)) {
          return `${camper[name]} ${name}`;
        } else {
          return `${camper.details[name]} ${name}`;
        }
      }
    }
    return name;
  };

  const rightLabel = getRightForm();
  return (
    <li className={style.detailsLi}>
      <SVGRender className={style.detailsSVG} svgString={svgIcon} />
      <label className={style.detailsLabel} htmlFor={name}>
        {rightLabel}
      </label>
    </li>
  );
};
