import style from './CamperImage.module.css';
export const CamperImage = () => {
  return (
    <>
      <img className={style.camperImg} src={imgSrc} alt={name} />
    </>
  );
};