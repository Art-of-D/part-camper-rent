import { FilterInput } from './FilterInput/FilterInput';
import { CategoryElement } from './CategoryElement/CategoryElement';
import { svgIcons } from '../../data/svgIcons';
import { v4 as uuidv4 } from 'uuid';
import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFilter,
  removeFromFilter,
} from '../../redux-store/filter/filterReducer';
import { getFilters } from '../../redux-store/filter/selectors';

export const Filter = () => {
  const type = {
    vehicleEquipment: 'vehicleEquipment',
    vehicleType: 'vehicleType',
  };
  const vehicleEquipmentList = [
    'AC',
    'transmission',
    'kitchen',
    'TV',
    'bathroom',
  ];
  const vehicleTypeList = ['van', 'integrated', 'alcove'];

  const dispatch = useDispatch();

  const handleAddToFilter = item => {
    dispatch(addToFilter({ type, item }));
  };

  const handleRemoveFromFilter = item => {
    dispatch(removeFromFilter({ type, item }));
  };
  const { vehicleEquipment, vehicleType } = useSelector(getFilters);

  const isChecked = (name, arr) => {
    if (arr) {
      return arr.some(item => item === name);
    }
    return false;
  };

  return (
    <>
      <form>
        <h3 className={style.header3}>Location</h3>
        <FilterInput />
        <h3 className={style.header3}>Filters</h3>
        <h2 className={style.header2}>Vehicle equipment</h2>
        <div className={style.filterInnerWrapper}>
          {vehicleEquipmentList.map(key => {
            const { svgIcon, name } = svgIcons[key];
            const checked = isChecked(name, vehicleEquipment);
            return (
              <CategoryElement
                key={uuidv4()}
                type={type.vehicleEquipment}
                name={name}
                svgIcon={svgIcon}
                checked={checked}
                handleAddToFilter={handleAddToFilter}
                handleRemoveFromFilter={handleRemoveFromFilter}
              />
            );
          })}
        </div>
        <h2 className={style.header2}>Vehicle type</h2>
        <div className={style.filterInnerWrapper}>
          {vehicleTypeList.map(key => {
            const { svgIcon, name } = svgIcons[key];
            const checked = isChecked(name, vehicleType);
            return (
              <CategoryElement
                key={uuidv4()}
                type={type.vehicleType}
                name={name}
                svgIcon={svgIcon}
                checked={checked}
                handleAddToFilter={handleAddToFilter}
                handleRemoveFromFilter={handleRemoveFromFilter}
              />
            );
          })}
        </div>
      </form>
    </>
  );
};
