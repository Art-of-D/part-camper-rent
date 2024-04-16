import { SVGRender } from '../../SVGRender/SVGRender';
import style from './CatalogDetails.module.css';

export const CatalogDetails = ({ type, svgIcon, name }) => {
  return (
    <div className={style[type + 'Div']}>
      <SVGRender className={style[type + 'SVG']} svgString={svgIcon} />
      <label className={style[type + 'Label']} htmlFor={name}>
        {name}
      </label>
    </div>
  );
};
