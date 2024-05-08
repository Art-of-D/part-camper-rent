export const filteredList = (arr, filters) => {
  const {
    location,
    filters: { vehicleEquipment, vehicleType },
  } = filters;
  const data = arr.filter(camper => {
    const firstPass =
      vehicleEquipment.length > 0
        ? vehicleEquipment.some(
            item =>
              item === 'automatic' ||
              Object.keys(camper.details).some(key => key === item)
          )
        : true;
    const secondPass =
      vehicleType.length > 0 ? vehicleType.includes(camper.form) : true;
    const thirdPass = () => {
      if (location.length > 0) {
        const camperLocation = camper.location.toLowerCase();
        const filterLocation = filters.location.toLowerCase();
        return camperLocation.includes(filterLocation);
      }
      return true;
    };

    return firstPass && secondPass && thirdPass();
  });
  return data;
};

export const isChecked = (name, arr) => {
  if (arr) {
    return arr.some(item => item === name);
  }
  return false;
};
