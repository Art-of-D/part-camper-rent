export const findCamper = (array, camperId) => {
  if (array.length === 0) {
    return false;
  }
  return array.find(({ _id }) => {
    return camperId === _id;
  });
};
