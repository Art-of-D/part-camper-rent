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
import { isChecked } from '../../utils/filterUtils';

export const Filter = () => {
  const filterTypes = {
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
  const vehicleTypeList = ['panelTruck', 'fullyIntegrated', 'alcove'];

  const dispatch = useDispatch();

  const transformType = name => {
    switch (name) {
      case 'van':
        return vehicleTypeList[0];
      case 'fully integrated':
        return vehicleTypeList[1];
      default:
        return vehicleTypeList[2];
    }
  };

  const handleAddToFilter = ({ type, item }) => {
    if (type === filterTypes.vehicleType) {
      dispatch(addToFilter({ type, item: transformType(item) }));
      return;
    }
    dispatch(addToFilter({ type, item }));
  };

  const handleRemoveFromFilter = ({ type, item }) => {
    if (type === filterTypes.vehicleType) {
      dispatch(removeFromFilter({ type, item: transformType(item) }));
      return;
    }
    dispatch(removeFromFilter({ type, item }));
  };
  const { vehicleEquipment, vehicleType } = useSelector(getFilters);

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
                type={filterTypes.vehicleEquipment}
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
            const checked = isChecked(key, vehicleType);
            return (
              <CategoryElement
                key={uuidv4()}
                type={filterTypes.vehicleType}
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
