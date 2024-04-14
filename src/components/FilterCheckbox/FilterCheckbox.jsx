import { SVGRender } from '../SVGRender/SVGRender';

export const FilterCheckbox = ({ svgIcon, name }) => {
  return (
    <>
      <input type="checkbox" id={name} name={name}></input>
      <label htmlFor={name}>
        <SVGRender svgString={svgIcon} />
        {name}
      </label>
    </>
  );
};
