import { SVGRender } from '../SVGRender/SVGRender';
import style from './FilterCheckbox.module.css';

export const FilterCheckbox = ({ type, svgIcon, name }) => {
  let classNaming = '';
  switch (type) {
    case 'vehicleEquipment':
      classNaming = 'vehicleEquipment';
      break;
    case 'vehicleType':
      classNaming = 'vehicleType';
      break;
  }
  console.log('classNaming', classNaming);
  return (
    <div className={style[classNaming + 'Div']}>
      <input
        className={`visually-hidden ${style[classNaming + 'Input']}`}
        type="checkbox"
        id={name}
        name={name}
      ></input>
      <SVGRender className={style[classNaming + 'SVG']} svgString={svgIcon} />
      <label className={style[classNaming + 'Label']} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
