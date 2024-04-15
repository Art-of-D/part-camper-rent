import style from './FilterInput.module.css';
export const FilterInput = () => {
  return (
    <>
      <input
        className={style.locationInpute}
        placeholder="Kyiv, Ukraine"
      ></input>
    </>
  );
};
