import { SVGRender } from '../SVGRender/SVGRender';
import style from './CategoryElement.module.css';

export const CategoryElement = ({ type, svgIcon, name }) => {
  return (
    <div className={style[type + 'Div']}>
      <input
        className={`visually-hidden ${style[type + 'Input']}`}
        type="checkbox"
        id={name}
        name={name}
      ></input>
      <SVGRender className={style[type + 'SVG']} svgString={svgIcon} />
      <label className={style[type + 'Label']} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
