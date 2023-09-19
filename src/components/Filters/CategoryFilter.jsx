import { useContext } from "react";

import { DataContext } from "../../contexts/DataContext";
import "./Filters.css"
import { useDispatch, useSelector } from "react-redux";
import { ADD_CATEGORY, REMOVE_CATEGORY } from "../../Redux/FilterSlice";

export const CategoryFilter = () => {
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const { state } = useContext(DataContext);
  const categoriesList = state.products.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);
  const handleCategoryClick = (category ) => {
    if (filters.category.includes(category)) {
        dispatch(REMOVE_CATEGORY(category))
    } else {
        dispatch(ADD_CATEGORY(category))

    }
  }
  return (
    <>
      <div className="filter_category">
        <p>Category</p>
        <div>
          {categoriesList.map((itemCat) => {
            return (
              <li key={itemCat}>
                <input
                  type="checkbox"
                  name={`${itemCat} checkbox`}
                  id={itemCat}
                  checked={filters.category.includes(itemCat)}
                  onClick={() =>handleCategoryClick(itemCat)}
                />
                <label htmlFor={itemCat}>{itemCat}</label>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};
