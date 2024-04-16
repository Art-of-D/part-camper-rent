import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../CatalogElement/CatalogElement';
import style from './Catalog.module.css';

export const Catalog = ({ catalog = [] }) => {
  return (
    <>
      {catalog.length === 0 ? (
        <p className={style.textNone}>There is no campers for this order</p>
      ) : (
        <ul className={style.catalogList}>
          {catalog.map((camper, index) => {
            return <CatalogElement key={uuidv4()} id={index} camper={camper} />;
          })}
        </ul>
      )}
    </>
  );
};
