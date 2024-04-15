import { v4 as uuidv4 } from 'uuid';
import { CatalogElement } from '../CatalogElement/CatalogElement';

export const Catalog = ({ catalog }) => {
  return (
    <>
      <ul>
        {catalog.map((camper, index) => {
          return <CatalogElement key={uuidv4()} id={index} camper={camper} />;
        })}
      </ul>
    </>
  );
};
