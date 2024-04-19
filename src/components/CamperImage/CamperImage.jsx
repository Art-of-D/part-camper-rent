import style from './CamperImage.module.css';
export const CamperImage = ({ img, name }) => {
  return (
    <>
      <img className={style.camperImg} src={img} alt={name} />
    </>
  );
};
