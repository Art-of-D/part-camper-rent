import axios from 'axios';

axios.defaults.baseURL = 'https://661a98e465444945d04e1960.mockapi.io/api/v1/';

export const fetchAllData = async () => {
  const { data } = await axios.get('catalog/');
  return data;
};

export const fetchAllFavorites = async () => {
  const { data } = await axios.get('favorite/');
  return data;
};

export const deleteFavoriteCamper = async id => {
  console.log('id', id);
  const resp = await axios.delete(`favorite/${id}`);
  return resp;
};

export const addFavoriteCamper = async ({
  _id,
  name,
  price,
  rating,
  location,
  adults,
  children,
  engine,
  transsmission,
  form,
  length,
  width,
  height,
  tank,
  conssumption,
  description,
  details,
  gallery,
  reviews,
}) => {
  const resp = await axios.post('favorite/', {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transsmission,
    form,
    length,
    width,
    height,
    tank,
    conssumption,
    description,
    details,
    gallery,
    reviews,
  });
  return resp;
};
