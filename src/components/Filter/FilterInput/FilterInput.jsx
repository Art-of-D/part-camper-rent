import { useDispatch, useSelector } from 'react-redux';
import { svgIcons } from '../../../data/svgIcons';
import { SVGRender } from '../../SVGRender/SVGRender';
import style from './FilterInput.module.css';
import { getLocation } from '../../../redux-store/filter/selectors';
import { setLocation } from '../../../redux-store/filter/filterReducer';

export const FilterInput = () => {
  const ICON = 'location';
  const { svgIcon } = svgIcons[ICON];
  const location = useSelector(getLocation);
  const dispatch = useDispatch();
  const handleChange = e => dispatch(setLocation(e.target.value));
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.locationInpute}
        placeholder="City"
        value={location}
        onChange={handleChange}
      />
      <SVGRender className={style.inputSVG} svgString={svgIcon} />
    </div>
  );
};
