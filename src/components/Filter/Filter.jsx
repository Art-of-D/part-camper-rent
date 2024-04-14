import { FilterInput } from '../FilterInput/FilterInput';
import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { vehicleEquipment } from '../../data/vehicle-equipment-v1';
import { vehicleType } from '../../data/vehicle-type-v1';
import { v4 as uuidv4 } from 'uuid';

export const Filter = () => {
  return (
    <>
      <form>
        <p>Location</p>
        <FilterInput />
        <p>Filters</p>
        <h2>Vehicle equipment</h2>
        {Object.keys(vehicleEquipment).map(key => {
          const { svgIcon, name } = vehicleEquipment[key];
          return (
            <FilterCheckbox key={uuidv4()} name={name} svgIcon={svgIcon} />
          );
        })}
        <h2>Vehicle type</h2>
        {Object.keys(vehicleType).map(key => {
          const { svgIcon, name } = vehicleType[key];
          return (
            <FilterCheckbox key={uuidv4()} name={name} svgIcon={svgIcon} />
          );
        })}
      </form>
    </>
  );
};
