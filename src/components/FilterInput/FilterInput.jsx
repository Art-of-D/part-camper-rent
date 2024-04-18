import { svgIcons } from '../../data/svgIcons';
import { SVGRender } from '../SVGRender/SVGRender';
import style from './FilterInput.module.css';

export const FilterInput = () => {
  const ICON = 'location';
  const { svgIcon } = svgIcons[ICON];
  return (
    <div className={style.inputWrapper}>
      <input className={style.locationInpute} placeholder="City" />
      <SVGRender className={style.inputSVG} svgString={svgIcon} />
    </div>
  );
};
