import { useRef } from 'react';

export const CatalogElement = ({
  camper: {
    _id = null,
    name = '',
    price = 0,
    reviews = 0,
    location = '',
    description = '',
    details = '',
    gallery = [],
  },
}) => {
  return (
    <>
      <li camperId={_id}>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <p>{reviews.length}</p>
        <p>{location}</p>
        <p>{description}</p>
        <div>{details.length}</div>
        <button>Show more</button>
      </li>
    </>
  );
};
