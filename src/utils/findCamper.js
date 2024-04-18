export const findCamper = (array, camperId) => {
  return array.find(({ _id }) => {
    return camperId === _id;
  });
};
