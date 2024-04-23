import { SVGRender } from '../SVGRender/SVGRender';
import style from './CategoryElement.module.css';
import { useRef } from 'react';

export const CategoryElement = ({ type, svgIcon, name }) => {
  const divRef = useRef(null);
  const handleDivClick = () => {
    const checkbox = document.getElementById(name);
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        divRef.current.classList.add(style.checkedInput);
      } else {
        divRef.current.classList.remove(style.checkedInput);
      }
    }
  };
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
