import { FilterInput } from '../FilterInput/FilterInput';
import { CategoryElement } from '../CategoryElement/CategoryElement';
import { svgIcons } from '../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';
import style from './Filter.module.css';

export const Filter = () => {
  const type = {
    vehicleEquipment: 'vehicleEquipment',
    vehicleType: 'vehicleType',
  };
  const vehicleEquipment = [
    'airCooler',
    'transmission',
    'kitchen',
    'TV',
    'bathroom',
  ];

  const vehicleType = ['van', 'integrated', 'aclove'];
  return (
    <>
      <form>
        <h3 className={style.header3}>Location</h3>
        <FilterInput />
        <h3 className={style.header3}>Filters</h3>
        <h2 className={style.header2}>Vehicle equipment</h2>
        <div className={style.filterInnerWrapper}>
          {vehicleEquipment.map(key => {
            const { svgIcon, name } = svgIcons[key];
            return (
              <CategoryElement
                key={uuidv4()}
                type={type.vehicleEquipment}
                name={name}
                svgIcon={svgIcon}
              />
            );
          })}
        </div>
        <h2 className={style.header2}>Vehicle type</h2>
        <div className={style.filterInnerWrapper}>
          {vehicleType.map(key => {
            const { svgIcon, name } = svgIcons[key];
            return (
              <CategoryElement
                key={uuidv4()}
                type={type.vehicleType}
                name={name}
                svgIcon={svgIcon}
              />
            );
          })}
        </div>
      </form>
    </>
  );
};
