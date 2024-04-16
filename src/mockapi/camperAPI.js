import axios from 'axios';

axios.defaults.baseURL =
  'https://661a98e465444945d04e1960.mockapi.io/api/v1/catalog';

export const fetchAllData = async () => {
  const { data } = await axios.get('/');
  return data;
};

export const getCamperById = async id => {
  const resp = await axios.get(`/${id}`);
  return resp;
};
