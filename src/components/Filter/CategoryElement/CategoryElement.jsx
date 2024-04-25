import { SVGRender } from '../../SVGRender/SVGRender';
import style from './CategoryElement.module.css';
import { useEffect, useRef } from 'react';

export const CategoryElement = ({
  type,
  svgIcon,
  name,
  handleAddToFilter,
  handleRemoveFromFilter,
  checked,
}) => {
  const divRef = useRef(null);
  const handleDivClick = () => {
    if (!checked) {
      handleAddToFilter({ type, item: name });
    } else {
      handleRemoveFromFilter({ type, item: name });
    }
  };

  useEffect(() => {
    if (checked) {
      divRef.current.classList.add(style.checkedInput);
    } else {
      divRef.current.classList.remove(style.checkedInput);
    }
  }, [checked]);
  return (
    <div ref={divRef} className={style[type + 'Div']} onClick={handleDivClick}>
      <input
        className="visually-hidden"
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
